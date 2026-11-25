// Outils partagés par les essais de direction artistique (/direction-a, -b, -c).
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { ShaderMount, getShaderColorFromString, type ShaderMountUniforms } from '@paper-design/shaders';

gsap.registerPlugin(ScrollTrigger, SplitText);
export { gsap, ScrollTrigger, SplitText };

const racine = document.documentElement;

/** L'appareil demande moins d'animations. En développement, « ?calme » dans l'adresse le simule (tests). */
export const calme =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  (import.meta.env.DEV && new URLSearchParams(location.search).has('calme'));
if (calme) racine.classList.add('calme');

/** Écran sans souris (téléphone, tablette) */
export const tactile = window.matchMedia('(hover: none)').matches;

export const estNuit = () =>
  racine.dataset.theme ? racine.dataset.theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

/** Appelle `rappel` tout de suite, puis à chaque passage jour ↔ nuit */
export function suivreTheme(rappel: (nuit: boolean) => void) {
  let avant = estNuit();
  rappel(avant);
  const verifier = () => {
    const nuit = estNuit();
    if (nuit !== avant) rappel((avant = nuit));
  };
  new MutationObserver(verifier).observe(racine, { attributes: true, attributeFilter: ['data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', verifier);
}

/** Couleur CSS → format attendu par les shaders */
export const teinte = (c: string) => getShaderColorFromString(c);

const cadrage = { u_fit: 2, u_scale: 1, u_rotation: 0, u_originX: 0.5, u_originY: 0.5, u_offsetX: 0, u_offsetY: 0, u_worldWidth: 0, u_worldHeight: 0 };

/** Pose un shader Paper dans `el`. Sans WebGL, renvoie null : le fond CSS prévu reste visible. */
export function poserShader(el: HTMLElement, fragment: string, uniformes: ShaderMountUniforms, vitesse = 1, finesse = 2) {
  try {
    return new ShaderMount(el, fragment, { ...cadrage, ...uniformes }, undefined, calme ? 0 : vitesse, 9000, finesse);
  } catch {
    return null;
  }
}

/** Les lignes d'un titre montent une à une quand il entre à l'écran */
export function lignesQuiMontent(el: HTMLElement, debut = 'top 85%') {
  if (calme) return;
  SplitText.create(el, {
    type: 'lines',
    mask: 'lines',
    autoSplit: true,
    onSplit: (self) =>
      gsap.from(self.lines, {
        yPercent: 115,
        duration: 1.4,
        ease: 'expo.out',
        stagger: 0.09,
        scrollTrigger: { trigger: el, start: debut, once: true },
      }),
  });
}

/** Fondu qui monte doucement, au moment où `declencheur` entre à l'écran */
export function fonduQuiMonte(cibles: gsap.TweenTarget, declencheur: Element, extra: gsap.TweenVars = {}) {
  if (calme) return;
  gsap.from(cibles, {
    autoAlpha: 0,
    y: 28,
    duration: 1.2,
    ease: 'power3.out',
    stagger: 0.08,
    scrollTrigger: { trigger: declencheur, start: 'top 86%', once: true },
    ...extra,
  });
}

/** L'en-tête apparaît une fois le logo d'ouverture dépassé */
export function enteteApresIntro(tete: HTMLElement | null) {
  if (!tete) return;
  ScrollTrigger.create({
    start: () => window.innerHeight * 0.7,
    end: 'max',
    toggleClass: { targets: tete, className: 'visible' },
  });
}

/** Un fond fixe qui n'apparaît qu'après l'ouverture (l'animation du logo garde son fond uni) */
export function fondApresIntro(fond: HTMLElement | null) {
  if (!fond) return;
  gsap.fromTo(
    fond,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: 'none', scrollTrigger: { start: 0, end: () => window.innerHeight * 0.85, scrub: true } },
  );
}

/** Recalcule les déclencheurs quand les polices sont chargées (les hauteurs changent) */
document.fonts?.ready.then(() => ScrollTrigger.refresh());

/**
 * Le monogramme S+A en métal liquide (Paper Shaders). `cadre` contient le SVG du monogramme (repli sans WebGL)
 * et `metal`, la zone où le shader se pose. Renvoie le shader, ou null s'il n'a pas pu être créé.
 */
export async function monogrammeMetal(cadre: HTMLElement, metal: HTMLElement, teinteMetal: string) {
  const { liquidMetalFragmentShader, toProcessedLiquidMetal } = await import('@paper-design/shaders');
  const traces = [...cadre.querySelectorAll<SVGPathElement>('svg path')];
  if (!traces.length) return null;
  // 1. le monogramme dessiné en noir sur fond transparent, avec une marge pour les reflets
  const H = 1000;
  const marge = 80;
  const c = document.createElement('canvas');
  c.width = Math.round((H * 314) / 680) + marge * 2;
  c.height = H + marge * 2;
  const ctx = c.getContext('2d')!;
  ctx.translate(marge, marge);
  ctx.scale(H / 680, H / 680);
  ctx.translate(2, 0);
  traces.forEach((p) => ctx.fill(new Path2D(p.getAttribute('d')!)));
  const brut = await new Promise<Blob | null>((ok) => c.toBlob(ok, 'image/png'));
  if (!brut) return null;
  // 2. préparation par Paper Shaders, puis le métal
  const { pngBlob } = await toProcessedLiquidMetal(URL.createObjectURL(brut));
  const img = new Image();
  img.src = URL.createObjectURL(pngBlob);
  await img.decode();
  const monture = poserShader(
    metal,
    liquidMetalFragmentShader,
    {
      u_image: img,
      u_isImage: true,
      u_fit: 1,
      u_scale: 0.78,
      u_colorBack: [0, 0, 0, 0],
      u_colorTint: teinte(teinteMetal),
      u_repetition: 2.5,
      u_softness: 0.35,
      u_shiftRed: 0,
      u_shiftBlue: 0,
      u_distortion: 0.06,
      u_contour: 0.3,
      u_angle: 70,
      u_shape: 0,
    },
    0.5,
  );
  if (monture) cadre.classList.add('pret');
  return monture;
}

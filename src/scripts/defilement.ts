// Défilement fluide (Lenis), synchronisé avec les animations GSAP / ScrollTrigger
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// si l'appareil demande « réduire les animations », on garde le défilement normal
const calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!calme) {
  const lenis = new Lenis({ autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((temps) => lenis.raf(temps * 1000));
  gsap.ticker.lagSmoothing(0);
  if (import.meta.env.DEV) Object.assign(window, { __lenis: lenis, __gsap: gsap }); // tests seulement

  // liens internes (#suite…) : glissé doux au lieu du saut brutal du navigateur
  document.addEventListener('click', (e) => {
    const lien = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    const id = lien?.getAttribute('href');
    if (!lien || !id || id.length < 2) return;
    const cible = document.querySelector<HTMLElement>(id);
    if (!cible) return;
    e.preventDefault();
    lenis.scrollTo(cible, { duration: 1.6 });
  });
}

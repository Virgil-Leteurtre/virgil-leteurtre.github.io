// Accueil et page Cinéma (reprise du script validé de Virgil, 01_Prospection/Site web/js/cinema.js)
const root = document.documentElement;
const calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Mode jour / nuit (nuit par défaut, gardé d'une visite à l'autre) ----------
const bouton = document.getElementById('mode');
const majBouton = () => {
  if (!bouton) return;
  const jour = root.dataset.theme === 'jour';
  bouton.textContent = jour ? 'MODE JOUR' : 'MODE NUIT';
  bouton.setAttribute('aria-pressed', jour ? 'true' : 'false');
};
majBouton();
bouton?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'jour' ? 'nuit' : 'jour';
  try {
    localStorage.setItem('cinema-theme', root.dataset.theme);
  } catch (e) {}
  majBouton();
});

// ---------- Titre en « générique » : mot par mot ----------
const titre = document.getElementById('titre');
if (titre) {
  const texte = titre.textContent?.trim() ?? '';
  titre.setAttribute('aria-label', texte);
  titre.innerHTML = texte
    .split(/\s+/)
    .map((m, n) => `<span class="mot" aria-hidden="true"><span style="--n:${n}">${m}</span></span>`)
    .join(' ');
}

// ---------- Cartes ouvertes : le reste se floute ----------
document.querySelectorAll<HTMLElement>('[data-ouvre]').forEach((el) =>
  el.addEventListener('click', () => {
    const d = document.getElementById('fenetre-' + el.dataset.ouvre) as HTMLDialogElement | null;
    if (d && typeof d.showModal === 'function') d.showModal();
  }),
);
document.querySelectorAll<HTMLDialogElement>('dialog.fenetre').forEach((d) => {
  d.querySelector('.fermer')?.addEventListener('click', () => d.close());
  // clic à côté de la carte = retour
  d.addEventListener('click', (e) => {
    if (e.target === d) d.close();
  });
});

// ---------- Le fond suit doucement la souris ----------
const fond = document.querySelector<HTMLElement>('.fond');
if (fond && !calme && window.matchMedia('(hover: hover)').matches) {
  window.addEventListener(
    'pointermove',
    (e) => {
      fond.style.setProperty('--px', ((e.clientX / window.innerWidth - 0.5) * -24).toFixed(1) + 'px');
      fond.style.setProperty('--py', ((e.clientY / window.innerHeight - 0.5) * -24).toFixed(1) + 'px');
    },
    { passive: true },
  );
}

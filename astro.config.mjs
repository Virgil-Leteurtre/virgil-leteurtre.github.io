// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Adresse du site en ligne (GitHub Pages du compte virgil-leteurtre)
  site: 'https://virgil-leteurtre.github.io',
  // Barre d'outils Astro masquée : l'aperçu reste identique au vrai site.
  devToolbar: { enabled: false },

  // Pages produites en « cinema.html », « studio-auxo.html » : les liens de l'ancien site restent valides.
  build: { format: 'file' },

  // Polices de l'univers Cinéma et de l'accueil (Bodoni Moda, elle, vient de @fontsource-variable).
  // Outil de polices intégré à Astro : téléchargées une fois (Fontsource) puis servies par le site lui-même.
  // Les visiteurs ne contactent jamais Google (RGPD).
  fonts: [
    { provider: fontProviders.fontsource(), name: 'Anton', cssVariable: '--police-anton', weights: [400], styles: ['normal'], fallbacks: ['Impact', 'sans-serif'] },
    { provider: fontProviders.fontsource(), name: 'IBM Plex Mono', cssVariable: '--police-plex', weights: [400, 500], styles: ['normal'], fallbacks: ['monospace'] },
    { provider: fontProviders.fontsource(), name: 'Manrope', cssVariable: '--police-manrope', weights: [400, 500, 600], styles: ['normal'], fallbacks: ['sans-serif'] },
  ],
});

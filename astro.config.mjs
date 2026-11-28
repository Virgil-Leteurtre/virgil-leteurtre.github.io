// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Adresse du site en ligne (GitHub Pages du compte virgil-leteurtre)
  site: 'https://virgil-leteurtre.github.io',
  // Barre d'outils Astro masquée : l'aperçu reste identique au vrai site.
  devToolbar: { enabled: false },

  // Pages produites en dossiers (cinema/index.html…) : /cinema et /cinema/ marchent toutes les deux.
  // Les anciennes adresses en .html (cinema.html…) restent valides grâce aux petites pages de renvoi de public/.
  trailingSlash: 'always',
  build: { format: 'directory' },

  // Polices de l'univers Cinéma et de l'accueil (Bodoni Moda, elle, vient de @fontsource-variable).
  // Outil de polices intégré à Astro : téléchargées une fois (Fontsource) puis servies par le site lui-même.
  // Les visiteurs ne contactent jamais Google (RGPD).
  fonts: [
    { provider: fontProviders.fontsource(), name: 'Anton', cssVariable: '--police-anton', weights: [400], styles: ['normal'], fallbacks: ['Impact', 'sans-serif'] },
    { provider: fontProviders.fontsource(), name: 'IBM Plex Mono', cssVariable: '--police-plex', weights: [400, 500], styles: ['normal'], fallbacks: ['monospace'] },
    // Newsreader : police de lecture de l'univers AUXO (textes longs), plus douce que la Bodoni réservée aux titres
    { provider: fontProviders.fontsource(), name: 'Newsreader', cssVariable: '--police-lecture', weights: ['200 800'], styles: ['normal', 'italic'], fallbacks: ['Georgia', 'serif'] },
    { provider: fontProviders.fontsource(), name: 'Manrope', cssVariable: '--police-manrope', weights: [400, 500, 600], styles: ['normal'], fallbacks: ['sans-serif'] },
  ],
});

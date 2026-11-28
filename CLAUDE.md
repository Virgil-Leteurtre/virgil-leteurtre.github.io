# Site Studio AUXO

Site vitrine de **Studio AUXO**, l'agence de Virgil. Objectif : un site haut de gamme (niveau agence « à 10 000 € »), avec des animations et des matières soignées, hébergé sur GitHub Pages.

## Façon de travailler
- En **français**, phrases simples, **une étape à la fois**. Quand Virgil doit agir, des instructions numérotées et précises (quel menu, quel bouton).
- Tout ce qui se voit se valide avec lui : montre chaque étape dans l'aperçu (fenêtre de droite), sur ordinateur et téléphone, en jour et en nuit, avant de passer à la suite.
- **Demande avant** : d'installer un paquet, un logiciel, un skill ou un connecteur ; de publier sur GitHub ; d'acheter quoi que ce soit (nom de domaine) ; de supprimer un fichier (préférer `_archive/`).
- Aucun mot de passe ni clé dans le code. Le dépôt sera **public** : rien de personnel dedans, sauf le téléphone et l'e-mail de contact de `/cinema` (accord de Virgil le 25/11/2026, déjà publics sur son ancien site).
- N'invente aucun contenu présenté comme vrai (projets, clients, chiffres, avis) : les textes et les photos viennent de Virgil.

## Identité visuelle (validée)
- Logo : `src/assets/logo/studio-auxo.svg`, export Illustrator de Virgil, à ne pas retoucher. 10 tracés : 2 pour le bloc S+A, puis t u d i o U X O.
- Couleurs : bordeaux `#4E0000`, crème `#FFF6E7` (détails et autres couleurs : `DIRECTION-ARTISTIQUE.md`). AUXO : jour = fond crème, nuit = fond bordeaux, bouton lune. Cinéma : nuit par défaut, bouton MODE NUIT/JOUR.
- Polices : Bodoni Moda (AUXO, titres seulement, `@fontsource-variable`), Newsreader (AUXO, textes à lire : Bodoni jugée illisible en texte long par Virgil le 25/11/2026), Anton, IBM Plex Mono et Manrope (via `fonts` dans `astro.config.mjs`). Toutes **hébergées sur le site**, jamais depuis Google Fonts (RGPD).
- Animation d'ouverture (`src/components/IntroLogo.astro`, validée le 24/11/2026) : le S+A apparaît au centre, glisse vers la gauche, le nom naît dans la forme du S (creux compris), l'ensemble finit centré. 4,1 s, joue une fois. Ne pas changer le rythme sans l'accord de Virgil.
  - En développement, ajouter `?t=1.6` à l'adresse fige l'animation à 1,6 s pour l'analyser.

## Outils (choisis avec Virgil le 24/11/2026)
- **Astro 7** : site statique.
- **GSAP 3** (+ ScrollTrigger, SplitText : gratuits, usage commercial permis) et **Lenis** (défilement fluide), branchés ensemble dans `src/scripts/defilement.ts`.
- **Paper Shaders** (`@paper-design/shaders`) pour les textures animées : version **figée exprès** (les versions 0.0.x changent souvent).
- Three.js seulement si une vraie 3D interactive est décidée.
- Connecteur **Astro Docs** (`.mcp.json`) : à consulter pour toute question Astro.
- Skills de design **installés pour tout le compte** (25/11/2026) : **frontend-design** (officiel Anthropic) et **ui-ux-pro-max** (nextlevelbuilder, licence MIT, utilise Python 3). Les charger avant tout travail de design.
- 21st.dev Magic : écarté (composants React/Tailwind, pas adaptés à ce site).
- GitHub : le site remplacera l'ancien, dépôt `virgil-leteurtre/virgil-leteurtre.github.io` (https://virgil-leteurtre.github.io). **Publier UNIQUEMENT avec le compte `virgil-leteurtre`, JAMAIS `twitchmoments`** (consigne ferme de Virgil, 25/11/2026). Vérifier `gh auth status` avant tout envoi.
- Toujours respecter `prefers-reduced-motion` (animations coupées ou réduites).

## Commandes
- Aperçu : `npx astro dev --background`, puis http://localhost:4321 (arrêt : `npx astro dev stop`).
- Vérification : `npm run build` doit finir sans erreur.

## Mise en ligne (faite le 25/11/2026)
- En ligne sur https://virgil-leteurtre.github.io : chaque envoi sur `main` du dépôt `Virgil-Leteurtre/virgil-leteurtre.github.io` reconstruit et publie le site (`.github/workflows/deploy.yml`, Pages en mode « GitHub Actions »). Demander l'accord de Virgil avant chaque publication.
- GitHub Pages, publication automatique par GitHub Actions : workflow officiel Astro, à ajouter au moment de publier en vérifiant les versions sur https://docs.astro.build/en/guides/deploy/github
- Le compte GitHub du PC héberge déjà un autre site : prévoir un **nom de domaine** (à choisir avec Virgil) ou une organisation GitHub.
- Limites GitHub Pages : environ 1 Go de site et 100 Go de trafic par mois ; fait pour une vitrine, pas une boutique. Toutes les images passent par `astro:assets` (AVIF/WebP).

## Où on en est
1. ✅ Projet créé : animation du logo, jour/nuit, défilement fluide, icône d'onglet.
2. ✅ **Direction artistique** : celle que Virgil a validée avec sa discussion Claude « Site web Virgil Leteurtre ». **Tout est dans `DIRECTION-ARTISTIQUE.md` : à lire avant toute modification.**
   - Trois pages, reprises à l'identique le 25/11/2026 : `/` accueil à deux portes, `/cinema` (verre, jeu de cartes, Anton + IBM Plex Mono + Manrope, mode NUIT/JOUR propre, clé « cinema-theme »), `/studio-auxo` (logo animé, 9 projets en cadres bordeaux, arches).
   - Pages produites en dossiers (`build.format: 'directory'`, `trailingSlash: 'always'`, depuis le 27/11/2026) : `/cinema` et `/cinema/` marchent. Liens internes toujours avec « / » final. Les anciennes adresses `cinema.html`, `studio-auxo.html`, `projets/<nom>.html` renvoient vers les nouvelles (petites pages dans `public/`). PDF aux mêmes noms que l'ancien site.
   - Images dans `src/assets/site/`, fonds dans `public/img/`. Mes essais précédents sont dans `_archive/`, la copie de l'artefact dans `_reference/`.
3. ✅ Texte d'introduction du Studio AUXO validé (25/11/2026). Images HD des projets reprises de `Desktop/Lisaa 2026` (25/11/2026), anciennes dans `_archive/images-basse-def/`. Pas d'original plus grand pour Le refuge, Dubon (893 px) ni Le Règne animal (photos trouvées sur Internet par Virgil) : à la place, fiche du film dans la fenêtre Règne animal (infos publiques + lien Festival de Cannes). Pas d'affiche ni d'image du film téléchargée (droits d'auteur).
4. ✅ Une page par projet (25/11/2026) : `src/pages/projets/[slug].astro`, contenu dans `src/data/projets.ts` (textes du portfolio), rendus dans `src/assets/projets/<projet>/` (tirés de `Desktop/Lisaa 2026`). La grille de `/studio-auxo` y mène. Erreurs de copier-coller du portfolio (Obadia, Hegoburu, Le refuge) écartées : à signaler à Virgil pour son PDF.
5. Finitions : référencement (plan du site, vignettes de partage), formulaire de contact (service externe), contrôle de vitesse Lighthouse ≥ 90.
6. ✅ Mise en ligne (25/11/2026). Nom de domaine : plus tard, si Virgil le souhaite.

Consignes du modèle Astro : @AGENTS.md

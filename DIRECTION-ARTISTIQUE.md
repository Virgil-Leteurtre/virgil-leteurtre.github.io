# Direction artistique validée par Virgil

> Copie de la fiche de passation de sa discussion Claude « Site web Virgil Leteurtre » (dossier `01_Prospection/Site web/CLAUDE.md`, 25/11/2026).
> Dans ce projet Astro : `src/pages/index.astro` (accueil), `src/pages/cinema.astro` + `src/styles/cinema.css` + `src/scripts/cinema.ts`, `src/pages/studio-auxo.astro` (logo animé = `IntroLogo.astro`).
> Différences voulues : polices servies par le site (plus Google Fonts), images optimisées par Astro. Rien d'autre ne change sans l'accord de Virgil.

---


Site statique (HTML + CSS + JS, sans framework ni build) destiné à GitHub Pages, dépôt
`virgil-leteurtre/virgil-leteurtre.github.io` (branche `main`), adresse https://virgil-leteurtre.github.io.
Virgil débute en code : expliquer chaque étape simplement, en français, une à la fois.

## Règles de Virgil (à respecter absolument)
- N'inventer AUCUN contenu présenté comme vrai (projets, clients, chiffres, avis). Tout vient de son ancien site,
  de son CV, de son portfolio, de sa carte de visite ou de lui.
- Téléphone et e-mail : il a accepté de les afficher (07 83 29 60 32 · virgilleteurtre@gmail.com).
- Logo Studio AUXO et son animation d'ouverture : à garder TELS QUELS (code d'origine conservé dans studio-auxo.html).
- Garder sa couleur rouge d'origine : bordeaux #4E0000.

## État actuel (version validée)
- `index.html` : accueil = « porte d'entrée en deux » (Cinéma | Studio AUXO), même taille, équilibrées.
- `cinema.html` + `css/cinema.css` + `js/cinema.js` : page Cinéma (assistant décorateur).
- `studio-auxo.html` : page Studio AUXO = fichier d'animation du logo d'origine + section projets + pied de page.
- PDF gardés sous LES MÊMES NOMS que l'ancien site (les liens déjà envoyés restent valides) :
  `CV_Virgil_Leteurtre.pdf`, `Portfolio_Virgil_Leteurtre.pdf`.
- Pas encore mis en ligne (au moment de la passation). Mise en ligne prévue : upload de tout le contenu
  du dossier dans le dépôt GitHub (les fichiers de même nom remplacent les anciens).

## Reste à faire
1. Écrire avec Virgil le texte d'introduction du Studio AUXO, puis le remettre dans studio-auxo.html
   (commentaire HTML repère : « Texte d'introduction du Studio AUXO » → `<p class="suite__intro">…</p>`).
   Aucun texte du studio n'existe encore : poser les questions à Virgil, ne rien inventer.
2. Mettre en ligne sur GitHub Pages et vérifier sur ordinateur + téléphone.
3. Optionnel : vraie déformation du verre (filtre SVG feDisplacementMap) si Virgil le demande ; photos du
   Règne animal en meilleure qualité si Virgil en fournit (actuelles : 588 px et 321 px de large).
4. Le bouton « Découvrir » de la page AUXO a été descendu (bottom: 2.5vh au lieu de 5vh) : vérifier avec Virgil.

## Direction artistique

### Deux univers
- CINÉMA (assistant décorateur — film, série, pub) : brut, cinématographique. Fond = photo du clap du tournage
  du « Règne animal », noir et blanc, floutée, avec grain de pellicule. Police très marquée (Anton), texte blanc
  cassé/beige. Cartes en verre posées comme un jeu de cartes.
- STUDIO AUXO (architecture intérieure & mobilier) : très élégant, « un autre monde ». Crème + bordeaux,
  Bodoni Moda. On arrive sur l'animation du logo en très grand (plein écran), puis un petit « Découvrir »,
  puis les projets.

### Couleurs
- Bordeaux (DA, à garder) : #4E0000 ; nuances pour le relief du cadre : #A0362C → #4E0000 → #2A0000 (dégradé 145°),
  #7A1410 et #8A1C16 (boutons), #3A0000.
- Crème AUXO : #FFF6E7 ; texte doux AUXO jour : #6B2A22 ; traits : rgba(78,0,0,.25).
- Blanc cassé Cinéma : #F3EDE3 ; fond sombre de secours : #1A1714.
- Cinéma mode NUIT (défaut) : texte #F3EDE3, discret rgba(243,237,227,.72), voile rgba(22,18,15,.5),
  verre rgba(255,255,255,.1), verre fort rgba(40,32,28,.55), points rgba(255,255,255,.16), SANS cadre rouge.
- Cinéma mode JOUR : texte #4E0000, discret rgba(78,0,0,.75), voile rgba(240,233,222,.72),
  verre rgba(255,255,255,.4), verre fort rgba(255,250,244,.72), points rgba(78,0,0,.12), AVEC cadre bordeaux fin 3 px.
- AUXO jour : fond #FFF6E7, encre #4E0000, cadres bordeaux. AUXO nuit : fond #4E0000, encre #FFF6E7, cadres crème
  (dégradé #FFFFFF → #FFF6E7 → #C9B79C). Le mode suit prefers-color-scheme ou le bouton (localStorage « auxo-theme »).
  Cinéma : localStorage « cinema-theme » (valeurs jour / nuit).

### Polices (Google Fonts)
- Anton : titres Cinéma (titre principal clamp(44px, 7.4vw, 104px), line-height 1.02, letter-spacing .015em,
  MAJUSCULES — Virgil a trouvé la version trop serrée « hyper collée » : garder cet espacement) ;
  « CINÉMA » de l'accueil clamp(84px, 11vw, 170px) ; titres de cartes 28px ; titres de fenêtres clamp(38px, 6vw, 68px).
- IBM Plex Mono : petites mentions façon clap (« SC. 01 — Prise 01 », numéros de carte), 10–13px, letter-spacing .14–.2em.
- Manrope : texte courant 14–17px, boutons 14px 600.
- Mise à jour du 25/11/2026 : dans AUXO, la Bodoni est réservée aux titres ; les textes à lire (chapeaux, fiches, liens des fenêtres) passent en Newsreader, plus douce (Virgil trouvait la Bodoni illisible en texte long).
- Bodoni Moda : tout l'univers AUXO (titre projets clamp(40px, 6vw, 76px), titres projets 30px italique).

### Mise en page
- Accueil : fond photo du clap N&B (net) + voile rgba(22,18,15,.6) + grain ; pastille « Virgil Leteurtre » en haut au centre ;
  deux portes de même largeur (grille 1fr 1fr) : à gauche verre (sans cadre rouge) avec « CINÉMA » géant,
  à droite panneau crème avec logo AUXO bordeaux et cadre bordeaux fin 3 px. Sur téléphone : empilées.
- Cinéma : barre de navigation en pilule de verre collante (nom, Cinéma, Studio AUXO, bouton MODE NUIT/JOUR) ;
  sur-titre mono ; grand titre « La créativité au service d'une histoire » ; jeu de 7 cartes verticales 210×300 px
  posées en éventail (rotations -3,5,-4,2,-6,3,6°, décalages verticaux), Le Règne animal EN PREMIER (à gauche),
  puis 6 cartes « La suite… / …entre vos mains » (SC. 02 à SC. 07) ; aide « Survolez les cartes · cliquez pour ouvrir »
  (sur tactile : « Faites glisser les cartes · touchez pour ouvrir ») ; 3 petits boutons PORTFOLIO, CV, CONTACT.
  Sur ≤1000 px : cartes en défilement horizontal avec aimantation.
- Fenêtres (balise <dialog>) : Règne animal (980 px, 2 photos + texte), Contact (780 px), CV, Portfolio (780 px).
  Le reste de la page se floute (::backdrop blur 16px). Clic à côté ou × ou Échap = fermer.
- AUXO : 1) écran plein = animation du logo + « Découvrir » + trait animé ; bouton rond jour/nuit en haut à droite
  (d'origine) et pilule « ← Accueil » en haut à gauche ; 2) en-tête « Architecture intérieure & mobilier » ;
  3) grille de 9 projets sur 3 colonnes décalées (2 colonnes ≤900 px, 1 colonne ≤560 px) ; certaines images en ARCHE
  (Membrane, Dubon, Le refuge) ; chaque projet ouvre le portfolio PDF à la bonne page ; 4) pied de page logo + contacts.

### Matières et lumière
- Verre dépoli : backdrop-filter blur(22px) saturate(130%), liseré intérieur 1px blanc 30 %, ombre intérieure,
  reflet en biais linear-gradient(118deg, blanc 26 % → transparent 36 %).
- Texture du verre retenue par Virgil : PETITS POINTS simples, plats, sans relief : radial-gradient point 0.7px,
  trame 6 px. (Testé puis écarté : verre martelé/gaufré en image — trop visible ; sphères 3D brillantes — refusées.)
- Cadre « fenêtre » : bordeaux, TRÈS FIN (3 px), petit relief (highlight intérieur rgba(255,220,210,.6) en haut).
  Version épaisse (12–14 px) refusée car « trop grossière ».
- Grain de pellicule animé sur le fond (pas de 3 px, steps(4), 0,9 s en boucle).

### Animations
- Cinéma : fond qui s'allume comme un projecteur (1,6 s, scintillement) ; titre mot par mot comme un générique
  (1 s chacun, départ 0,5 s, +70 ms par mot) ; cartes « distribuées » depuis le bas (0,9 s, départ 1,1 s,
  +90 ms par carte) ; survol carte : redressement + scale(1.42) + translateY(-34px) en 0,45 s cubic-bezier(.2,.8,.2,1),
  le contenu passe aux réseaux (ou au résumé du stage pour le Règne animal) ; ouverture fenêtre 0,5 s ;
  fond qui suit doucement la souris (±12 px). Tout est coupé si prefers-reduced-motion.
- Accueil : portes qui montent (1 s, la 2e décalée de 0,15 s), survol = s'élève de 8 px, flèche qui avance.
- AUXO : animation d'origine du logo (S+A qui apparaît, glisse à gauche en 2,6 s, lettres une à une, « Découvrir » à 4,1 s) ;
  projets qui apparaissent au défilement (1 s) ; survol projet : cadre monte de 6 px, image zoom 1,04.

### Textes déjà écrits (tous issus de ses documents)
- Accroche : « La créativité au service d'une histoire » (carte de visite).
- « SC. 01 — Prise 01 · Assistant décorateur — film, série, pub ».
- Cartes : « La suite… / …entre vos mains » ; survol : « Écrivons la suite » + Instagram · @virgil_leteurtre,
  LinkedIn · Virgil Leteurtre, virgilleteurtre@gmail.com ; « CLIQUER POUR ME CONTACTER → ».
- Règne animal : « Thomas Cailley · Nord-Ouest Films · 2022 — Stage au sein de l'équipe décoration du long métrage,
  aux côtés de la cheffe décoratrice Julia Lemaire : recherches, éléments graphiques et accessoires, montage de décors
  et présence sur le tournage. Cette expérience nourrit encore ma manière de concevoir des espaces à partir d'un récit,
  d'un cadrage et de scènes de vie. » (CV)
- Contact : « La suite est entre vos mains — Film, série ou pub : je cherche un poste d'assistant décorateur.
  Préparation, installation, accessoires, présence sur le tournage. Disponible partout en France · permis B. »
- CV : « Diplômé en architecture intérieure et design à LISAA Bordeaux (titre RNCP niveau 7), deux ans d'alternance
  à L'Atelier D à Mérignac, stage déco sur Le Règne animal. »
- Portfolio : « Sélection de travaux 2021—2026 : architecture intérieure, design de mobilier et décor de cinéma. »
- AUXO : « Architecture intérieure & mobilier », « Architecture intérieure · Mobilier », « Entrer dans le studio → ».
- Projets (nom — description — page du portfolio PDF) : 01 Membrane — Rénovation d'une école de musique — projet de fin
  d'études — p.3 ; 02 NAL — Rénovation d'un appartement locatif — p.9 ; 03 Obadia — Appartement adapté en location
  premium — p.11 ; 04 Hegoburu — Réhabilitation d'une échoppe familiale — p.13 ; 05 Dubon — Rénovation d'un appartement
  de 180 m² — p.15 ; 06 Mongiron (orthographe validée par Virgil) — Rénovation d'une bâtisse en pierre près de
  Saint-Émilion — p.17 ; 07 OSE — Maison ressource pour enfants en difficulté — p.20 ; 08 Le refuge — Salle de pause pensée
  comme un refuge — p.22 ; 09 Fracture — Canapé-salon convertible et modulable — p.24. Le Règne animal : p.8.

### Ce que Virgil aime / refuse
- Aime : la piste A d'origine (photo du tournage, typo cinéma brute en blanc/beige) ; le verre type « vitrage » ;
  le cadre fenêtre bordeaux très fin avec un peu de 3D ; les petites cartes / jeu de cartes ; les arches ;
  le mode jour/nuit sur les deux pages ; l'élégance de la page AUXO ; la texture à petits points.
- Refuse : fond noir plat avec sphères/bulles brillantes ; cadre rouge épais ; effet gaufré trop gros ou trop visible ;
  texte trop serré ; image « Le refuge » trop sombre (remplacée par la version boisée/végétale).
- Il préfère : mode jour = cadre rouge, mode nuit = verre blanc sans cadre.

## Fichiers du site et leur rôle
- img/fond-tournage-flou.jpg : fond de la page Cinéma (photo du clap N&B, floutée). Source : portfolio p.8.
- img/fond-tournage-nb.jpg : fond de l'accueil (même photo, nette, N&B).
- img/tournage-clap.jpg/.webp : carte et fenêtre « Le Règne animal » (photo du clap sur le tournage, 588×519).
- img/tournage-foret.jpg/.webp : fenêtre « Le Règne animal » (image du film en forêt, 321×283 ; Virgil a validé son usage).
- img/logo-auxo-bordeaux.svg / logo-auxo-creme.svg : logo Studio AUXO (copie du SVG d'origine, couleur fixée).
- img/membrane, nal, obadia, hegoburu, dubon, montgiron (= projet Mongiron), ose, refuge (version boisée/végétale),
  fracture (.jpg + .webp) : images des 9 projets, extraites du portfolio PDF.
- CV_Virgil_Leteurtre.pdf, Portfolio_Virgil_Leteurtre.pdf : copies de 01_Prospection/CV et /Portfolio.
- Sources d'origine sur l'ordinateur : C:\Users\virgi\Desktop\PRO\01_Prospection (Branding/SVG/Fichier 1.svg,
  Branding/Animation logo/animation-logo.html, Portfolio, CV, Carte de visite).
- Maquettes de conception (canvas Claude, non utilisées par le site) : dossier « Site web - maquettes (archives) ».

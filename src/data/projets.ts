// Les 9 projets du Studio AUXO (pages /projets/<slug>).
// Textes repris du portfolio de Virgil (Portfolio_Virgil_Leteurtre.pdf, 25/11/2026), sans rien inventer.
// Les passages du portfolio copiés par erreur d'un autre projet (Obadia, Hegoburu, Le refuge) ont été écartés.
import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/projets/*/*.jpg', { eager: true });
const imagesDe = (slug: string) =>
  Object.entries(images)
    .filter(([chemin]) => chemin.includes(`/projets/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.default);

export interface Projet {
  slug: string;
  nom: string;
  sujet: string;
  arche?: boolean;
  page: number; // page du portfolio PDF
  fiche: [string, string][];
  intro: string[];
  valeurs: string[];
  sections: { titre: string; textes: string[] }[];
  legendes: string[]; // texte alternatif de chaque image, dans l'ordre des fichiers
}

const donnees: Omit<Projet, never>[] = [
  {
    slug: 'membrane',
    nom: 'Membrane',
    sujet: 'Rénovation d’une école de musique',
    arche: true,
    page: 3,
    fiche: [
      ['Contexte', 'Projet de fin d’études — LISAA Bordeaux'],
      ['Année', '2025 — 2026'],
      ['Lieu', 'École de musique du CIAM, Bordeaux'],
      ['Programme', 'Rénovation d’une école de musique et de sa salle de concert'],
      ['Rôle', 'Projet mené seul'],
      ['Focus', 'Concept, circulation, mobilier acoustique'],
    ],
    intro: [
      'Le CIAM occupe un ensemble bâti hétérogène, hérité d’agrandissements successifs : un bâtiment principal donnant sur la rue, d’anciennes écuries et une cour intérieure reliant les différentes parties de l’école. Les circulations sont étroites, les niveaux s’enchaînent difficilement et les flux manquent de lisibilité.',
      'La pratique musicale sature constamment l’espace. Le bruit est nécessaire à l’apprentissage, mais rien dans le bâtiment n’offre de véritable temps de recul : les salles se touchent, le couloir n’est qu’un passage et l’oreille ne se repose jamais.',
      'Le projet ne cherche pas à supprimer cette intensité. Il lui donne une respiration, en transformant la circulation elle-même en espace de repos, de rencontre et de transition acoustique.',
    ],
    valeurs: [
      'Transformer la circulation en espace habité',
      'Faire du couloir une membrane acoustique et sociale',
      'Créer un mobilier continu, modulable et absorbant',
      'Relier salles de cours, jam, concert et cour intérieure',
    ],
    sections: [
      {
        titre: 'Une membrane habitée',
        textes: [
          'Dans le vivant, une membrane n’est pas une limite hermétique. Elle sépare deux milieux sans les couper l’un de l’autre, filtre les échanges et adapte son comportement à ce qu’elle rencontre. Elle protège, régule et laisse passer ce qui doit circuler.',
          'Transposé au CIAM, ce principe transforme le statut du couloir. Il devient une épaisseur continue qui isole les salles de musique et absorbe une partie de l’intensité sonore. Cette membrane se déforme selon les usages : elle devient cloison, assise, rangement, seuil ou façade.',
        ],
      },
      {
        titre: 'Habiter la membrane',
        textes: [
          'Implantés dans les interstices de la circulation, les dossiers et les banquettes transforment les surfaces du couloir en supports de repos, de rangement et d’échange. Le système est composé de plusieurs modules combinables, capables de s’adapter à la largeur des passages et aux différentes postures.',
          'Le garnissage réemploie les anciennes mousses acoustiques du CIAM, destinées à être jetées après les travaux. Associées à une ouate et à un tissu transonore, elles améliorent le confort tout en participant à la réduction de la réverbération sonore.',
        ],
      },
    ],
    legendes: [
      'Le couloir habité, vue axiale',
      'Façade sur rue',
      'Un interstice de la membrane, occupé par les banquettes acoustiques',
      'Banquettes et dossiers dans la circulation',
      'La cour intérieure, de nuit',
      'La salle de concert',
      'Croquis de façade',
    ],
  },
  {
    slug: 'nal',
    nom: 'NAL',
    sujet: 'Rénovation d’un appartement locatif',
    page: 9,
    fiche: [
      ['Contexte', 'Projet d’agence — L’Atelier D'],
      ['Année', '2025'],
      ['Lieu', 'Bordeaux, quartier Saint-Michel'],
      ['Programme', 'Rénovation d’un appartement pour location non meublée'],
      ['Rôle', 'Conception, pièces graphiques, DCE et suivi de chantier'],
    ],
    intro: [
      'Situé dans le quartier Saint-Michel à Bordeaux, cet appartement ancien devait être entièrement remis à niveau avant sa remise en location. Le projet associe rénovation énergétique, reprise des équipements techniques et réorganisation des usages dans une surface relativement contrainte.',
      'L’intervention conserve autant que possible les réseaux et les qualités existantes du logement afin de maîtriser le coût des travaux. Le parquet ancien est restauré, tandis que la cuisine, la salle d’eau et les rangements sont redessinés pour améliorer le fonctionnement quotidien.',
    ],
    valeurs: [
      'Entrée clarifiée par un rangement intégré',
      'Cuisine ouverte et plus fonctionnelle',
      'Verrières pour apporter la lumière naturelle',
      'Réemploi du parquet, isolation et remise à neuf',
    ],
    sections: [
      {
        titre: 'Réorganiser intelligemment',
        textes: [
          'La transformation repose sur une relecture précise du plan plutôt que sur une restructuration complète de l’appartement. Chaque modification répond à un problème concret : manque de rangement à l’entrée, cuisine trop fermée, pièces secondaires peu éclairées et organisation confuse des sanitaires.',
          'Les verrières deviennent des outils de distribution de la lumière. Elles permettent de préserver l’intimité des pièces tout en créant des relations visuelles et lumineuses entre la chambre, le dégagement et les espaces de vie.',
        ],
      },
    ],
    legendes: ['Pièce de vie : la cuisine redessinée structure l’espace', 'Pièce de vie et cheminée', 'Chambre', 'Chambre et rangements', 'Salle d’eau'],
  },
  {
    slug: 'obadia',
    nom: 'Obadia',
    sujet: 'Appartement adapté en location premium',
    page: 11,
    fiche: [
      ['Contexte', 'Projet d’agence — L’Atelier D'],
      ['Année', '2026'],
      ['Lieu', 'Villenave-d’Ornon, à proximité du golf'],
      ['Programme', 'Location saisonnière premium, 4 couchages'],
      ['Rôle', 'Conception d’ambiance, aménagement, visuels et pièces graphiques'],
      ['Focus', 'Couleur, atmosphère et mobilier structurant'],
    ],
    intro: [
      'Cet appartement situé à proximité d’un golf devait être transformé en location saisonnière premium, sans modifier lourdement son organisation existante. Le projet s’appuie donc principalement sur les ambiances, la couleur et le mobilier pour donner au logement une identité immédiatement reconnaissable.',
      'Le vert olive et le bordeaux construisent un univers profond et chaleureux, inspiré des codes du golf et de l’hôtellerie haut de gamme. Les plafonds peints prolongent les couleurs des murs et deviennent une véritable cinquième façade.',
    ],
    valeurs: [
      'Requalification par l’atmosphère',
      'Plafonds peints comme cinquième façade',
      'Meuble-filtre entre espace repas et séjour',
      'Cuisine et couchages adaptés à l’usage Airbnb',
    ],
    sections: [
      {
        titre: 'Donner une identité sans restructurer le plan',
        textes: [
          'Les couleurs sombres, les matières chaleureuses et les détails en laiton font basculer un intérieur relativement neutre vers une adresse locative plus singulière et plus qualitative.',
          'Dans la pièce principale, un meuble-filtre en bois organise les usages sans fermer le volume. Côté séjour, il accueille la télévision et les rangements. Côté repas, il se prolonge en banquette et accompagne la table, créant une limite fonctionnelle mais visuellement perméable.',
        ],
      },
    ],
    legendes: ['Chambre : alcôve, rangements et plafond coloré', 'Cuisine refaite à neuf', 'Espace bureau de la chambre', 'Séjour : palette olive et bordeaux', 'Le meuble-filtre entre séjour et repas'],
  },
  {
    slug: 'hegoburu',
    nom: 'Hegoburu',
    sujet: 'Réhabilitation d’une échoppe familiale',
    page: 13,
    fiche: [
      ['Contexte', 'Projet d’agence — L’Atelier D'],
      ['Année', '2025'],
      ['Lieu', 'Bègles'],
      ['Programme', 'Rénovation d’une échoppe avec extension'],
      ['Rôle', 'Conception, plans, visuels'],
      ['Focus', 'Patio habité et circulation'],
    ],
    intro: [
      'Le projet concerne la réhabilitation d’une échoppe familiale et d’un ancien garage, initialement séparés par un jardin. L’enjeu est de réunir ces deux constructions sans faire disparaître l’espace extérieur qui leur apporte lumière, recul et intimité.',
      'Une extension mesurée transforme une partie du jardin en salle à manger traversante. Placé entre l’échoppe et l’ancien garage, ce nouvel espace devient à la fois un lieu de repas, un passage quotidien et une articulation entre les différentes parties de la maison.',
    ],
    valeurs: [
      'Patio habité comme espace de liaison',
      'Extension mesurée pour reconnecter les volumes',
      'Extérieur conservé comme apport de lumière',
    ],
    sections: [
      {
        titre: 'Lecture du projet',
        textes: [
          'L’extension et le patio relient l’échoppe existante à l’ancien garage pour former un ensemble habitable continu. La circulation devient une salle à manger traversante avec banquette, au cœur des usages quotidiens.',
          'Pièce de vie, cuisine et chambre s’ouvrent autour de l’extérieur conservé, source de lumière et de respiration. La chambre parentale est placée au fond de la parcelle, au calme, avec un rapport direct à la terrasse.',
        ],
      },
    ],
    legendes: ['Salle à manger : le patio habité', 'Pièce de vie ouverte sur le patio', 'Terrasse : un extérieur conservé', 'Cuisine'],
  },
  {
    slug: 'dubon',
    nom: 'Dubon',
    sujet: 'Rénovation d’un appartement de 180 m²',
    arche: true,
    page: 15,
    fiche: [
      ['Contexte', 'Projet d’agence — L’Atelier D'],
      ['Année', '2025 — 2026'],
      ['Lieu', 'Caudéran'],
      ['Programme', 'Appartement privé, rénovation et mobilier sur mesure'],
      ['Rôle', 'Conception, aménagement, mobilier sur mesure et visuels, DCE'],
      ['Focus', 'Mobilier structurant et dispositifs de séparation'],
    ],
    intro: [
      'Destiné à un couple de retraités, le projet porte sur la rénovation d’un appartement de 180 m² situé à Caudéran. La transformation du plan reste volontairement mesurée : l’essentiel de l’intervention repose sur la création de plusieurs meubles sur mesure adaptés aux habitudes et aux objets des clients.',
      'Le mobilier devient un outil d’architecture intérieure. Il permet de ranger, de dissimuler les éléments techniques, de séparer les usages et de donner une identité cohérente aux différentes pièces, sans multiplier les cloisons.',
    ],
    valeurs: [
      'Le mobilier sur mesure comme structure du projet',
      'Séparer les usages sans perdre la lumière',
      'Intégrer rangement, identité et confort dans chaque pièce',
    ],
    sections: [
      {
        titre: 'Travailler l’espace par le mobilier',
        textes: [
          'Dans l’entrée, le mobilier est pensé comme une façade intérieure continue. Sa composition symétrique donne l’apparence d’un grand vestiaire, alors que certaines portes dissimulent en réalité l’accès à la cuisine.',
          'Dans le séjour, la bibliothèque habite l’angle de la pièce. Elle rassemble les livres, la télévision, la platine vinyle et plusieurs niches d’exposition. Entre le bureau et la salle à manger, un troisième meuble marque une limite sans interrompre la lumière.',
        ],
      },
    ],
    legendes: ['Séparation repas / bureau : un meuble-filtre', 'Entrée : un ensemble symétrique dissimule la cuisine', 'Séjour : la bibliothèque d’angle', 'Cuisine'],
  },
  {
    slug: 'mongiron',
    nom: 'Mongiron',
    sujet: 'Rénovation d’une bâtisse en pierre près de Saint-Émilion',
    page: 17,
    fiche: [
      ['Contexte', 'Projet d’agence — L’Atelier D'],
      ['Année', '2025 — 2026'],
      ['Lieu', 'Secteur Saint-Émilion'],
      ['Programme', 'Rénovation partielle d’une bâtisse en pierre'],
      ['Rôle', 'Conception, ambiance, aménagement et visuels'],
      ['Focus', 'Loft de réception et caveau de dégustation'],
    ],
    intro: [
      'Réalisé pour des clients australiens, le projet concerne la rénovation partielle d’une grande bâtisse en pierre située dans le secteur de Saint-Émilion. Le travail est mené en anglais et en collaboration avec un maître d’œuvre chargé du suivi architectural et des modifications de façade.',
      'L’intervention cherche à préserver le caractère minéral et historique du lieu tout en proposant une interprétation contemporaine de la demeure française. Le sous-sol devient deux séquences complémentaires : un loft destiné à la réception et un caveau consacré au vin.',
    ],
    valeurs: [
      'Réinterpréter le château à la française en sous-sol',
      'Mettre en valeur la pierre, le bois et les matières nobles',
      'Articuler réception, dégustation et conservation',
    ],
    sections: [
      {
        titre: 'Habiter le sous-sol comme un loft de réception',
        textes: [
          'Volumes généreux, pierre apparente, charpente claire et serrurerie noire composent un univers inspiré des demeures anciennes, sans tomber dans la reconstitution décorative.',
        ],
      },
      {
        titre: 'Concevoir un caveau comme espace de dégustation',
        textes: [
          'Le plafond bois, les boiseries foncées, les appliques et les éléments inspirés des tonneaux installent une ambiance directement liée au monde viticole. Les rangements périphériques, la table centrale de présentation et la réserve attenante composent un ensemble pensé autant pour la conservation que pour la réception.',
        ],
      },
    ],
    legendes: ['Loft de réception', 'Vue complémentaire du loft', 'Caveau : mobilier périphérique et îlot central', 'Salle d’eau', 'Salon de dégustation'],
  },
  {
    slug: 'ose',
    nom: 'OSE',
    sujet: 'Maison ressource pour enfants en difficulté',
    page: 20,
    fiche: [
      ['Contexte', 'Projet d’agence — L’Atelier D'],
      ['Année', '2025 — 2026'],
      ['Lieu', 'Paris'],
      ['Programme', 'Centre d’accueil pour enfants et adolescents en difficultés'],
      ['Rôle', 'Concept, ambiances, mobilier et matériaux ERP et sécurisant'],
      ['Focus', 'Chambres, espaces communs et sécurité d’usage'],
    ],
    intro: [
      'La Maison Ressource accueille des enfants et des adolescents confrontés à des situations personnelles difficiles. Le projet cherche à effacer l’image institutionnelle du centre pour retrouver les repères familiers, rassurants et quotidiens d’une maison.',
      'Les matières boisées, les couleurs poudrées et les formes arrondies composent un environnement doux, sans devenir fragile. Chaque aménagement doit résister à un usage collectif intensif, être facilement entretenu et répondre aux contraintes de sécurité propres à l’établissement.',
    ],
    valeurs: [
      'Transformer un centre d’accueil en véritable lieu de vie',
      'Créer des chambres cocons, individuelles ou partagées',
      'Concilier douceur, sécurité et résistance des aménagements',
      'Faire en sorte que les enfants se sentent comme à la maison',
    ],
    sections: [
      {
        titre: 'Chambres et espaces communs',
        textes: [
          'Dans les chambres, le mobilier sur mesure regroupe le couchage, le bureau, les rangements et les espaces de retrait. Les lits prennent la forme de niches enveloppantes qui donnent à chaque enfant un territoire identifiable, y compris dans les chambres partagées.',
          'Les protections murales, les matériaux lavables et l’éclairage nocturne bas assurent la sécurité des déplacements tout en évitant une ambiance trop technique ou hospitalière.',
        ],
      },
    ],
    legendes: ['Espace commun : formes arrondies et palette chaleureuse', 'Espace repas', 'Chambre : mobilier intégré', 'Couchage intégré, un espace refuge', 'Couloir : un guidage nocturne doux', 'Salon'],
  },
  {
    slug: 'le-refuge',
    nom: 'Le refuge',
    sujet: 'Salle de pause pensée comme un refuge',
    arche: true,
    page: 22,
    fiche: [
      ['Contexte', 'Projet d’école — partenariat CDC Habitat'],
      ['Année', '2023'],
      ['Lieu', 'Bruges, près de Bordeaux'],
      ['Programme', 'Salle de pause et espaces de repos'],
      ['Rôle', 'Concept, aménagement, ambiances, dossier technique'],
      ['Distinction', 'Projet lauréat, choisi par le client'],
    ],
    intro: [
      'Le projet consiste à réaménager la salle de pause des salariés de CDC Habitat à Bruges. Réalisé dans le cadre d’un partenariat avec l’entreprise, il a été sélectionné comme projet lauréat parmi les différentes propositions présentées par l’école.',
      'Le projet s’inspire des refuges rencontrés au cours d’une randonnée : des lieux isolés dans lesquels on peut manger, échanger, se reposer et reprendre son souffle avant de repartir.',
    ],
    valeurs: [
      'Parcours immersif inspiré du refuge et de la clairière',
      'Continuité intérieur / extérieur grâce aux vitrages accordéon',
      'Double ambiance : restauration conviviale et zone de repos',
    ],
    sections: [
      {
        titre: 'Parcours et clairière',
        textes: [
          'La salle se divise en deux atmosphères complémentaires : une clairière lumineuse ouverte vers l’extérieur et un espace plus sombre, inspiré des refuges de montagne et des hôtels capsules.',
          'Elle ne propose pas une seule manière de se reposer, mais plusieurs degrés de convivialité, de calme et de déconnexion.',
        ],
      },
    ],
    legendes: ['Couloir menant à la cuisine, comme une clairière aperçue à travers les arbres', 'Salle à manger ouverte sur l’extérieur'],
  },
  {
    slug: 'fracture',
    nom: 'Fracture',
    sujet: 'Canapé-salon convertible et modulable',
    page: 24,
    fiche: [
      ['Contexte', 'Concours design — « Quel canapé demain ? »'],
      ['Année', '2023 — 2024'],
      ['Organisateur', 'La Maison Convertible'],
      ['Programme', 'Canapé-lit adapté aux nouveaux modes de vie'],
      ['Rôle', 'Concept, design produit, modélisation et rendu'],
      ['Focus', 'Conversation circulaire, modularité et couchage'],
    ],
    intro: [
      'Fracture est composé de huit éléments indépendants : sept assises en portion de cercle, dont trois équipées d’un dossier, et un module central réversible. Leur combinaison permet de passer d’un salon circulaire à plusieurs configurations plus libres.',
      'Une fois réunis, les modules reconstituent une forme circulaire continue. Le centre complète la surface et permet au canapé de devenir un couchage, sans faire appel au mécanisme traditionnel d’un canapé-lit.',
    ],
    valeurs: ['Faire du canapé un salon complet', 'Replacer les usagers face à face', 'Réunir modularité, convivialité et couchage'],
    sections: [
      {
        titre: 'Décomposer pour recomposer le salon',
        textes: [
          'Le dessin repose sur le contraste entre un socle en noyer brun et des assises textiles plus claires, habillées d’un velours d’ameublement. Les ondulations du socle intègrent de petits rangements, notamment pour les livres.',
          'Des aimants intégrés à la structure permettent d’assembler facilement les modules, de les séparer et de les reconfigurer. L’élément central peut compléter le couchage, devenir une assise supplémentaire ou se retourner pour former une table basse.',
        ],
      },
    ],
    legendes: ['Vue produit : une géométrie circulaire', 'Mise en situation : une assise qui favorise la discussion', 'Mise en situation : forme lit'],
  },
];

export const projets = donnees.map((p) => ({ ...p, images: imagesDe(p.slug) }));
export type ProjetComplet = (typeof projets)[number];

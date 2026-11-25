// Contenu commun aux 3 essais de direction artistique (/direction-a, -b, -c).
// Tout vient du site actuel de Virgil (virgil-leteurtre.github.io) : rien n'est inventé.
// Les textes propres à Studio AUXO (présentation, services, contact) restent à écrire avec lui.
import membrane from '../assets/projets/membrane.jpg';
import montgiron from '../assets/projets/mongiron.jpg';
import obadia from '../assets/projets/obadia.jpg';
import fracture from '../assets/projets/fracture.jpg';
import croquis from '../assets/projets/croquis-ciam.jpg';
import vNal from '../assets/projets/vignettes/nal.jpg';
import vHegoburu from '../assets/projets/vignettes/hegoburu.jpg';
import vDubon from '../assets/projets/vignettes/dubon.jpg';
import vOse from '../assets/projets/vignettes/ose.jpg';
import vRefuge from '../assets/projets/vignettes/le-refuge.jpg';
import vRegne from '../assets/projets/vignettes/regne-animal.jpg';
import vMembrane from '../assets/projets/vignettes/membrane.jpg';
import vMontgiron from '../assets/projets/vignettes/montgiron.jpg';
import vObadia from '../assets/projets/vignettes/obadia.jpg';
import vFracture from '../assets/projets/vignettes/fracture.jpg';

/** Phrase reprise telle quelle du site actuel ; le mot en italique est entre étoiles */
export const accroche = 'J’aime partir d’un personnage et d’un *récit* pour imaginer le lieu où il vit.';

export const disciplines = 'Architecture intérieure · Décor de cinéma';

/** Projets mis en avant (images du site actuel, en définition moyenne : les originaux seront à fournir) */
export const projetsPhares = [
  { numero: '01', nom: 'Membrane', sujet: 'Rénovation d’une école de musique', cadre: 'Projet de fin d’études · LISAA Bordeaux', image: membrane },
  { numero: '07', nom: 'Montgiron', sujet: 'Rénovation d’une bâtisse en pierre', cadre: 'Secteur Saint-Émilion', image: montgiron },
  { numero: '04', nom: 'Obadia', sujet: 'Appartement adapté en location premium', cadre: 'Architecture intérieure', image: obadia },
  { numero: '10', nom: 'Fracture', sujet: 'Canapé-salon convertible et modulable', cadre: 'Design de mobilier', image: fracture },
];

/** Les 10 projets du portfolio */
export const tousLesProjets = [
  { numero: '01', nom: 'Membrane', sujet: 'Rénovation d’une école de musique · projet de fin d’études', vignette: vMembrane },
  { numero: '02', nom: 'Le Règne animal', sujet: 'Stage déco · long métrage de Thomas Cailley', vignette: vRegne },
  { numero: '03', nom: 'NAL', sujet: 'Rénovation d’un appartement locatif', vignette: vNal },
  { numero: '04', nom: 'Obadia', sujet: 'Appartement adapté en location premium', vignette: vObadia },
  { numero: '05', nom: 'Hegoburu', sujet: 'Réhabilitation d’une échoppe familiale', vignette: vHegoburu },
  { numero: '06', nom: 'Dubon', sujet: 'Rénovation d’un appartement de 180 m²', vignette: vDubon },
  { numero: '07', nom: 'Montgiron', sujet: 'Rénovation d’une bâtisse en pierre, secteur Saint-Émilion', vignette: vMontgiron },
  { numero: '08', nom: 'OSE', sujet: 'Maison ressource pour enfants en difficulté', vignette: vOse },
  { numero: '09', nom: 'Le refuge', sujet: 'Une salle de pause comme un refuge hors du temps', vignette: vRefuge },
  { numero: '10', nom: 'Fracture', sujet: 'Canapé-salon convertible et modulable', vignette: vFracture },
];

/** Parcours (repris du site actuel) */
export const parcours = [
  { titre: 'LISAA Bordeaux', detail: 'Titre RNCP niveau 7' },
  { titre: 'L’Atelier D', detail: '2 ans d’alternance · Mérignac' },
  { titre: 'Le Règne animal', detail: 'Stage déco · Nord-Ouest Films' },
  { titre: 'Projet élu', detail: 'CDC Habitat · choisi par le client' },
];

/** Savoir-faire : les intitulés viennent du site actuel, les descriptions sont provisoires */
export const savoirFaire = [
  { titre: 'Architecture intérieure', texte: 'Rénovations, réhabilitations, appartements : du plan aux images 3D.' },
  { titre: 'Décor de cinéma', texte: 'Partir d’un personnage et d’un récit pour construire son lieu.' },
  { titre: 'Design de mobilier', texte: 'Pièces sur mesure, modulables, pensées pour l’usage.' },
];

export const croquisCiam = croquis;

/** Découpe l'accroche : [texte, italique?] */
export const morceaux = (phrase: string) =>
  phrase.split('*').map((t, i) => ({ texte: t, italique: i % 2 === 1 }));

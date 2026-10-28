export type Lang = 'fr' | 'en';
export const LANGS: Lang[] = ['fr', 'en'];

export type L = Record<Lang, string>;
export type LList = Record<Lang, string[]>;

export type Angle = 'java' | 'ba' | 'ia';
export const ANGLES: Angle[] = ['java', 'ba', 'ia'];

export function isLang(v: string | null | undefined): v is Lang {
  return v === 'fr' || v === 'en';
}

export function isAngle(v: string | null | undefined): v is Angle {
  return v === 'java' || v === 'ba' || v === 'ia';
}

/** Interface strings shared by several components. Page content lives in `data/`. */
export const UI = {
  nav: {
    about: { fr: 'À propos', en: 'About' },
    skills: { fr: 'Compétences', en: 'Skills' },
    experiences: { fr: 'Expériences', en: 'Experience' },
    projects: { fr: 'Projets', en: 'Projects' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
  skipToContent: { fr: 'Aller au contenu', en: 'Skip to content' },
  available: { fr: 'Disponible pour une mission', en: 'Available for a new assignment' },
  seeProjects: { fr: 'Voir mes projets', en: 'See my projects' },
  downloadCv: { fr: 'Télécharger mon CV', en: 'Download my CV' },
  contactMe: { fr: 'Me contacter', en: 'Contact me' },
  chooseAngle: { fr: 'Je suis recruteur ou client pour un poste de :', en: "I'm hiring for a role as:" },
  seeMore: { fr: 'Voir', en: 'See' },
  theme: { fr: 'Changer de thème', en: 'Toggle theme' },
  language: { fr: 'Langue', en: 'Language' },
  mainNav: { fr: 'Navigation principale', en: 'Main navigation' },
  home: { fr: 'Accueil', en: 'Home' },
  backToProjects: { fr: '← Retour aux projets', en: '← Back to projects' },
  levels: {
    daily: { fr: 'Au quotidien', en: 'Daily' },
    practised: { fr: 'Pratiqué', en: 'Practised' },
    learning: { fr: 'En apprentissage', en: 'Learning' },
  },
  exp: {
    context: { fr: 'Contexte', en: 'Context' },
    team: { fr: 'Équipe', en: 'Team' },
    role: { fr: 'Mon rôle', en: 'What I did' },
    results: { fr: 'Résultats', en: 'Results' },
    learned: { fr: 'Découvert sur cette mission', en: 'Learned on this assignment' },
    stack: { fr: 'Environnement technique', en: 'Tech stack' },
  },
  project: {
    context: { fr: 'Contexte et problème', en: 'Context and problem' },
    goal: { fr: 'Objectif', en: 'Goal' },
    role: { fr: 'Mon rôle', en: 'My role' },
    architecture: { fr: 'Architecture', en: 'Architecture' },
    stack: { fr: 'Technologies', en: 'Technologies' },
    difficulties: { fr: 'Principales difficultés', en: 'Main difficulties' },
    solutions: { fr: 'Solutions apportées', en: 'Solutions' },
    results: { fr: 'Résultats', en: 'Results' },
    next: { fr: 'Prochaines évolutions', en: 'Next steps' },
    links: { fr: 'Liens', en: 'Links' },
    demo: { fr: 'Démonstration', en: 'Demo' },
    flowIngestion: { fr: 'Ingestion d’un document', en: 'Document ingestion' },
    flowQuestion: { fr: 'Question de l’utilisateur', en: 'User question' },
    caseStudy: { fr: 'Étude de cas', en: 'Case study' },
    personal: { fr: 'Projet personnel', en: 'Personal project' },
    confidential: {
      fr: 'Contexte professionnel : décrit sans détail interne confidentiel.',
      en: 'Professional context: described without confidential internal details.',
    },
  },
  footer: {
    rights: { fr: 'Moez Latrach. Tous droits réservés.', en: 'Moez Latrach. All rights reserved.' },
    built: { fr: 'Site construit avec Angular.', en: 'Built with Angular.' },
  },
  notFound: {
    title: { fr: 'Page introuvable', en: 'Page not found' },
    text: { fr: 'Cette page n’existe pas.', en: 'This page does not exist.' },
  },
} as const;

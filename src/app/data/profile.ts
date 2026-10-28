import { Angle, L } from '../core/i18n';

export interface CvLink {
  label: L;
  file: string;
  /** Language of the document itself, shown when it differs from the page language. */
  docLang: 'fr' | 'en';
}

export const PROFILE = {
  name: 'Moez Latrach',
  email: 'latrach.moez@gmail.com',
  github: 'https://github.com/moez-latrach',
  linkedin: 'https://www.linkedin.com/in/moez-latrach-2842b7a9/',
  photo: 'img/photo.jpg',
  photoAlt: {
    fr: 'Portrait de Moez Latrach',
    en: 'Portrait of Moez Latrach',
  } as L,
  siteUrl: 'https://moez-latrach.github.io',
  title: {
    fr: 'Ingénieur logiciel senior',
    en: 'Senior software engineer',
  } as L,
  subtitle: {
    fr: 'Systèmes d’information bancaires',
    en: 'Banking information systems',
  } as L,
  tagline: {
    fr: 'De Java EE et WebSphere en 2016 à Quarkus et à l’IA générative en 2026 : j’apprends vite et je livre, quel que soit le contexte métier ou technique.',
    en: 'From Java EE and WebSphere in 2016 to Quarkus and generative AI in 2026: I learn fast and deliver, whatever the business or technical context.',
  } as L,
  intro: {
    fr: '11 ans en banque (BNP Paribas, HSBC) et dans le secteur public, en équipes Scrum.',
    en: '11 years in banking (BNP Paribas, HSBC) and the public sector, working in Scrum teams.',
  } as L,
  stats: [
    {
      value: { fr: '11+ ans', en: '11+ years' } as L,
      label: {
        fr: 'd’expérience, banque et secteur public',
        en: 'of experience, banking and public sector',
      } as L,
    },
    {
      value: { fr: 'Java 6 → 21', en: 'Java 6 → 21' } as L,
      label: {
        fr: 'de Java EE à Spring, puis Quarkus',
        en: 'from Java EE to Spring, then Quarkus',
      } as L,
    },
    {
      value: { fr: 'RAG', en: 'RAG' } as L,
      label: {
        fr: 'assistant IA conçu de bout en bout depuis mars 2026',
        en: 'AI assistant built end to end since March 2026',
      } as L,
    },
  ],
};

/** CV files per angle. Files live in `public/cv/`. */
export const CVS: Record<Angle, CvLink[]> = {
  java: [
    { label: { fr: 'CV Développeur (FR)', en: 'Developer CV (FR)' }, file: 'cv/CV_Moez_Latrach_Dev_FR.pdf', docLang: 'fr' },
    { label: { fr: 'CV Développeur (EN)', en: 'Developer CV (EN)' }, file: 'cv/CV_Moez_Latrach_Dev_EN.pdf', docLang: 'en' },
  ],
  ba: [
    { label: { fr: 'CV Business Analyst (FR)', en: 'Business Analyst CV (FR)' }, file: 'cv/CV_Moez_Latrach_BA_FR.pdf', docLang: 'fr' },
    { label: { fr: 'CV BA / Product Owner (FR)', en: 'BA / Product Owner CV (FR)' }, file: 'cv/CV_Moez_Latrach_BA_PO_FR.pdf', docLang: 'fr' },
  ],
  ia: [
    { label: { fr: 'CV Business Analyst IA (FR)', en: 'Business Analyst AI CV (FR)' }, file: 'cv/CV_Moez_Latrach_BA_IA_FR.pdf', docLang: 'fr' },
    { label: { fr: 'CV Développeur (EN)', en: 'Developer CV (EN)' }, file: 'cv/CV_Moez_Latrach_Dev_EN.pdf', docLang: 'en' },
  ],
};

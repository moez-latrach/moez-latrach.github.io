import { L } from '../core/i18n';

export interface LearningStep {
  period: string;
  where: L;
  tech: string;
}

/** Built only from what the CVs state. */
export const LEARNING: LearningStep[] = [
  { period: '2014 – 2016', where: { fr: 'Technic Marketing Service', en: 'Technic Marketing Service' }, tech: 'Java EE, EJB, JSF, PrimeFaces' },
  { period: '2016 – 2018', where: { fr: 'HSBC', en: 'HSBC' }, tech: 'WebSphere, SOAP, Oracle, DB2, Liferay' },
  { period: '2018 – 2020', where: { fr: 'CISI', en: 'CISI' }, tech: 'Spring Boot, Angular, Selenium, Cucumber' },
  { period: '2021 – 2023', where: { fr: 'Ministère des Transports', en: 'Ministry of Transport' }, tech: 'Docker, Kubernetes, Jenkins, SonarQube' },
  { period: '2023 – 2026', where: { fr: 'BNP Paribas', en: 'BNP Paribas' }, tech: 'Quarkus, Kogito, Vault, Liquibase' },
  { period: '2026', where: { fr: 'Projet personnel', en: 'Personal project' }, tech: 'RAG, LangChain4j, Ollama, pgvector' },
];

export const LEARNING_INTRO: L = {
  fr: 'Je n’ai pas connu Quarkus ni Kogito avant ma mission chez BNP Paribas : je les ai appris en situation réelle. Même démarche pour l’IA générative, avec un assistant RAG construit de zéro. Voici ce que chaque étape m’a fait aborder.',
  en: 'I did not know Quarkus or Kogito before my assignment at BNP Paribas: I learned them on the job. Same approach for generative AI, with a RAG assistant built from scratch. Here is what each step brought.',
};

export const ABOUT: { title: L; paragraphs: L[]; strengths: { title: L; text: L }[] } = {
  title: { fr: 'À propos', en: 'About' },
  paragraphs: [
    {
      fr: 'Ingénieur en génie logiciel, j’ai passé onze ans sur des systèmes d’information en banque (HSBC, BNP Paribas) et dans le secteur public, en équipes Scrum aux côtés de Product Owners, de Business Analysts et d’architectes.',
      en: 'As a software engineer, I spent eleven years on information systems in banking (HSBC, BNP Paribas) and the public sector, in Scrum teams alongside Product Owners, Business Analysts and architects.',
    },
    {
      fr: 'Ma valeur ajoutée n’est pas une technologie précise : c’est de comprendre un besoin, de m’approprier vite un outil que je ne connais pas, et de livrer avec les bonnes pratiques d’un ingénieur (tests, revue de code, documentation).',
      en: 'My added value is not one specific technology: it is understanding a need, picking up an unfamiliar tool quickly, and delivering with the practices of an engineer (tests, code review, documentation).',
    },
  ],
  strengths: [
    {
      title: { fr: 'Montée en compétence', en: 'Learning fast' },
      text: {
        fr: 'Quarkus, Kogito, puis RAG : chaque fois appris sur des sujets concrets.',
        en: 'Quarkus, Kogito, then RAG: each time learned on concrete problems.',
      },
    },
    {
      title: { fr: 'Autonomie', en: 'Autonomy' },
      text: {
        fr: 'Un assistant RAG conçu et développé seul, du backend à l’interface.',
        en: 'A RAG assistant designed and built on my own, from backend to interface.',
      },
    },
    {
      title: { fr: 'Lien métier-technique', en: 'Business-tech bridge' },
      text: {
        fr: 'Je traduis un besoin en processus, en spécifications et en code.',
        en: 'I translate a need into a process, specifications and code.',
      },
    },
  ],
};

import { Angle, L } from '../core/i18n';

export type SectionId = 'experiences' | 'skills' | 'projects' | 'learning' | 'about' | 'contact';

export interface AngleData {
  card: L;
  cardText: L;
  headline: L;
  lead: L;
  seoDescription: L;
  /** Order in which sections appear on the angle page. */
  sections: SectionId[];
}

export const ANGLE_DATA: Record<Angle, AngleData> = {
  java: {
    card: { fr: 'Développeur Java senior', en: 'Senior Java developer' },
    cardText: {
      fr: 'De Java EE à Quarkus, des applications bancaires aux microservices.',
      en: 'From Java EE to Quarkus, from banking applications to microservices.',
    },
    headline: {
      fr: 'Développeur Java senior : de Java EE à Quarkus, des applications bancaires aux microservices',
      en: 'Senior Java developer: from Java EE to Quarkus, from banking applications to microservices',
    },
    lead: {
      fr: 'J’ai contribué à la migration d’un système mainframe critique vers une architecture microservices (Quarkus, Kogito) chez BNP Paribas, après plusieurs années de Java en banque et dans le secteur public.',
      en: 'I contributed to the migration of a critical mainframe system to a microservices architecture (Quarkus, Kogito) at BNP Paribas, after several years of Java work in banking and the public sector.',
    },
    seoDescription: {
      fr: 'Moez Latrach, développeur Java senior : 11 ans en banque (BNP Paribas, HSBC) et secteur public, Quarkus, Spring Boot, Angular.',
      en: 'Moez Latrach, senior Java developer: 11 years in banking (BNP Paribas, HSBC) and the public sector, Quarkus, Spring Boot, Angular.',
    },
    sections: ['experiences', 'skills', 'projects', 'learning', 'about', 'contact'],
  },
  ba: {
    card: { fr: 'Business Analyst technique', en: 'Technical Business Analyst' },
    cardText: {
      fr: 'Du besoin métier à la recette, avec un socle technique solide.',
      en: 'From business need to acceptance, with a solid technical foundation.',
    },
    headline: {
      fr: 'Business Analyst technique : je traduis le besoin métier en spécifications, en processus BPMN et en livraison suivie jusqu’à la recette',
      en: 'Technical Business Analyst: I turn business needs into specifications, BPMN processes and delivery followed through to acceptance',
    },
    lead: {
      fr: 'Ingénieur logiciel, j’ai travaillé onze ans aux côtés de Product Owners et de Business Analysts. Je fais le lien entre le métier et les développeurs, et je comprends les deux langages.',
      en: 'As a software engineer, I worked for eleven years alongside Product Owners and Business Analysts. I bridge the business and the developers, and I speak both languages.',
    },
    seoDescription: {
      fr: 'Moez Latrach, Business Analyst technique : besoins métier, spécifications, BPMN, recette, après 11 ans de projets SI en banque.',
      en: 'Moez Latrach, technical Business Analyst: business needs, specifications, BPMN, acceptance testing, after 11 years of banking IS projects.',
    },
    sections: ['experiences', 'about', 'skills', 'projects', 'learning', 'contact'],
  },
  ia: {
    card: { fr: 'IA en entreprise', en: 'AI in the enterprise' },
    cardText: {
      fr: 'Des assistants sur documents internes, avec un mode local pour garder les données privées.',
      en: 'Assistants over internal documents, with a local mode to keep data private.',
    },
    headline: {
      fr: 'Je conçois des assistants IA sur documents d’entreprise, avec un mode local pour garder les données privées',
      en: 'I build AI assistants over company documents, with a local mode to keep data private',
    },
    lead: {
      fr: 'Mon assistant RAG est un projet personnel mené de bout en bout depuis mars 2026 : ingestion de documents, recherche vectorielle, génération de réponses, et garde-fous de confidentialité dès la conception.',
      en: 'My RAG assistant is a personal project built end to end since March 2026: document ingestion, vector search, answer generation, and privacy safeguards by design.',
    },
    seoDescription: {
      fr: 'Moez Latrach, IA générative en entreprise : assistant RAG avec Quarkus, LangChain4j, Ollama et pgvector, mode local pour données privées.',
      en: 'Moez Latrach, generative AI in the enterprise: RAG assistant with Quarkus, LangChain4j, Ollama and pgvector, local mode for private data.',
    },
    sections: ['projects', 'skills', 'learning', 'experiences', 'about', 'contact'],
  },
};

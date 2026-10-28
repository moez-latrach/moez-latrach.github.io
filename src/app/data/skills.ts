import { L } from '../core/i18n';

export type Level = 'daily' | 'practised' | 'learning';

export interface SkillGroup {
  id: string;
  title: L;
  items: Partial<Record<Level, string[]>>;
}

/**
 * Skills are grouped by usage level, never by percentage.
 * Levels are a judgement call by the owner: edit freely.
 */
export const SKILLS: SkillGroup[] = [
  {
    id: 'backend',
    title: { fr: 'Backend Java', en: 'Java backend' },
    items: {
      daily: ['Java 8 → 21', 'Spring Boot', 'Quarkus', 'JPA / Hibernate'],
      practised: ['Kogito (BPMN 2.0)', 'Kafka', 'Mutiny', 'MyBatis', 'Spring Security', 'Spring Batch'],
    },
  },
  {
    id: 'frontend',
    title: { fr: 'Frontend', en: 'Frontend' },
    items: {
      daily: ['Angular (v8 → v14)', 'TypeScript', 'RxJS'],
      practised: ['NgRx', 'AG Grid', 'Angular Material', 'Bootstrap'],
    },
  },
  {
    id: 'architecture',
    title: { fr: 'Architecture et systèmes d’information', en: 'Architecture and information systems' },
    items: {
      daily: ['APIs REST', 'Microservices', 'PostgreSQL'],
      practised: ['Architecture événementielle', 'BPMN 2.0', 'UML', 'Dossiers de conception HLD / LLD', 'Oracle', 'DB2'],
    },
  },
  {
    id: 'devops',
    title: { fr: 'DevOps et Cloud', en: 'DevOps and Cloud' },
    items: {
      daily: ['Git', 'Maven'],
      practised: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Vault', 'Liquibase', 'SonarQube'],
    },
  },
  {
    id: 'ai',
    title: { fr: 'IA générative et RAG', en: 'Generative AI and RAG' },
    items: {
      practised: ['Pipeline RAG', 'LangChain4j', 'Ollama (Mistral)', 'Azure OpenAI', 'PostgreSQL / pgvector', 'Embeddings'],
      learning: ['Évaluation de la qualité des réponses', 'Reranking et recherche hybride'],
    },
  },
  {
    id: 'quality',
    title: { fr: 'Qualité et méthodes', en: 'Quality and methods' },
    items: {
      daily: ['Scrum', 'JUnit', 'Mockito', 'Revue de code'],
      practised: ['Kanban', 'BDD (Cucumber)', 'Selenium', 'Postman', 'TDD'],
    },
  },
];

import { L, LList } from '../core/i18n';

export interface FlowStep {
  label: L;
  sub?: L;
}

export interface ProjectLink {
  label: L;
  url: string;
}

export interface Project {
  slug: string;
  kind: 'personal' | 'case-study';
  title: L;
  summary: L;
  period: L;
  context: L;
  goal: L;
  role: L;
  /** Optional architecture flows, drawn as step-by-step diagrams. */
  ingestion?: FlowStep[];
  question?: FlowStep[];
  architectureNote?: L;
  stack: string[];
  difficulties: LList;
  solutions: LList;
  results: LList;
  next?: LList;
  links: ProjectLink[];
  /** Optional demo video, placed in `public/media/`. */
  demo?: { src: string; poster?: string; alt: L };
}

export const PROJECTS: Project[] = [
  {
    slug: 'rag-assistant',
    kind: 'personal',
    title: { fr: 'Assistant documentaire RAG', en: 'Document RAG assistant' },
    summary: {
      fr: 'Un assistant qui répond aux questions à partir de documents PDF et Word, avec un mode local pour les documents privés et un mode cloud réservé aux données de démonstration.',
      en: 'An assistant that answers questions from PDF and Word documents, with a local mode for private documents and a cloud mode restricted to demo data.',
    },
    period: { fr: 'Depuis mars 2026', en: 'Since March 2026' },
    context: {
      fr: 'Projet personnel, mené en dehors de toute mission client, pour me former à l’IA générative appliquée. Le problème : permettre de poser des questions en langage naturel à des documents d’entreprise, sans envoyer de données sensibles à un service externe.',
      en: 'A personal project, built outside any client assignment, to train myself in applied generative AI. The problem: let people ask natural-language questions about company documents without sending sensitive data to an external service.',
    },
    goal: {
      fr: 'Construire un pipeline RAG complet et évolutif, de l’ingestion à la réponse, en gardant la confidentialité des données comme contrainte de conception.',
      en: 'Build a complete, evolvable RAG pipeline, from ingestion to answer, with data confidentiality as a design constraint.',
    },
    role: {
      fr: 'Conception et développement de bout en bout : backend Quarkus, pipeline RAG, base vectorielle, interface Angular. Je n’avais pas d’expérience préalable en RAG.',
      en: 'End-to-end design and development: Quarkus backend, RAG pipeline, vector store, Angular interface. I had no prior RAG experience.',
    },
    ingestion: [
      { label: { fr: 'Document', en: 'Document' }, sub: { fr: 'PDF / DOCX', en: 'PDF / DOCX' } },
      { label: { fr: 'Extraction du texte', en: 'Text extraction' }, sub: { fr: 'PDFBox, Apache POI', en: 'PDFBox, Apache POI' } },
      { label: { fr: 'Découpage', en: 'Chunking' }, sub: { fr: '500 car., chevauchement 100', en: '500 chars, 100 overlap' } },
      { label: { fr: 'Embeddings', en: 'Embeddings' }, sub: { fr: 'nomic-embed-text (Ollama)', en: 'nomic-embed-text (Ollama)' } },
      { label: { fr: 'Stockage vectoriel', en: 'Vector store' }, sub: { fr: 'PostgreSQL / pgvector', en: 'PostgreSQL / pgvector' } },
    ],
    question: [
      { label: { fr: 'Question', en: 'Question' }, sub: { fr: 'Angular', en: 'Angular' } },
      { label: { fr: 'API Quarkus', en: 'Quarkus API' }, sub: { fr: 'LangChain4j', en: 'LangChain4j' } },
      { label: { fr: 'Recherche filtrée', en: 'Filtered search' }, sub: { fr: 'par document, pgvector', en: 'per document, pgvector' } },
      { label: { fr: 'LLM', en: 'LLM' }, sub: { fr: 'Mistral (Ollama) ou Azure OpenAI', en: 'Mistral (Ollama) or Azure OpenAI' } },
      { label: { fr: 'Réponse', en: 'Answer' } },
    ],
    architectureNote: {
      fr: 'Deux modes sélectionnés au démarrage par un profil Quarkus : « local » (Ollama, documents privés) et « azure » (Azure OpenAI, base séparée, documents fictifs ou publics uniquement). Une même source de données sert les deux tables, pour qu’un changement de base s’applique partout.',
      en: 'Two modes selected at startup by a Quarkus profile: "local" (Ollama, private documents) and "azure" (Azure OpenAI, separate database, fictitious or public documents only). A single datasource serves both tables, so a database switch applies everywhere.',
    },
    stack: [
      'Java 21', 'Quarkus', 'LangChain4j', 'Ollama (Mistral)', 'Azure OpenAI',
      'PostgreSQL', 'pgvector', 'PDFBox', 'Apache POI', 'Angular',
    ],
    difficulties: {
      fr: [
        'Comprendre pourquoi une recherche ne remonte pas le bon extrait.',
        'Évaluer la qualité des réponses au lieu de se fier à une impression.',
        'Utiliser un LLM cloud sans jamais exposer de documents confidentiels.',
      ],
      en: [
        'Understanding why a search does not return the right excerpt.',
        'Assessing answer quality instead of relying on impressions.',
        'Using a cloud LLM without ever exposing confidential documents.',
      ],
    },
    solutions: {
      fr: [
        'Diagnostic des échecs de recherche, avec traçabilité du rang et du score de chaque extrait et observabilité de bout en bout.',
        'Un verrou de sécurité vérifié au démarrage : Azure OpenAI n’est autorisé que sur une liste explicite de bases de démonstration, et le démarrage échoue sinon.',
        'Un seul paramètre varie entre les deux modes (le LLM), ce qui permet de comparer Mistral et Azure sur les mêmes extraits.',
      ],
      en: [
        'Diagnosing search failures, with rank and score traceability for each excerpt and end-to-end observability.',
        'A safety lock checked at startup: Azure OpenAI is only allowed on an explicit list of demo databases, and startup fails otherwise.',
        'Only one parameter differs between the two modes (the LLM), so Mistral and Azure can be compared on the same excerpts.',
      ],
    },
    results: {
      fr: [
        'Assistant fonctionnel de bout en bout : envoi de documents PDF et Word, chat sur plusieurs documents, génération par un LLM local ou cloud.',
        'Confidentialité garantie par la conception plutôt que par une consigne.',
      ],
      en: [
        'End-to-end working assistant: PDF and Word upload, chat across several documents, generation by a local or cloud LLM.',
        'Confidentiality guaranteed by design rather than by instruction.',
      ],
    },
    next: {
      fr: [
        'Citation des sources dans les réponses.',
        'Reranking et recherche hybride.',
        'Historique de conversation.',
      ],
      en: [
        'Source citations in answers.',
        'Reranking and hybrid search.',
        'Conversation history.',
      ],
    },
    links: [
      { label: { fr: 'Code du backend (GitHub)', en: 'Backend code (GitHub)' }, url: 'https://github.com/moez-latrach/ai-assistant-back' },
      { label: { fr: 'Code du frontend (GitHub)', en: 'Frontend code (GitHub)' }, url: 'https://github.com/moez-latrach/ai-assistant-front' },
    ],
  },
  {
    slug: 'mainframe-migration',
    kind: 'case-study',
    title: {
      fr: 'Migration d’un mainframe vers des microservices',
      en: 'Migrating a mainframe to microservices',
    },
    summary: {
      fr: 'Mission BNP Paribas : participation à la migration d’un système critique vers une architecture cloud-native orientée événements.',
      en: 'BNP Paribas assignment: part of the migration of a critical system to a cloud-native, event-driven architecture.',
    },
    period: { fr: 'Mars 2023 – Mars 2026', en: 'March 2023 – March 2026' },
    context: {
      fr: 'La banque voulait transformer un système legacy critique en solution moderne, flexible et orientée événements, capable de supporter de forts volumes et de s’intégrer dans une démarche DevOps.',
      en: 'The bank wanted to turn a critical legacy system into a modern, flexible, event-driven solution able to handle high volumes and fit a DevOps approach.',
    },
    goal: {
      fr: 'Moderniser le SI, réduire la dette technique et améliorer la scalabilité.',
      en: 'Modernise the IS, reduce technical debt and improve scalability.',
    },
    role: {
      fr: 'Développeur senior dans une équipe de plus de trente personnes : APIs REST, écrans Angular, workflows BPMN, collaboration avec les PO, les Business Analysts et les DevOps. J’ai découvert Quarkus et Kogito sur cette mission.',
      en: 'Senior developer in a team of over thirty people: REST APIs, Angular screens, BPMN workflows, collaboration with POs, Business Analysts and DevOps. I learned Quarkus and Kogito on this assignment.',
    },
    architectureNote: {
      fr: 'Microservices Quarkus orchestrés par des workflows Kogito (BPMN), échanges asynchrones par messages, déploiement sur Kubernetes avec Vault pour les secrets.',
      en: 'Quarkus microservices orchestrated by Kogito (BPMN) workflows, asynchronous message exchange, deployment on Kubernetes with Vault for secrets.',
    },
    stack: ['Java 21', 'Quarkus', 'Angular', 'Kogito (BPMN)', 'Kafka', 'Mutiny', 'MyBatis', 'Kubernetes', 'Vault', 'Liquibase'],
    difficulties: {
      fr: [
        'Une limite de Kogito sur le traitement parallèle.',
        'Des timeouts sur des écrans de consultation de gros volumes.',
      ],
      en: [
        'A Kogito limitation on parallel processing.',
        'Timeouts on screens browsing large volumes of data.',
      ],
    },
    solutions: {
      fr: [
        'Analyse de la limite, puis découplage par messages asynchrones à la place des appels HTTP synchrones.',
        'Refactoring d’AG Grid côté serveur et export CSV complet côté backend pour contourner la pagination.',
      ],
      en: [
        'Analysis of the limitation, then decoupling through asynchronous messages instead of synchronous HTTP calls.',
        'Server-side AG Grid refactoring and a full CSV export on the backend to work around pagination.',
      ],
    },
    results: {
      fr: [
        'Plusieurs modules legacy migrés vers des microservices cloud-native.',
        'Moins d’incidents sur les traitements batch ; meilleures performances côté utilisateur.',
      ],
      en: [
        'Several legacy modules migrated to cloud-native microservices.',
        'Fewer incidents on batch processing; better performance for users.',
      ],
    },
    links: [],
  },
  {
    slug: 'bdd-test-tool',
    kind: 'case-study',
    title: {
      fr: 'Outil d’automatisation des tests de non-régression',
      en: 'Regression test automation tool',
    },
    summary: {
      fr: 'Mission CISI : un outil qui industrialise les tests de non-régression avec Selenium et Cucumber, et réduit de moitié le temps de validation.',
      en: 'CISI assignment: a tool that industrialises regression testing with Selenium and Cucumber, halving the validation time.',
    },
    period: { fr: 'Septembre 2018 – Décembre 2020', en: 'September 2018 – December 2020' },
    context: {
      fr: 'Besoin d’un outil pour industrialiser et automatiser les tests de non-régression, avec des scénarios compréhensibles par le métier.',
      en: 'The need for a tool to industrialise and automate regression testing, with scenarios the business can understand.',
    },
    goal: {
      fr: 'Industrialiser et automatiser les tests de non-régression.',
      en: 'Industrialise and automate regression testing.',
    },
    role: {
      fr: 'Analyse des besoins avec la maîtrise d’ouvrage, architecture technique, webservices, front-end et back-end, scénarios d’acceptation BDD, dans une équipe de 3 développeurs et 1 PO.',
      en: 'Needs analysis with the business owners, technical architecture, webservices, front end and back end, BDD acceptance scenarios, in a team of 3 developers and 1 PO.',
    },
    stack: ['Java 8', 'Spring Boot', 'Angular', 'Bootstrap', 'Selenium', 'Cucumber', 'Extent Reports', 'JUnit', 'SonarQube'],
    difficulties: {
      fr: ['Rendre les tests pertinents pour le métier, pas seulement exécutables.'],
      en: ['Making the tests relevant to the business, not just executable.'],
    },
    solutions: {
      fr: [
        'Scénarios BDD (Cucumber) rédigés avec l’équipe métier, et rapports automatisés avec Extent Reports.',
      ],
      en: [
        'BDD scenarios (Cucumber) written with the business team, and automated reports with Extent Reports.',
      ],
    },
    results: {
      fr: ['Temps de validation réduit de 50 %.', 'Pratiques BDD adoptées par l’équipe ; livraisons plus fiables.'],
      en: ['Validation time reduced by 50%.', 'BDD practices adopted by the team; more reliable deliveries.'],
    },
    links: [],
  },
];

export function findProject(slug: string | null | undefined): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

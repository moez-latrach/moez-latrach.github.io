import { Angle, L } from '../core/i18n';

export interface Bullet {
  text: L;
  /** Angles for which this bullet is shown first. */
  first?: Angle[];
}

export interface Experience {
  id: string;
  company: string;
  role: L;
  period: L;
  context: L;
  team?: L;
  bullets: Bullet[];
  results: L[];
  /** Technologies discovered on this assignment (shown as a distinct tag). */
  learned?: string[];
  stack: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'bnp',
    company: 'BNP Paribas',
    role: { fr: 'Développeur senior Java / Angular / DevOps', en: 'Senior Java / Angular / DevOps developer' },
    period: { fr: 'Mars 2023 – Mars 2026', en: 'March 2023 – March 2026' },
    context: {
      fr: 'Migration stratégique d’un système mainframe critique vers une architecture microservices cloud-native (Quarkus, Angular, Kogito), pour moderniser le SI, réduire la dette technique et supporter de forts volumes.',
      en: 'Strategic migration of a critical mainframe system to a cloud-native microservices architecture (Quarkus, Angular, Kogito), to modernise the IS, reduce technical debt and support high volumes.',
    },
    team: {
      fr: '5 PO, 5 Business Analysts, 1 Scrum Master, 1 architecte, 1 technical lead, 10 développeurs, 8 développeurs Teradata, 2 DevOps. Scrum, sprints de 3 semaines.',
      en: '5 POs, 5 Business Analysts, 1 Scrum Master, 1 architect, 1 technical lead, 10 developers, 8 Teradata developers, 2 DevOps. Scrum, 3-week sprints.',
    },
    bullets: [
      {
        text: {
          fr: 'Traduction de processus métier en workflows BPMN (Kogito) : génération de fichiers, stockage dans un Cloud Object Storage et transmission aux systèmes partenaires via CFT.',
          en: 'Translated business processes into BPMN workflows (Kogito): file generation, storage in a Cloud Object Storage and transmission to partner systems through CFT.',
        },
        first: ['ba', 'java'],
      },
      {
        text: {
          fr: 'Analyse d’une limite de Kogito sur le parallélisme, puis découplage événementiel par messages (Kafka, Mutiny) à la place des appels HTTP synchrones ; dossiers de conception rédigés sur Confluence.',
          en: 'Analysed a Kogito limitation on parallelism, then moved to event-driven decoupling through messages (Kafka, Mutiny) instead of synchronous HTTP calls; design documents written on Confluence.',
        },
        first: ['ba', 'java'],
      },
      {
        text: {
          fr: 'Collaboration quotidienne avec les PO et les Business Analysts lors des cérémonies Scrum (Sprint Planning, Démo, Rétrospective).',
          en: 'Daily collaboration with POs and Business Analysts during Scrum ceremonies (Sprint Planning, Demo, Retrospective).',
        },
        first: ['ba'],
      },
      {
        text: {
          fr: 'Résolution d’irritants utilisateurs : suppression des timeouts sur les écrans de consultation (refactoring d’AG Grid côté serveur) et export CSV complet côté backend pour contourner la pagination.',
          en: 'Fixed user pain points: removed timeouts on the search screens (server-side AG Grid refactoring) and built a full CSV export on the backend to work around pagination.',
        },
        first: ['ba', 'java'],
      },
      {
        text: {
          fr: 'Développement d’APIs REST (Quarkus) et d’interfaces Angular responsives ; persistance avec MyBatis (requêtes SQL optimisées).',
          en: 'Developed REST APIs (Quarkus) and responsive Angular interfaces; persistence with MyBatis (optimised SQL queries).',
        },
        first: ['java'],
      },
      {
        text: {
          fr: 'Avec l’équipe DevOps : ajustement des ConfigMaps Kubernetes, gestion des secrets avec Vault, migrations de base avec Liquibase.',
          en: 'With the DevOps team: tuned Kubernetes ConfigMaps, managed secrets with Vault, ran database migrations with Liquibase.',
        },
        first: ['java'],
      },
      {
        text: {
          fr: 'Accompagnement des développeurs juniors ; tests unitaires avec Mockito (couverture ≥ 80 %).',
          en: 'Mentored junior developers; unit tests with Mockito (coverage ≥ 80%).',
        },
      },
    ],
    results: [
      {
        fr: 'Migration réussie de plusieurs modules legacy vers des microservices cloud-native.',
        en: 'Several legacy modules successfully migrated to cloud-native microservices.',
      },
      {
        fr: 'Réduction des incidents liés aux traitements batch ; meilleures performances pour les utilisateurs.',
        en: 'Fewer incidents on batch processing; better performance for users.',
      },
    ],
    learned: ['Quarkus', 'Kogito (BPMN)'],
    stack: 'Java 21 (Quarkus), Angular, MyBatis, Kogito (BPMN), Kafka, Mutiny, Liquibase, AG Grid, Kubernetes, Vault, Mockito, Git, CI/CD',
  },
  {
    id: 'transports',
    company: 'Ministère chargé des Transports',
    role: { fr: 'Développeur senior Java / Angular', en: 'Senior Java / Angular developer' },
    period: { fr: 'Janvier 2021 – Février 2023', en: 'January 2021 – February 2023' },
    context: {
      fr: 'Modernisation et maintenance de CAIRN, le catalogue national informatisé des remontées mécaniques : un tableau de bord pour suivre les contrôles et faire évoluer les modules métier, avec intégration continue.',
      en: 'Modernisation and maintenance of CAIRN, the national computerised catalogue of ski lifts: a dashboard to follow inspections and evolve the business modules, with continuous integration.',
    },
    team: {
      fr: '1 PO, 1 Scrum Master, 5 développeurs full stack, en lien avec les architectes et le métier. Scrum, sprints de 2 semaines.',
      en: '1 PO, 1 Scrum Master, 5 full-stack developers, working with architects and the business. Scrum, 2-week sprints.',
    },
    bullets: [
      {
        text: {
          fr: 'Conception d’un tableau de bord qui synthétise les contrôles d’un appareil et permet de suivre tous les sujets d’un exploitant.',
          en: 'Designed a dashboard that summarises the inspections of a lift and tracks every open topic of an operator.',
        },
        first: ['ba'],
      },
      {
        text: {
          fr: 'Définition des APIs REST, accès aux données (Spring Data / JPA / Hibernate) et pages Angular consommant ces services.',
          en: 'Defined the REST APIs, data access (Spring Data / JPA / Hibernate) and Angular pages consuming these services.',
        },
        first: ['java'],
      },
      {
        text: {
          fr: 'Conseil sur les choix d’orientation technique avec les architectes et le métier.',
          en: 'Advised on technical direction with the architects and the business.',
        },
        first: ['ba'],
      },
      {
        text: {
          fr: 'Revue de code et validation des pull requests, intégration SonarQube, tests unitaires et d’intégration, traitement des anomalies.',
          en: 'Code review and pull request validation, SonarQube integration, unit and integration tests, bug fixing.',
        },
      },
      {
        text: {
          fr: 'Encadrement et transfert de connaissances auprès de l’équipe.',
          en: 'Coaching and knowledge transfer within the team.',
        },
      },
    ],
    results: [
      {
        fr: 'Mise en production d’un outil centralisé utilisé par des centaines d’exploitants.',
        en: 'Centralised tool put into production, used by hundreds of operators.',
      },
    ],
    stack: 'Java 8, Spring Boot, Spring Data, Spring Security, REST, Angular, PostgreSQL, Hibernate, Maven, Jenkins, Docker, Kubernetes, SonarQube',
  },
  {
    id: 'cisi',
    company: 'Centre Interministériel des Services Informatiques',
    role: { fr: 'Développeur full stack Java / Angular', en: 'Full-stack Java / Angular developer' },
    period: { fr: 'Septembre 2018 – Décembre 2020', en: 'September 2018 – December 2020' },
    context: {
      fr: 'Deux projets : un outil qui industrialise les tests de non-régression, et GAUDDI, une application RH (congés, planning, évaluations, demandes de personnel).',
      en: 'Two projects: a tool that industrialises regression testing, and GAUDDI, an HR application (leave, planning, reviews, staffing requests).',
    },
    team: {
      fr: 'Outil de tests : 3 développeurs, 1 PO. GAUDDI : 5 développeurs, 1 PO, 1 Scrum Master.',
      en: 'Testing tool: 3 developers, 1 PO. GAUDDI: 5 developers, 1 PO, 1 Scrum Master.',
    },
    bullets: [
      {
        text: {
          fr: 'Analyse des besoins avec la maîtrise d’ouvrage, puis mise en place de l’architecture de l’outil de tests (Spring Boot, Angular, Selenium, rapports automatisés).',
          en: 'Analysed needs with the business owners, then set up the architecture of the testing tool (Spring Boot, Angular, Selenium, automated reports).',
        },
        first: ['ba'],
      },
      {
        text: {
          fr: 'Rédaction des scénarios d’acceptation en BDD (Cucumber) avec l’équipe métier pour améliorer la pertinence des tests.',
          en: 'Wrote BDD acceptance scenarios (Cucumber) with the business team to make the tests more relevant.',
        },
        first: ['ba'],
      },
      {
        text: {
          fr: 'Maintenance corrective et évolutive de GAUDDI, évolutions sur plusieurs modules, optimisation du code avec SonarQube.',
          en: 'Corrective and evolutive maintenance of GAUDDI, enhancements on several modules, code clean-up with SonarQube.',
        },
        first: ['java'],
      },
    ],
    results: [
      { fr: 'Temps de validation réduit de 50 %.', en: 'Validation time reduced by 50%.' },
      {
        fr: 'Pratiques BDD adoptées par l’équipe ; livraisons plus fiables.',
        en: 'BDD practices adopted by the team; more reliable deliveries.',
      },
      {
        fr: 'Meilleure productivité des utilisateurs RH grâce aux nouvelles fonctionnalités.',
        en: 'Better productivity for HR users thanks to the new features.',
      },
    ],
    stack: 'Java 8, Spring Boot, Angular, Bootstrap, Selenium, Cucumber, Extent Reports, JUnit, Mockito, SonarQube, Maven, Tomcat',
  },
  {
    id: 'hsbc',
    company: 'HSBC',
    role: { fr: 'Développeur Java', en: 'Java developer' },
    period: { fr: 'Août 2016 – Août 2018', en: 'August 2016 – August 2018' },
    context: {
      fr: 'ILF, une application interne d’instruction et de suivi des lignes de financement, et une messagerie interne pour les équipes HSBC.',
      en: 'ILF, an internal application to process and track financing lines, and an internal messaging tool for HSBC teams.',
    },
    team: {
      fr: 'ILF : 10 développeurs, 1 architecte, 1 PO. Messagerie : 4 développeurs, 1 PO.',
      en: 'ILF: 10 developers, 1 architect, 1 PO. Messaging: 4 developers, 1 PO.',
    },
    bullets: [
      {
        text: {
          fr: 'Développement du module de gestion des financements, qui couvre tout le cycle : autorisation, crédit, assurance, garantie.',
          en: 'Developed the financing management module, covering the whole cycle: authorisation, credit, insurance, guarantee.',
        },
        first: ['ba', 'java'],
      },
      {
        text: {
          fr: 'Documentation technique, tests unitaires, support et correction des anomalies.',
          en: 'Technical documentation, unit tests, support and bug fixing.',
        },
      },
      {
        text: {
          fr: 'Conception du module de base de la messagerie interne, support utilisateurs et transfert de connaissances.',
          en: 'Designed the core module of the internal messaging tool, user support and knowledge transfer.',
        },
      },
    ],
    results: [
      {
        fr: 'Meilleur suivi des financements et délais de traitement des dossiers réduits.',
        en: 'Better tracking of financing and shorter processing times.',
      },
    ],
    stack: 'Java 7, EJB, JPA, Hibernate, SOAP, XML, CXF, Oracle, DB2, WebSphere, Liferay, Maven, SVN',
  },
  {
    id: 'tms',
    company: 'Technic Marketing Service',
    role: { fr: 'Développeur full stack Java', en: 'Full-stack Java developer' },
    period: { fr: 'Octobre 2014 – Juillet 2016', en: 'October 2014 – July 2016' },
    context: {
      fr: 'Digitalisation d’un processus de gestion des commandes (remplacement de traitements manuels), puis une application de gestion d’évènements (espaces, planification, statistiques).',
      en: 'Digitalisation of an order management process (replacing manual handling), then an event management application (venues, planning, statistics).',
    },
    bullets: [
      {
        text: {
          fr: 'Analyse et spécification des besoins avec les métiers, conception ergonomique de l’application.',
          en: 'Analysis and specification of needs with the business, ergonomic design of the application.',
        },
        first: ['ba'],
      },
      {
        text: {
          fr: 'Développement back-end (Java EE, EJB, JPA) et front-end (JSF, PrimeFaces), mise en production et assistance aux utilisateurs.',
          en: 'Back-end (Java EE, EJB, JPA) and front-end (JSF, PrimeFaces) development, go-live and user support.',
        },
        first: ['java'],
      },
    ],
    results: [
      {
        fr: 'Digitalisation complète du processus de commande ; statistiques fiables pour le suivi des activités.',
        en: 'Complete digitalisation of the order process; reliable statistics to monitor activity.',
      },
    ],
    stack: 'Java 6, Java EE, EJB, JSF, PrimeFaces, JBoss, JPA, Hibernate, SOAP, MySQL, UML, SVN',
  },
];

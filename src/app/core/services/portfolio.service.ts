import {
  Injectable,
  signal,
  computed,
  effect,
  inject,
  PLATFORM_ID,
  Signal
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import {
  Profile,
  Skill,
  Project,
  Experience,
  Education,
  ContactMessage,
  ThemeMode
} from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  // Theme Signal (Dark mode default)
  readonly currentTheme = signal<ThemeMode>('dark');

  // Selected Project for Deep-Dive Modal
  readonly selectedProject = signal<Project | null>(null);

  // Active Navigation Section Signal
  readonly activeSection = signal<string>('home');

  // Contact Submission Status Signal
  readonly contactSubmissionStatus = signal<{
    isSubmitting: boolean;
    isSuccess: boolean;
    message: string;
  }>({
    isSubmitting: false,
    isSuccess: false,
    message: ''
  });

  // Profile Signal
  readonly profile = signal<Profile>({
    name: 'Pradeep Kumar Vishwakarma',
    role: 'Full Stack Developer (Java, Spring Boot & Angular)',
    experienceYears: '5.4+',
    tagline: 'Engineering Scalable Enterprise Backends & Fluid Modern Web Frontends',
    bio: 'Passionate and results-driven Full Stack Developer with 5.4+ years of professional hands-on expertise specializing in designing robust microservices and REST APIs using Java and Spring Boot, paired with building high-performance, modular UI architectures using Angular, TypeScript, and Ag-Grid. Experienced in driving national-scale government platforms (eGramSwaraj / NICSI) and mission-critical enterprise management systems.',
    shortBio: '5.4+ years building resilient enterprise web applications with Java, Spring Boot & Angular. Specialized in high-throughput REST APIs, Ag-Grid dashboards, and modern UI engineering.',
    email: 'kpradeep.git@gmail.com',
    phone: '+91-XXXXXXXXXX',
    location: 'Noida / Delhi NCR, India',
    resumeUrl: '/resume/pradeep_kumar_resume.pdf',
    socialLinks: {
      github: 'https://github.com/kpradeep-git272201',
      linkedin: 'https://www.linkedin.com/in/pradeep-kumar-vishwakarma',
      email: 'mailto:kpradeep.git@gmail.com'
    },
    stats: [
      { label: 'Years of Experience', value: '5.4+', description: 'Enterprise engineering' },
      { label: 'Enterprise Systems', value: '3+', description: 'High-scale applications' },
      { label: 'Microservices & APIs', value: '50+', description: 'REST endpoints delivered' },
      { label: 'UI Modules & Views', value: '100+', description: 'Modular Angular architecture' }
    ],
    coreCompetencies: [
      'Java & Spring Boot REST API Architecture',
      'Angular Modular UI & Component Design',
      'Ag-Grid Advanced Data Manipulation',
      'PostgreSQL & Oracle Database Optimization',
      'Microservices & Clean Architecture',
      'Docker Containerization & CI/CD Pipelines'
    ]
  });

  // Skills Signal
  readonly skills = signal<Skill[]>([
    // Frontend
    {
      name: 'Angular (v14 - v19)',
      category: 'Frontend',
      proficiency: 92,
      icon: 'angular',
      featured: true,
      experience: '5.4+ yrs',
      description: 'Standalone components, Signals, RxJS, dynamic forms, routing, interceptors'
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      proficiency: 90,
      icon: 'typescript',
      featured: true,
      experience: '5+ yrs',
      description: 'Strict typing, generics, interfaces, OOP design patterns'
    },
    {
      name: 'Ag-Grid Enterprise/Community',
      category: 'Frontend',
      proficiency: 95,
      icon: 'ag-grid',
      featured: true,
      experience: '4+ yrs',
      description: 'Custom cell renderers, virtual scrolling, tree data, server-side row models'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'Frontend',
      proficiency: 88,
      icon: 'javascript',
      experience: '5.4+ yrs',
      description: 'Async/await, closures, prototypes, modern syntax and browser APIs'
    },
    {
      name: 'HTML5 & CSS3 / SCSS',
      category: 'Frontend',
      proficiency: 85,
      icon: 'css3',
      experience: '5.4+ yrs',
      description: 'Responsive flexbox, grid, animations, CSS variables, cross-browser compatibility'
    },
    {
      name: 'RxJS & Reactive State',
      category: 'Frontend',
      proficiency: 85,
      icon: 'rxjs',
      experience: '4+ yrs',
      description: 'Observables, Subjects, transformation & combination operators'
    },

    // Backend
    {
      name: 'Java (8, 11, 17)',
      category: 'Backend',
      proficiency: 90,
      icon: 'java',
      featured: true,
      experience: '5.4+ yrs',
      description: 'Streams, Lambdas, Multithreading, Concurrency, OOP Architecture'
    },
    {
      name: 'Spring Boot',
      category: 'Backend',
      proficiency: 92,
      icon: 'spring',
      featured: true,
      experience: '5.4+ yrs',
      description: 'Spring MVC, REST APIs, Dependency Injection, Spring Security, JWT'
    },
    {
      name: 'RESTful API Engineering',
      category: 'Backend',
      proficiency: 94,
      icon: 'api',
      featured: true,
      experience: '5.4+ yrs',
      description: 'API design, Swagger/OpenAPI documentation, pagination, rate limiting'
    },
    {
      name: 'Spring Data JPA & Hibernate',
      category: 'Backend',
      proficiency: 88,
      icon: 'hibernate',
      experience: '5+ yrs',
      description: 'Entity mapping, JPQL, Criteria API, caching, transaction management'
    },
    {
      name: 'Node.js & Express',
      category: 'Backend',
      proficiency: 78,
      icon: 'nodejs',
      experience: '2+ yrs',
      description: 'Middleware development, micro-services, JSON processing'
    },
    {
      name: 'Microservices Architecture',
      category: 'Backend',
      proficiency: 82,
      icon: 'microservices',
      experience: '3+ yrs',
      description: 'Service discovery, API Gateway, event-driven communication'
    },

    // Database
    {
      name: 'PostgreSQL',
      category: 'Database',
      proficiency: 86,
      icon: 'postgresql',
      featured: true,
      experience: '4+ yrs',
      description: 'Complex joins, indexing, query optimization, PL/pgSQL functions'
    },
    {
      name: 'Oracle Database',
      category: 'Database',
      proficiency: 84,
      icon: 'oracle',
      featured: true,
      experience: '3+ yrs',
      description: 'Stored procedures, packages, execution plans, enterprise schemas'
    },
    {
      name: 'Custom SQL & Query Tuning',
      category: 'Database',
      proficiency: 88,
      icon: 'sql',
      experience: '5.4+ yrs',
      description: 'Sub-queries, aggregations, query explain plans, schema migrations'
    },

    // Tools & DevOps
    {
      name: 'Git & GitHub',
      category: 'DevOps & Tools',
      proficiency: 90,
      icon: 'git',
      featured: true,
      experience: '5.4+ yrs',
      description: 'Branching strategies, Gitflow, pull requests, resolving conflicts'
    },
    {
      name: 'Docker',
      category: 'DevOps & Tools',
      proficiency: 80,
      icon: 'docker',
      featured: true,
      experience: '2.5+ yrs',
      description: 'Containerization, Dockerfile multi-stage builds, compose orchestration'
    },
    {
      name: 'Maven & Build Tools',
      category: 'DevOps & Tools',
      proficiency: 85,
      icon: 'maven',
      experience: '5+ yrs',
      description: 'Dependency management, multi-module project builds, plugins'
    },
    {
      name: 'Postman & Swagger',
      category: 'DevOps & Tools',
      proficiency: 92,
      icon: 'postman',
      experience: '5.4+ yrs',
      description: 'Automated test collections, mock servers, API contract validation'
    },
    {
      name: 'Linux / Unix CLI',
      category: 'DevOps & Tools',
      proficiency: 80,
      icon: 'linux',
      experience: '4+ yrs',
      description: 'Server navigation, bash scripts, deployment management, logs monitoring'
    }
  ]);

  // Projects Signal
  readonly projects = signal<Project[]>([
    {
      id: 'egramswaraj',
      title: 'eGramSwaraj (Panchayati Raj Institutions)',
      subtitle: 'National Government Financial & Planning Platform (NICSI)',
      client: 'NICSI / Ministry of Panchayati Raj, Govt. of India',
      domain: 'GovTech / Public Sector ERP & Governance',
      role: 'Senior Full Stack Developer',
      duration: 'Ongoing',
      summary: 'A mission-critical national portal empowering 250,000+ Panchayati Raj Institutions across India with centralized accounting, planning, fund tracking, and reporting.',
      description: 'eGramSwaraj is a flagship initiative of the Ministry of Panchayati Raj (MoPR) implemented with National Informatics Centre Services Inc. (NICSI). The application unifies planning, budgeting, progress tracking, and public accounting across 2.5 lakh rural local bodies across India. Handled complex enterprise workflows, high-load transactional APIs in Spring Boot, and responsive UI interfaces in Angular.',
      keyFeatures: [
        'Decentralized Planning & GPDP (Gram Panchayat Development Plan) workflow',
        'Direct Benefit Transfer (DBT) and multi-tier voucher payment tracking',
        'Real-time financial reconciliation reports with Public Financial Management System (PFMS)',
        'Extensive role-based access control (RBAC) and state-district-block-gram hierarchy',
        'Audit-ready ledger and dynamic data tables handling millions of records'
      ],
      responsibilities: [
        'Architected and implemented high-volume REST APIs using Spring Boot, Hibernate, and PostgreSQL.',
        'Developed reusable and modular Angular components ensuring high performance and responsive layout.',
        'Optimized complex SQL queries and database indexes, reducing report load times by over 35%.',
        'Integrated multi-layered role-based authorization for administrative and field stakeholders.',
        'Collaborated closely with government teams and NICSI architects to meet stringent security and audit standards.'
      ],
      technologies: ['Angular', 'Spring Boot', 'Java 11', 'PostgreSQL', 'REST APIs', 'Spring Security', 'Maven', 'Git'],
      featured: true,
      liveDemoUrl: 'https://egramswaraj.gov.in',
      metrics: [
        { label: 'Local Bodies Impacted', value: '250,000+' },
        { label: 'Transactions Processed', value: 'Multi-Million' },
        { label: 'Latency Improvement', value: '35% Boost' }
      ]
    },
    {
      id: 'msat',
      title: 'Management System Application Tool (MSAT)',
      subtitle: 'Comprehensive Corporate Resource, Billing & Analytics Engine',
      client: 'Enterprise Corporate Client',
      domain: 'Enterprise ERP / Business Operations',
      role: 'Full Stack Engineer',
      duration: '1.5 Years',
      summary: 'An advanced enterprise operations management suite handling project allocation, real-time tracking, Ag-Grid data analysis, and automated billing generation.',
      description: 'MSAT is an all-in-one management portal engineered to streamline operational bottlenecks for distributed teams. It combines high-throughput data grid views, reactive dashboards, custom workflow automations, and seamless integration between Spring Boot backends and Node.js microservices.',
      keyFeatures: [
        'High-density data grid using Ag-Grid Enterprise with custom filtering, grouping, and live excel export',
        'Hybrid microservices architecture leveraging Spring Boot for core business logic and Node.js for rapid data ingestion',
        'Automated billing cycle calculations and invoice generation pipeline',
        'Dynamic report builder with configurable metric charts and pivot capabilities'
      ],
      responsibilities: [
        'Built full-featured Ag-Grid dashboards with custom Angular cell renderers and virtual scrolling.',
        'Created resilient Spring Boot microservices backed by Oracle Database for transactional billing data.',
        'Engineered Node.js (Express) middle-tier utilities for asynchronous data validation and export processing.',
        'Reduced client-side memory footprint in heavy data tables by 40% via lazy row evaluation.'
      ],
      technologies: ['Angular', 'Spring Boot', 'Node.js', 'Express', 'Ag-Grid', 'Oracle DB', 'TypeScript', 'Docker'],
      featured: true,
      metrics: [
        { label: 'Data Processing Speed', value: '40% Faster' },
        { label: 'Rows per Grid View', value: '100K+ Smoothly' },
        { label: 'Modules Automated', value: '8 Core Ops' }
      ]
    },
    {
      id: 'workxmate-u12',
      title: 'U12 | workXmate Cloud Platform',
      subtitle: 'Configurable Cloud ERP & Custom Business Process Suite',
      client: 'workXmate Technologies',
      domain: 'Cloud ERP & SaaS Platform',
      role: 'Full Stack Developer',
      duration: '1.5+ Years',
      summary: 'Next-gen cloud ERP enabling configurable business process workflows, custom query engines, dynamic form rendering, and analytics dashboards.',
      description: 'workXmate is an agile cloud business platform delivering CRM, HRMS, and enterprise ERP solutions. The U12 edition modernized core enterprise capabilities with dynamic metadata-driven UI layouts, high-performance data grids, and robust backend query processing engines.',
      keyFeatures: [
        'Metadata-driven dynamic UI rendering engine in Angular for customized business entities',
        'High-performance Ag-Grid implementations for real-time inventory and financial tracking',
        'Custom query execution engine in Spring Boot supporting secure client-configured data extraction',
        'Multi-tenant database schema architecture ensuring complete enterprise data isolation'
      ],
      responsibilities: [
        'Constructed reusable Angular component libraries for forms, modals, tables, and alert notifications.',
        'Implemented backend Spring Boot services with custom SQL generation logic and safety parameterization.',
        'Integrated Ag-Grid with server-side pagination, multi-column sorting, and complex conditional styling.',
        'Assisted with Docker deployment configurations and automated integration unit testing.'
      ],
      technologies: ['Angular', 'Spring Boot', 'Java', 'Custom SQL', 'Ag-Grid', 'PostgreSQL', 'Git', 'Linux'],
      featured: true,
      metrics: [
        { label: 'Grid Rendering Time', value: '< 200ms' },
        { label: 'Reusability Ratio', value: '75% Shared UI' },
        { label: 'Custom Queries', value: '1,000+ Executed/Day' }
      ]
    }
  ]);

  // Experiences Signal
  readonly experiences = signal<Experience[]>([
    {
      id: 'velocis-nicsi',
      company: 'Velocis Systems / NICSI (National Informatics Centre Services Inc.)',
      client: 'Ministry of Panchayati Raj, Govt. of India',
      role: 'Full Stack Developer (Java, Spring Boot & Angular)',
      period: '2023 - Present',
      location: 'Noida, India',
      type: 'Full-time',
      summary: 'Leading core full-stack feature development and performance tuning for eGramSwaraj, one of India’s largest public governance digital platforms.',
      responsibilities: [
        'Designed and maintained scalable Spring Boot REST APIs handling mission-critical public financial transactions.',
        'Migrated legacy frontend components into clean, modular Angular standalone components with optimized change detection.',
        'Refactored heavy SQL and database queries in PostgreSQL, achieving a 35% reduction in execution time for high-load reports.',
        'Implemented strict Spring Security and JWT authentication mechanisms to safeguard sensitive local governance data.',
        'Conducted code reviews, sprint planning, and automated unit testing to guarantee production-ready releases.'
      ],
      technologies: ['Angular', 'TypeScript', 'Java 11/17', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'REST APIs', 'Git', 'Docker'],
      achievements: [
        'Recognized for streamlining voucher payment processing across thousands of local bodies.',
        'Spearheaded the UI performance optimization for high-density reporting modules.'
      ]
    },
    {
      id: 'tofrum-workxmate',
      company: 'Tofrum Solutions / workXmate',
      client: 'Corporate Enterprise Clients',
      role: 'Software Engineer - Full Stack',
      period: '2021 - 2023',
      location: 'Noida / Remote, India',
      type: 'Full-time',
      summary: 'Developed and maintained enterprise web applications, focusing on the Management System Application Tool (MSAT) and ERP workflows.',
      responsibilities: [
        'Engineered responsive Angular web applications utilizing Ag-Grid for intensive corporate data manipulation.',
        'Constructed robust backend microservices with Spring Boot and Node.js (Express) to process real-time business transactions.',
        'Designed normalized Oracle and PostgreSQL database schemas with optimized indexes and stored procedures.',
        'Implemented automated billing pipelines and dynamic PDF/Excel invoice export features.',
        'Integrated RESTful APIs between multiple internal microservices and external third-party partner portals.'
      ],
      technologies: ['Angular', 'TypeScript', 'Spring Boot', 'Node.js', 'Express', 'Ag-Grid', 'Oracle DB', 'PostgreSQL', 'Maven'],
      achievements: [
        'Successfully delivered MSAT core release 2 weeks ahead of schedule with zero critical post-release bugs.',
        'Standardized frontend Ag-Grid templates adopted company-wide across 4 internal products.'
      ]
    },
    {
      id: 'workxmate-tech',
      company: 'workXmate Technologies',
      client: 'SaaS SME & Mid-Market Enterprises',
      role: 'Associate Software Developer (Java & Angular)',
      period: '2019 - 2021',
      location: 'Noida, India',
      type: 'Full-time',
      summary: 'Contributed to the development of the U12 Cloud ERP platform, custom query engines, and reusable UI components.',
      responsibilities: [
        'Developed modular Angular frontend components for CRM, supply chain, and employee management portals.',
        'Built Java Spring Boot backend endpoints and implemented custom dynamic SQL queries for customer analytics.',
        'Collaborated on database migrations, schema definitions, and automated data validation routines.',
        'Assisted Senior Architects in setting up Git branch policies, unit testing suites, and Dockerized dev environments.'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'JavaScript', 'HTML5/CSS3', 'Ag-Grid', 'MySQL', 'Git'],
      achievements: [
        'Helped onboard 10+ mid-market enterprise clients by creating customized report views.'
      ]
    }
  ]);

  // Education Signal
  readonly educations = signal<Education[]>([
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'UIET, CSJM University, Kanpur',
      location: 'Kanpur, Uttar Pradesh, India',
      period: 'Graduated with Distinction',
      score: 'First Class with Distinction',
      description: 'Comprehensive post-graduate degree in Computer Science emphasizing Advanced Software Engineering, Data Structures & Algorithms, Distributed Systems, Database Management Systems, and Object-Oriented System Design.',
      highlights: [
        'Deep specialization in Java Enterprise architecture, Relational Database Systems, and Web Application Frameworks',
        'Academic projects in Distributed Computing and Database Query Optimization',
        'Active participant in coding hackathons and technical symposiums'
      ]
    },
    {
      degree: 'Bachelor of Science (B.Sc.)',
      institution: 'M.L.K. P.G. College, Balrampur',
      location: 'Balrampur, Uttar Pradesh, India',
      period: 'Graduated',
      score: 'First Class',
      description: 'Undergraduate foundation in Mathematics, Physics, and Computer Sciences cultivating rigorous analytical reasoning, algorithmic logic, and mathematical problem-solving skills.',
      highlights: [
        'Strong theoretical foundation in discrete mathematics, numerical analysis, and logical systems',
        'Excellence in computational logic and analytical problem solving'
      ]
    }
  ]);

  // Computed signals
  readonly featuredProjects = computed<Project[]>(() =>
    this.projects().filter((p) => p.featured)
  );

  readonly skillsByCategory: Signal<{
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    tools: Skill[];
  }> = computed(() => {
    const list = this.skills();
    return {
      frontend: list.filter((s) => s.category === 'Frontend'),
      backend: list.filter((s) => s.category === 'Backend'),
      database: list.filter((s) => s.category === 'Database'),
      tools: list.filter((s) => s.category === 'DevOps & Tools')
    };
  });

  constructor() {
    // Synchronize HTML theme class and attribute on startup and theme change
    effect(() => {
      const mode = this.currentTheme();
      if (this.isBrowser && this.document?.documentElement) {
        const root = this.document.documentElement;
        if (mode === 'dark') {
          root.classList.add('dark-theme');
          root.classList.remove('light-theme');
          root.setAttribute('data-theme', 'dark');
        } else {
          root.classList.add('light-theme');
          root.classList.remove('dark-theme');
          root.setAttribute('data-theme', 'light');
        }
      }
    });
  }

  // Toggle Theme Method
  toggleTheme(): void {
    this.currentTheme.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  setTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);
  }

  // Project Modal Methods
  selectProject(project: Project | null): void {
    this.selectedProject.set(project);
    if (this.isBrowser && this.document?.body) {
      this.document.body.style.overflow = project ? 'hidden' : 'auto';
    }
  }

  // Smooth scroll helper with URL fragment update
  scrollToSection(sectionId: string): void {
    this.activeSection.set(sectionId);
    if (this.isBrowser) {
      const element = this.document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Keep URL fragment updated for deep linking and back/forward navigation
      this.router.navigate([], { fragment: sectionId, replaceUrl: true }).catch(() => {
        // Fallback silently if routing isn't ready
      });
    }
  }

  // Download Resume Helper
  downloadResume(): void {
    if (this.isBrowser) {
      window.open(this.profile().resumeUrl, '_blank');
    }
  }

  // Submit Contact Form
  submitContactForm(data: ContactMessage): Promise<boolean> {
    this.contactSubmissionStatus.set({
      isSubmitting: true,
      isSuccess: false,
      message: 'Sending your message...'
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        this.contactSubmissionStatus.set({
          isSubmitting: false,
          isSuccess: true,
          message: `Thank you, ${data.name}! Your message has been received. I will get back to you shortly.`
        });
        resolve(true);
      }, 1000);
    });
  }

  resetContactStatus(): void {
    this.contactSubmissionStatus.set({
      isSubmitting: false,
      isSuccess: false,
      message: ''
    });
  }
}

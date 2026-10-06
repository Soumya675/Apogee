export interface Program {
  id: string;
  title: string;
  category: 'campus' | 'software' | 'data_ai' | 'cloud' | 'spardha';
  categoryLabel: string;
  duration: string;
  format: string;
  level: string;
  avgCtc: string;
  highlights: string[];
  modules: string[];
  targetRoles: string[];
  placedAlumniCount: number;
}

export const RECRUITERS = [
  { name: 'Google', tier: 'Product Super Dream', avgCtc: '32-44 LPA', logoText: 'Google' },
  { name: 'Microsoft', tier: 'Product Super Dream', avgCtc: '28-42 LPA', logoText: 'Microsoft' },
  { name: 'Amazon', tier: 'Product Super Dream', avgCtc: '26-38 LPA', logoText: 'Amazon' },
  { name: 'TCS Digital', tier: 'Differential IT', avgCtc: '7.5-11.5 LPA', logoText: 'TCS Digital' },
  { name: 'Infosys Power Programmer', tier: 'Specialist Tech', avgCtc: '9.5-12 LPA', logoText: 'Infosys' },
  { name: 'Cognizant GenC Next', tier: 'Core Enterprise', avgCtc: '6.8-9 LPA', logoText: 'Cognizant' },
  { name: 'Wipro Turbo', tier: 'Digital Prime', avgCtc: '6.5-8.5 LPA', logoText: 'Wipro' },
  { name: 'Capgemini', tier: 'Global Consulting', avgCtc: '6.8-10 LPA', logoText: 'Capgemini' },
  { name: 'Deloitte USI', tier: 'Advisory & Tech', avgCtc: '7.8-12 LPA', logoText: 'Deloitte' },
  { name: 'Accenture Advanced', tier: 'High Performance', avgCtc: '7.2-10 LPA', logoText: 'Accenture' },
  { name: 'LTIMindtree', tier: 'Enterprise Digital', avgCtc: '6.5-9 LPA', logoText: 'LTIMindtree' },
  { name: 'Zoho Corporation', tier: 'Product Dev', avgCtc: '8.5-15 LPA', logoText: 'Zoho' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'crt-elite',
    title: 'Elite Campus Recruitment Training (CRT)',
    category: 'campus',
    categoryLabel: 'Placement Core',
    duration: '12 Weeks',
    format: 'Hybrid / On-Campus Labs',
    level: 'Pre-final & Final Year',
    avgCtc: '7.5 LPA',
    highlights: [
      'Comprehensive Quantitative, Verbal & Logical Mastery',
      'Data Structures, Algorithms & LeetCode Sprints',
      '1-on-1 Mock HR & Technical Boardroom Panels',
      'Automated Psychometric AMCAT & CoCubes Simulations',
    ],
    modules: [
      'Speed Mathematics, Arithmetic & Advanced Algebra',
      'Critical Logical Deductions & Puzzles',
      'Technical Core: OOPs, DBMS, OS & Computer Networks',
      'Corporate Etiquette, Group Discussions & Extempore',
    ],
    targetRoles: ['Associate Software Engineer', 'System Analyst', 'Graduate Trainee'],
    placedAlumniCount: 3840,
  },
  {
    id: 'fullstack-cloud',
    title: 'Full-Stack Software Architecture & Cloud',
    category: 'software',
    categoryLabel: 'Software Engineering',
    duration: '16 Weeks',
    format: 'Live Code Sprints + 2 Capstones',
    level: 'Intermediate to Advanced',
    avgCtc: '9.8 LPA',
    highlights: [
      'Enterprise React, TypeScript, Node.js & Spring Boot',
      'Docker, Kubernetes & AWS Serverless Deployment',
      'Clean Architecture, Design Patterns & TDD',
      'Git Workflow with Real PR Review Cycles',
    ],
    modules: [
      'Modern Frontend: React 19, State Mgmt & Performance',
      'Microservices with Node.js & Express / Java Spring',
      'Relational (PostgreSQL) & NoSQL (MongoDB, Redis)',
      'CI/CD Pipelines, AWS Lambda & Cloud Monitoring',
    ],
    targetRoles: ['Full-Stack Developer', 'Frontend Engineer', 'Backend Specialist'],
    placedAlumniCount: 2410,
  },
  {
    id: 'ai-datascience',
    title: 'Applied AI, Machine Learning & Data Science',
    category: 'data_ai',
    categoryLabel: 'AI & Data Intelligence',
    duration: '14 Weeks',
    format: 'Hands-on Jupyter Labs & Production APIs',
    level: 'All Engineering Streams',
    avgCtc: '11.2 LPA',
    highlights: [
      'Predictive Modeling, Scikit-Learn & PyTorch Foundations',
      'Large Language Models, Embeddings & RAG Architectures',
      'Data Pipeline Engineering with Pandas, SQL & Polars',
      'End-to-End Model Deployment with FastAPI & Docker',
    ],
    modules: [
      'Applied Statistics, Linear Algebra & Exploratory Analysis',
      'Supervised & Unsupervised Machine Learning Algorithms',
      'Deep Learning for Computer Vision & NLP',
      'Generative AI Integrations & Vector Databases',
    ],
    targetRoles: ['Data Scientist', 'ML Ops Engineer', 'AI Solutions Associate'],
    placedAlumniCount: 1560,
  },
  {
    id: 'devops-cybersec',
    title: 'Cloud DevOps & Cyber Security Defense',
    category: 'cloud',
    categoryLabel: 'Infrastructure & Security',
    duration: '12 Weeks',
    format: 'Live Sandbox & Penetration Testing Labs',
    level: 'Tech Enthusiasts',
    avgCtc: '10.5 LPA',
    highlights: [
      'Infrastructure as Code with Terraform & Ansible',
      'Vulnerability Assessment & Network Penetration Testing',
      'Zero-Trust Security & Cloud Governance Architecture',
      '24/7 Red-Team vs Blue-Team Simulation Exercises',
    ],
    modules: [
      'Linux Kernel Internals & Shell Automation Mastery',
      'CI/CD Automation with GitHub Actions & ArgoCD',
      'OWASP Top 10 Exploitation & Hardening Techniques',
      'SOC Operations, SIEM (Splunk/ELK) & Incident Response',
    ],
    targetRoles: ['DevOps Engineer', 'Cloud Security Analyst', 'SRE'],
    placedAlumniCount: 1190,
  },
  {
    id: 'spardha-exam',
    title: 'Spardha Banking & Competitive Aptitude Wing',
    category: 'spardha',
    categoryLabel: 'Banking & Public Sector',
    duration: '16 Weeks',
    format: 'Daily Speed Drills + 50 Mock Tests',
    level: 'Graduates & Aspirants',
    avgCtc: '8.2 LPA',
    highlights: [
      'Curated for IBPS PO, RRB Officer, SBI & SSC CGL',
      'Daily 100-Question Speed & Accuracy Drills',
      'Banking Awareness & Financial Economy Deep-Dives',
      'Guided by National Record Holders & Math Experts',
    ],
    modules: [
      'High-Speed Vedic Math & Data Interpretation',
      'High-Level Syllogisms & Seating Arrangement Puzzles',
      'English Verbal Precision & Cloze Test Drills',
      'Current Affairs, Monetary Policy & Interview Grooming',
    ],
    targetRoles: ['Probationary Officer', 'Assistant Manager', 'Section Officer'],
    placedAlumniCount: 2950,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Shashank D Sagar',
    role: 'Aptitude & Speed Math Prodigy',
    organization: 'World Record Holder in Mental Arithmetic',
    company: 'Spardha Academic Lead at ACTS',
    packageAchieved: 'National Mentor',
    quote:
      'The systematic day-wise drill structure at ApogeeCTS completely transforms a student’s cognitive capacity. Within 8 weeks, students leap from struggling with basic time-speed problems to solving complex corporate aptitude questions in 20 seconds.',
    avatar: 'SS',
    verified: true,
  },
  {
    name: 'Afsana Erum',
    role: 'Associate Software Engineer',
    organization: 'GIFT Engineering Alumni',
    company: 'Cognizant GenC Next',
    packageAchieved: '9.2 LPA',
    quote:
      'ACTS placement bootcamps took away all my fear of campus drives. The continuous mock coding interviews and technical grooming helped me clear both the technical coding round and managerial interview on day one.',
    avatar: 'AE',
    verified: true,
  },
  {
    name: 'Hemanth Kumar B',
    role: 'Cloud Solutions Engineer',
    organization: 'BPUT Graduate',
    company: 'Capgemini Digital Prime',
    packageAchieved: '8.5 LPA',
    quote:
      'The live project exposure and cloud deployment experience I gained at ApogeeCTS was the key differentiator during my campus interview. The panel specifically praised my real-world Git and CI/CD understanding.',
    avatar: 'HK',
    verified: true,
  },
  {
    name: 'Sindhu S',
    role: 'Data Analyst & Automation Lead',
    organization: 'Campus Placement 2024',
    company: 'Deloitte USI',
    packageAchieved: '10.5 LPA',
    quote:
      'Psychometric assessments provided me with tailored guidance on my behavioral and reasoning strengths. ApogeeCTS is genuinely invested in every student’s career growth.',
    avatar: 'SS',
    verified: true,
  },
  {
    name: 'Vishal Krishnan',
    role: 'Full-Stack Software Engineer',
    organization: 'Odisha Tech Batch',
    company: 'Zoho Corporation',
    packageAchieved: '12.0 LPA',
    quote:
      'From zero confidence in algorithmic thinking to cracking 4 job offers simultaneously. The rigorous hackathon culture cultivated by ACTS made all the difference.',
    avatar: 'VK',
    verified: true,
  },
];

export const STATS = [
  { value: '150,000+', label: 'Graduates Trained & Mentored', detail: 'Across 500+ Indian campuses' },
  { value: '94.8%', label: 'Placement Conversion Rate', detail: 'Eligible students placed within 120 days' },
  { value: '350+', label: 'Active Corporate Recruiters', detail: 'Product, FinTech & Fortune 500 tech firms' },
  { value: '₹42 LPA', label: 'Highest Salary Package', detail: 'Achieved in international tech drive' },
];

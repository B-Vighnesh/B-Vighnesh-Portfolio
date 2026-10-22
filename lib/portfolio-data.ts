// ═══════════════════════════════════════════════
// PORTFOLIO DATA — B VIGHNESH KUMAR
// ═══════════════════════════════════════════════

export const IDENTITY = {
  name: 'B Vighnesh Kumar',
  role: 'Full Stack Developer (R&D)',
  location: 'Bangalore, India',
  email: 'vighneshsheregar2004@gmail.com',
  emailAlt: 'bvighneshkumar@gmail.com',
  phone: '+91 8618402581',
  tagline: 'Backend developer specializing in Java, Spring Boot, and REST APIs. Building and deploying production applications on AWS with full-stack depth.',
  links: {
    github: 'https://github.com/B-Vighnesh',
    linkedin: 'https://linkedin.com/in/b-vighnesh-kumar',
    leetcode: 'https://leetcode.com/u/B_Vighnesh_Kumar',
  },
  resumePath: 'https://drive.usercontent.google.com/uc?id=1iMHx-6GyjqlKa0f_K5PeKtyaDVk1t2lQ&authuser=0&export=download',
} as const;

export const ROTATING_SUBTITLES = [
  'Full Stack Developer',
  'Backend Engineer',
  'R&D Developer @ Sclera',
] as const;

export const TIMELINE = [
  {
    year: '2022',
    label: 'Started Engineering',
    description: 'Began Computer Science Engineering and got my first real grip on programming through Java and C.',
  },
  {
    year: '2023',
    label: 'Core Computer Science',
    description: 'Built a solid foundation in OOP, Data Structures, Algorithms, DBMS, and Operating Systems concepts that I still rely on every day.',
  },
  {
    year: '2024',
    label: 'Full Stack Development',
    description: 'Picked up Hibernate/JPA, Spring Boot, and React.js to build complete web applications with JWT authentication and role-based access control.',
  },
  {
    year: '2025',
    label: 'Production and Cloud',
    description: 'Deployed production applications on AWS using EC2, CloudFront, and S3. Got deeper into REST API design and MySQL database modelling at scale.',
  },
  {
    year: 'Feb to Jul 2026',
    label: 'Software Product Developer Apprentice',
    description: 'At Sclera, consolidated 50 plus microservice endpoints into the monolithic backend, resolved multi-tenancy conflicts, and researched MCP server integration for AI-powered product features.',
  },
  {
    year: 'Aug 2026',
    label: 'Full Stack Developer in R&D',
    description: 'Promoted to the R&D team at Sclera. Built the OPC UA connector from scratch in Python (asyncua), ported it to C (open62541) for production, validated it against a real OPC UA server, and integrated the data pipeline into the Spring Boot backend.',
  },
] as const;

export const SKILLS = {
  Backend: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate/JPA', 'C', 'Python'],
  Frontend: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
  'Cloud & Database': ['AWS EC2', 'CloudFront', 'S3', 'MySQL'],
  'Tools & Auth': ['Git', 'Postman', 'JWT', 'Role-Based Access Control'],
  'R&D & Protocols': ['OPC UA', 'asyncua', 'open62541', 'MCP'],
  Concepts: ['Data Structures', 'OOP', 'DBMS', 'System Design', 'REST Architecture'],
} as const;

export const SKILL_COLORS: Record<string, string> = {
  Backend: '#A78BFA',
  Frontend: '#6B4FBB',
  'Cloud & Database': '#F59E0B',
  'Tools & Auth': '#34D399',
  'R&D & Protocols': '#22D3EE',
  Concepts: '#FB923C',
};

export const PROJECTS = [
  {
    id: 'aagriggate',
    title: 'AagriGgate',
    subtitle: 'Farmer-to-Buyer Direct & Decision Support Platform',
    description:
      'A full stack marketplace that connects farmers directly with buyers, removing costly middlemen and bringing transparency to agricultural trade. Also functions as a decision support platform by providing market insights and guidance to help farmers make informed selling decisions. Built with role-based access so farmers manage their listings and buyers browse and transact with confidence.',
    impact: 'Reduces intermediary dependency and enables smarter decision-making for rural farming communities',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'AWS CloudFront'],
    highlights: [
      'Built a full-stack agriculture marketplace eliminating intermediaries between farmers and buyers, deployed on Google Cloud (VM) and Vercel',
      'Designed and implemented RESTful APIs with Spring Boot, JWT-based authentication with OTP login, and role-based access control for farmers and buyers',
      'Integrated external Weather, Market Price, and News APIs to give farmers data for pricing and planting decisions',
      'Developed an interactive React.js frontend for a seamless user experience and integrated MySQL for storage'

    ],
    color: '#34D399',
    accentColor: '#059669',
    icon: '🌾',
    github: 'https://github.com/B-Vighnesh/AagriGgate',
    live: 'https://aagriggate.vercel.app',
  },
  {
    id: 'dark-pattern-detector',
    title: 'Dark Pattern Detector',
    subtitle: 'Real-time Deceptive UI Detection',
    description:
      'A real-time system that identifies deceptive UX patterns on websites, the kind of tricks that manipulate users into unintended actions. Combines a DistilBERT ML model with a browser extension for instant detection. Includes a full stack interface for information, feedback, and extension access, while keeping all detection fully offline to ensure data privacy.',
    impact: 'Empowers users to browse the web with full awareness and privacy',
    tech: ['Python', 'React.js', 'FastAPI', 'DistilBERT', 'Browser Extension', ],
    highlights: [
      'ML-powered detection using DistilBERT transformer model',
      'FastAPI backend serving the ML model',
      'Browser extension for real-time text extraction and analysis',
      'Built an ML-based dark pattern detector that identifies manipulative tactics on websites (fake urgency, false scarcity, fabricated social proof) and alerts users in real time, naming the exact sentence, the tactic and a confidence score',
'Developed a two-stage pipeline. A fine-tuned DistilBERT cascade (binary detector, then 7-category classifier) flags candidates, and an LLM stage then verifies each one, giving reasoning and filtering false positives, all delivered through a browser extension',
'Making detection fully offline by exporting the models to run on the user’s machine, so no browsing data leaves the device'

    ],
    color: '#A78BFA',
    accentColor: '#7C3AED',
    icon: '🔍',
    github: 'https://github.com/B-Vighnesh/dagent',
    live: 'https://dagent-ten.vercel.app',
  },
  {
    id: 'equimanage',
    title: 'EquiManage',
    subtitle: 'Electronics Lab Equipment Management',
    description:
      'A console-based equipment tracking system for electronics laboratories, replacing manual spreadsheets with reliable JDBC-powered data management. Built to improve accountability and reduce the effort spent tracking lab assets.',
    impact: 'Streamlines lab operations and equipment accountability',
    tech: ['Java', 'MySQL', 'JDBC', 'OOP'],
    highlights: [
      'JDBC-based database connectivity',
      'Equipment checkout and return tracking',
      'Console-based CLI for lab administrators',
      'Clean OOP design with Java',
    ],
    color: '#F5C842',
    accentColor: '#D97706',
    icon: '⚡',
    github: 'https://github.com/B-Vighnesh/EquiManage',
    live: '',
  },
] as const;

export const EXPERIENCE = [
  {
    role: 'Full Stack Developer (R&D)',
    company: 'Sclera',
    type: 'Full-time',
    period: 'Aug 2026 – Oct 2026',
    location: 'Mangalore, India',
    description:
      'Working in the R&D team at Sclera, building the OPC UA client connector end-to-end from a Python prototype all the way through a production C implementation, real server validation, and full Spring Boot central backend integration.',
    highlights: [
      'Phase 1 (Prototype): Started by building the OPC UA client connector in asyncua (Python), connecting to the OPC UA server, reading real-time data, and passing it through the product pipeline',
      'Phase 2 (Production): Ported the connector to open62541 (C) to achieve the performance and reliability needed for a production environment',
      'Phase 3 (Validation): Tested the open62541 connector against a real Prosys OPC UA Simulation Server to confirm accurate data retrieval and end-to-end correctness before going live',
      'Phase 4 (Integration): Integrated the validated OPC UA data pipeline into the Spring Boot central backend, enabling real-time industrial data to flow seamlessly into the product',
    ],
  },
  {
    role: 'Software Product Developer Apprentice',
    company: 'Sclera',
    type: 'Apprenticeship',
    period: 'Feb 2026 – Jul 2026',
    location: 'Mangalore, India',
    description:
      'Consolidated an entire microservice codebase into the main monolithic backend and researched AI and MCP integration for product features.',
    highlights: [
      'Consolidated a full microservice with 50 plus endpoints into the main monolithic backend by diagnosing and resolving a multi-tenancy version conflict',
      'Made sure both codebases stayed compatible and fully functional throughout the migration without breaking existing features',
      'Analyzed the end-to-end data flow across frontend, backend, and database layers of a multi-module product to support ongoing feature development',
      'Researched MCP (Model Context Protocol) servers to evaluate how LLM capabilities could be integrated with the VDMS database for AI-powered product features',
    ],
  },
] as const;

export const VISION_STATEMENT =
  'I build systems that are production-ready, well-architected, and solve real problems.';

export const VISION_PILLARS = [
  {
    icon: '☁️',
    title: 'Cloud & Deployment',
    description: 'Building and deploying production-grade applications on AWS — EC2, CloudFront, and S3 for real-world scale.',
  },
  {
    icon: '⚙️',
    title: 'System Design',
    description: 'Designing scalable, maintainable backend architectures — from monoliths to distributed systems and back.',
  },
  {
    icon: '🔬',
    title: 'R&D Engineering',
    description: 'Evaluating protocols, prototyping with Python, and porting to C for production — bridging research and real product.',
  },
  {
    icon: '📈',
    title: 'Continuous Growth',
    description: 'Deepening backend, cloud, and systems depth through real-world product exposure and deliberate learning.',
  },
] as const;

export const CONTACT_CTA = "Let's build something impactful.";

export const NAV_LINKS = [
  { label: 'Origin', href: '#origin' },
  { label: 'Craft', href: '#craft' },
  { label: 'Work', href: '#work' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
] as const;

// ═══════════════════════════════════════════════
// PORTFOLIO DATA — B VIGHNESH KUMAR
// ═══════════════════════════════════════════════

export const IDENTITY = {
  name: 'B Vighnesh Kumar',
  role: 'Full Stack Developer',
  location: 'Mangalore, India',
  email: 'bvighneshkumar@gmail.com',
  phone: '+91 8618402581',
  tagline: 'I build backend systems and full stack applications that are reliable, scalable, and practical.',
  links: {
    github: 'https://github.com/B-Vighnesh',
    linkedin: 'https://linkedin.com/in/b-vighnesh-kumar',
    leetcode: 'https://leetcode.com/u/B_Vighnesh_Kumar',
  },
  resumePath: 'https://drive.google.com/drive/folders/1l7s_ImuhapNcJ_joO7l8LpED-E-3ucVw',
} as const;
export const ROTATING_SUBTITLES = [
  'Full Stack Developer',
  'Spring Boot Developer',
  'Backend Engineer',
  'React Developer',
  'API Developer'
] as const;

export const TIMELINE = [
  {
    year: '2022',
    label: 'Started Engineering',
    description: 'Enrolled in CSE, began building the foundation in algorithms, data structures, and core computer science.',
  },
  {
    year: '2024',
    label: 'Built Full Stack Projects',
    description: 'Delivered end-to-end applications connecting real users — applying Spring Boot, React, and MySQL in production-style environments.',
  },
  {
    year: '2026',
    label: 'Backend Developer Apprenticeship',
    description: 'Joined Sclera VDMS as a Software Product Developer apprentice — learning real product architecture and system design hands-on.',
  },
] as const;

export const SKILLS = {
  Backend: ['Java', 'Spring Boot', 'REST APIs', 'JDBC'],
  Frontend: ['React.js', 'HTML', 'CSS', 'JavaScript'],
  'Database & Tools': ['MySQL', 'Git', 'Postman', 'IntelliJ IDEA'],
  Concepts: ['Data Structures', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
  'Soft Skills': ['Team Collaboration', 'Communication', 'Problem-Solving', 'Adaptability'],
} as const;

export const SKILL_COLORS: Record<string, string> = {
  Backend: '#A78BFA',
  Frontend: '#6B4FBB',
  'Database & Tools': '#F5C842',
  Concepts: '#34D399',
  'Soft Skills': '#FB923C',
};

export const PROJECTS = [
  {
    id: 'aagriggate',
    title: 'AagriGgate',
    subtitle: 'Farmer-to-Buyer Direct Platform',
    description:
      'A full stack marketplace that connects farmers directly with buyers — removing costly middlemen and bringing transparency to agricultural trade. Built with role-based access so farmers manage their listings and buyers browse and transact with confidence.',
    impact: 'Reduces intermediary dependency for rural farming communities',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
    highlights: [
      'Role-based access control for farmers and buyers',
      'Spring Boot REST API backend',
      'React.js responsive frontend',
      'MySQL relational database design',
    ],
    color: '#34D399',
    accentColor: '#059669',
    icon: '🌾',
  },
  {
    id: 'dark-pattern-detector',
    title: 'Dark Pattern Detector',
    subtitle: 'Real-time Deceptive UI Detection',
    description:
      'A real-time system that identifies deceptive UX patterns on websites — the kind of tricks that manipulate users into unintended actions. Combines a DistilBERT ML model with a browser extension for instant detection and user-controlled flagging.',
    impact: 'Empowers users to browse the web with full awareness',
    tech: ['Spring Boot', 'React.js', 'DistilBERT', 'Browser Extension', 'NLP'],
    highlights: [
      'ML-powered detection using DistilBERT transformer model',
      'Browser extension for real-time page analysis',
      'User feedback loop to improve accuracy',
      'Spring Boot + React.js full stack architecture',
    ],
    color: '#A78BFA',
    accentColor: '#7C3AED',
    icon: '🔍',
  },
  {
    id: 'equimanage',
    title: 'EquiManage',
    subtitle: 'Electronics Lab Equipment Management',
    description:
      'A console-based equipment tracking system for electronics laboratories — replacing manual spreadsheets with reliable JDBC-powered data management. Built to improve accountability and reduce the effort spent tracking lab assets.',
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
  },
] as const;

export const EXPERIENCE = [
  {
    role: 'Software Product Developer',
    company: 'Sclera VDMS',
    type: 'Apprenticeship',
    period: 'Feb 2026 – Present',
    location: 'Karnataka, India',
    description:
      'Embedded in a real-world product engineering team, gaining hands-on exposure to how production-grade backend systems are structured, maintained, and scaled.',
    highlights: [
      'Learning backend development in a live product environment',
      'Understanding system architecture and component workflows',
      'Studying complete product modules from specification to delivery',
      'Observing end-to-end data flow — frontend → backend → database',
    ],
  },
] as const;

export const VISION_STATEMENT =
  'I focus on building systems that are simple, functional, and reliable.';

export const VISION_PILLARS = [
  {
    icon: '⚙️',
    title: 'System Design',
    description: 'Learning how to design scalable, maintainable backend architectures that grow with real product needs.',
  },
  {
    icon: '🧠',
    title: 'DSA & Fundamentals',
    description: 'Strengthening problem-solving through consistent practice in data structures and algorithms.',
  },
  {
    icon: '🔨',
    title: 'Practical Projects',
    description: 'Building applications that solve real problems — not toy projects, but systems with genuine utility.',
  },
  {
    icon: '📈',
    title: 'Continuous Growth',
    description: 'Improving backend and full stack depth through real-world exposure and deliberate learning.',
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

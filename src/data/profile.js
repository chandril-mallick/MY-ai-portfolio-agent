export const PROFILE = {
  name: 'Chandril Mallick',
  title: 'AI Full-Stack Developer',
  subtitle: 'CSE @ Brainware University · RAG · NLP · Health-Tech AI',
  headline: 'Building AI Products That Solve Real Problems.',
  roles: ['AI Engineer', 'Full Stack Developer', 'Startup Founder', 'IEEE Researcher'],
  email: 'chandrilmallick1@gmail.com',
  phone: '+91-9733960909',
  location: 'Kolkata, India',
  linkedin: 'https://linkedin.com/in/chandril-mallick',
  github: 'https://github.com/chandril-mallick',
  portfolio: 'https://chandril-dev.online/',
  resumeUrl: '/resume.pdf',
  avatar: '/WhatsApp Image 2025-12-27 at 19.32.06.jpeg',
  openToWork: true,
  calendly: 'mailto:chandrilmallick1@gmail.com?subject=Meeting%20Request',
};

export const SUMMARY =
  'CSE undergraduate at Brainware University specializing in AI Full-Stack Development with hands-on experience building production-ready RAG systems, NLP pipelines, and AI-powered applications. Skilled in FastAPI, React, LangChain, FAISS, Docker, PyTorch, and modern LLM workflows. Built semantic retrieval systems processing 10,000+ documents and scalable AI applications with optimized inference pipelines. IEEE-published researcher, Top 1,000 national innovator, and Top 25 HP Dreams Unlocked finalist.';

export const EDUCATION = {
  degree: 'B.Tech in Computer Science and Engineering',
  school: 'Brainware University, Kolkata',
  period: '2023 — 2027',
  coursework: [
    'Data Structures and Algorithms',
    'DBMS',
    'Artificial Intelligence',
    'Operating Systems',
  ],
};

export const EXPERIENCE = [
  {
    role: 'Machine Learning Engineering Intern',
    company: 'FlyRank AI',
    period: 'July 2026 — Present',
    logo: '✈️',
    highlights: [
      'Accepted into the FlyRank AI program to optimize machine learning systems and ranking pipelines.',
      'Collaborating on training, evaluating, and fine-tuning ranking algorithms and ML workflows.',
      'Designing robust feature engineering processes and data validation steps for high-throughput ranking.',
      'Improving inference efficiency and integrating models with product backends.',
    ],
  },
  {
    role: 'AI Intern',
    company: 'Samsung Innovation Campus',
    period: 'Sep 2025 — Nov 2025',
    logo: '🔵',
    highlights: [
      'Developed NLP pipelines for text preprocessing, feature extraction, and model training workflows.',
      'Exposed machine learning models through scalable REST APIs using FastAPI.',
      'Improved data processing efficiency through optimized preprocessing and validation workflows.',
      'Curated and annotated datasets for supervised learning applications.',
    ],
  },
];

export const FEATURED_PROJECTS = [
  {
    id: 'dabba-ai',
    title: 'Dabba AI (Study Copilot)',
    subtitle: 'Privacy-First Educational AI Platform',
    problem: 'Students lack affordable, offline-capable AI tutors that can work with their own study materials.',
    solution: 'A fully local, end-to-end RAG platform that tutors, plans, quizzes, and chats with 10,000+ academic documents — no external API required.',
    github: 'https://github.com/chandril-mallick/study-copilot',
    repoName: 'study-copilot',
    tags: ['RAG', 'LangChain', 'FastAPI', 'React', 'FAISS'],
    metrics: [
      { label: 'Latency Reduction', value: '40%' },
      { label: 'Documents Indexed', value: '10K+' },
      { label: 'User Roles', value: '5' },
    ],
    architecture: 'User → React UI → FastAPI → LangChain → FAISS Index → Gemma 3:1B (Local)',
    highlights: [
      'Full-stack educational AI: tutoring, study planning, flashcards, quizzes, and document chat.',
      'End-to-end RAG pipeline with LangChain, FAISS, and Sentence Transformers across 10,000+ academic documents.',
      'Local LLM inference via Gemma 3:1B — offline, privacy-preserving, no external API dependency.',
      'Real-time tutoring via FastAPI, WebSockets, React, and JWT authentication.',
      'Multi-role ecosystem: Students, Faculty, Verifiers, Administrators, and Management.',
      'Reduced query response latency by 40% through optimized vector retrieval.',
    ],
  },
  {
    id: 'smartsant-iot',
    title: 'SmartSant-IoT',
    subtitle: 'Multi-Modal Early Disease Prediction System',
    problem: 'Rural healthcare lacks affordable diagnostic tools for early detection of urinary and GI tract disorders.',
    solution: 'An IoT-powered multi-modal AI platform combining urine analysis, CKD risk prediction, and stool image classification with 93%+ accuracy.',
    github: 'https://github.com/chandril-mallick/SmartSant-IoT---Early-Disease-Prediction-System',
    repoName: 'SmartSant-IoT---Early-Disease-Prediction-System',
    tags: ['Healthcare AI', 'FastAPI', 'PyTorch', 'Streamlit', 'SHAP'],
    metrics: [
      { label: 'UTI Accuracy', value: '93.06%' },
      { label: 'AI Models', value: '4+' },
      { label: 'IEEE Published', value: '2026' },
    ],
    architecture: 'IoT Sensors → Image + JSON → FastAPI → EfficientNet-B0 / LightGBM → SHAP Explainability → Streamlit Dashboard',
    highlights: [
      'Multi-modal platform: urine disease detection, CKD risk prediction, and stool image classification.',
      'Models include Random Forest, LightGBM, Neural Networks, and EfficientNet-B0 — 93.06% UTI accuracy.',
      'Preprocessing: KNN imputation, SMOTE, outlier removal, feature scaling, and data augmentation.',
      'Production FastAPI services with OpenAPI docs for JSON and image-based inference.',
      'Explainable AI with SHAP and Grad-CAM for clinical decision support.',
      'Interactive Streamlit app for real-time disease risk assessment.',
    ],
  },
];

export const PUBLICATION = {
  title:
    'A Low-Cost Smart IoT-Enabled Multimodal Sanitation System for Health Monitoring and Urinary–GI Disorders Detection via Bio-Waste Analysis',
  venue: 'IEEE',
  year: '2026',
  description:
    'Co-authored IEEE publication combining IoT systems and machine learning for early disease detection. Developed predictive models achieving 94% classification accuracy for healthcare monitoring applications.',
};

export const ACHIEVEMENTS = [
  'Top 1,000 Innovator among 10,000+ nationwide participants.',
  'Top 25 Finalist — HP Dreams Unlocked (Tech Track) for Study Copilot.',
  'Participated in Hack4Delhi, CONVOLVE 4.0, and Code Clash hackathons.',
];

export const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    level: 'Expert',
    color: 'blue',
    skills: [
      { name: 'Python', pct: 95 },
      { name: 'JavaScript', pct: 85 },
      { name: 'C', pct: 70 },
    ],
  },
  {
    title: 'GenAI & LLM',
    level: 'Expert',
    color: 'purple',
    skills: [
      { name: 'LLMs', pct: 90 },
      { name: 'RAG', pct: 92 },
      { name: 'Prompt Engineering', pct: 88 },
      { name: 'LangChain', pct: 88 },
      { name: 'HuggingFace', pct: 82 },
      { name: 'Semantic Search', pct: 85 },
      { name: 'Embeddings', pct: 85 },
      { name: 'FAISS', pct: 80 },
    ],
  },
  {
    title: 'AI / ML',
    level: 'Proficient',
    color: 'cyan',
    skills: [
      { name: 'PyTorch', pct: 80 },
      { name: 'TensorFlow', pct: 72 },
      { name: 'Scikit-learn', pct: 85 },
      { name: 'OpenCV', pct: 75 },
      { name: 'NLP', pct: 82 },
    ],
  },
  {
    title: 'Backend & Frontend',
    level: 'Proficient',
    color: 'emerald',
    skills: [
      { name: 'FastAPI', pct: 88 },
      { name: 'Node.js', pct: 72 },
      { name: 'REST APIs', pct: 90 },
      { name: 'React.js', pct: 80 },
      { name: 'Tailwind CSS', pct: 85 },
    ],
  },
  {
    title: 'Databases & Tools',
    level: 'Proficient',
    color: 'orange',
    skills: [
      { name: 'MySQL', pct: 78 },
      { name: 'Firebase', pct: 72 },
      { name: 'Supabase', pct: 70 },
      { name: 'Git & GitHub', pct: 90 },
      { name: 'Docker', pct: 68 },
      { name: 'Linux', pct: 75 },
    ],
  },
];

export const IMPACT_METRICS = [
  { label: 'AI Projects', value: 10, suffix: '+', icon: '🤖' },
  { label: 'GitHub Repos', value: 25, suffix: '+', icon: '📦' },
  { label: 'Technologies', value: 15, suffix: '+', icon: '⚡' },
  { label: 'Hackathons', value: 3, suffix: '', icon: '🏆' },
  { label: 'IEEE Paper', value: 1, suffix: '', icon: '📄' },
  { label: 'Accuracy', value: 94, suffix: '%', icon: '🎯' },
];

export const TIMELINE = [
  {
    year: '2023',
    title: 'Started the Journey',
    description: 'Joined Brainware University for B.Tech in CSE. Fell in love with Python and started building CLI tools.',
    tags: ['Python', 'C', 'Algorithms'],
    icon: '🎓',
  },
  {
    year: '2024',
    title: 'Full Stack Foundations',
    description: 'Built first full-stack web apps with React and FastAPI. Explored databases, REST APIs, and cloud deployment.',
    tags: ['React', 'FastAPI', 'MySQL', 'Docker'],
    icon: '🛠️',
  },
  {
    year: '2025 Q1',
    title: 'AI & ML Deep Dive',
    description: 'Discovered LangChain and FAISS. Built first RAG pipeline. Joined Samsung Innovation Campus as AI Intern.',
    tags: ['LangChain', 'FAISS', 'RAG', 'Samsung Internship'],
    icon: '🧠',
  },
  {
    year: '2025 Q3',
    title: 'Built Production AI Systems',
    description: 'Launched Dabba AI — a local, offline RAG platform for 10,000+ documents. 40% latency reduction.',
    tags: ['RAG', 'LLM', 'Production', 'FastAPI'],
    icon: '🚀',
  },
  {
    year: '2026',
    title: 'IEEE Publication & Recognition',
    description: 'Co-authored IEEE paper on SmartSant-IoT. Ranked Top 1,000 nationally. HP Dreams Unlocked Top 25 Finalist.',
    tags: ['IEEE', 'Healthcare AI', 'Top 1K Innovator'],
    icon: '📜',
  },
  {
    year: 'Today',
    title: 'Machine Learning @ FlyRank AI',
    description: 'Accepted as a Machine Learning Engineering Intern at FlyRank AI. Optimizing ranking algorithms and ML workflows while building PathShala AI.',
    tags: ['FlyRank AI', 'Machine Learning', 'PathShala AI'],
    icon: '✈️',
  },
];

export const STARTUPS = [
  {
    id: 'pathshala-ai',
    logoUrl: '/pathshala-logo.png',
    name: 'PathShala AI',
    tagline: 'Speak in Bengali. Crack Any Exam.',
    status: 'Beta Cohort',
    statusColor: 'yellow',
    description: 'Join 500+ students on PathShalaAI. The AI-powered voice tutor for JEE, NEET, WBJEE & UPSC. Bengali-first, exam-focused explanations in minutes.',
    problem: 'Quality competitive exam preparation is locked behind expensive coaching, and language barriers make it harder for regional medium students to crack national exams.',
    solution: 'Voice-based learning and explanations in Bengali in under 2 minutes. Speak doubts out loud and receive instant, exam-focused voice explanations.',
    tech: ['Voice AI', 'RAG', 'LangChain', 'FastAPI', 'React'],
    website: 'https://www.pathshala-ai.com/',
    linkedin: 'https://www.linkedin.com/company/pathshalaaiindia/',
  },
];

export const CERTIFICATIONS = [
  { name: 'FlyRank AI Internship', issuer: 'FlyRank Corp.', year: '2026', type: 'Machine Learning Engineering Intern' },
  { name: 'Samsung Innovation Campus', issuer: 'Samsung', year: '2025', type: 'AI & ML Internship' },
  { name: 'HP Dreams Unlocked', issuer: 'HP India', year: '2025', type: 'Top 25 Finalist' },
  { name: 'IEEE Publication', issuer: 'IEEE', year: '2026', type: 'Co-Author' },
];

export const GITHUB_USERNAME = 'chandril-mallick';

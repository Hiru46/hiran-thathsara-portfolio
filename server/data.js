export const portfolio = {
  name: 'Hiran Thathsara',
  role: 'Associate Software Engineer',
  secondaryRole: 'Full-Stack Developer',
  location: 'Matara, Sri Lanka',
  email: 'hiranthathsara9@gmail.com',
  phone: '+94 719 243 296',
  github: 'https://github.com/Hiru46',
  linkedin: 'https://linkedin.com/in/hiran-thathsara-64512a220',
  summary: 'Full-stack developer and Software Engineering undergraduate with more than a year of professional experience building, integrating and maintaining web applications across Java, JavaScript, React.js and Node.js.',
  experience: [
    { role: 'Associate Software Engineer', company: 'CODUZA (Pvt) Ltd', period: 'Aug 2025 - Nov 2026', type: 'Project-Based', points: ['Built and maintained responsive user-facing applications', 'Integrated REST APIs and managed frontend/backend data flow', 'Implemented feature improvements and diagnosed live application defects'] },
    { role: 'Data Entry Operator', company: 'Pacific Beverage Lanka', period: 'Jul 2026 - Oct 2026', type: 'Part-time', points: ['Performed accurate data entry with strong attention to detail', 'Completed assigned work within a professional environment'] },
    { role: 'Software Engineering Intern', company: 'My Power Solutions', period: 'Sep 2022 - Dec 2022', type: 'Internship', points: ['Supported technical and design-related tasks', 'Collaborated with team members on day-to-day work'] }
  ],
  education: [
    { degree: 'BSc (Hons) in Software Engineering', school: 'Sri Lanka Institute of Information Technology', period: '2023 - 2026', note: 'All examinations completed; graduation expected March 2027' },
    { degree: 'Software Engineering', school: 'Java Institute Southern Campus', period: '2021 - 2022', note: '' }
  ],
  skills: {
    Languages: ['Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'Kotlin', 'C', 'C++', 'SQL'],
    Frontend: ['React.js', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
    Backend: ['Node.js', 'Express.js', 'Spring Boot', 'Laravel', 'FastAPI', 'REST APIs', 'SOAP'],
    Databases: ['MySQL', 'Microsoft SQL Server', 'MongoDB', 'Oracle'],
    Architecture: ['Microservices', 'Docker', 'Kubernetes', 'Git', 'GitHub'],
    Practices: ['Responsive Design', 'Authentication', 'Android', 'API Integration', 'Troubleshooting']
  },
  projects: [
    { title: 'AuraLearn', category: 'Research', accent: '#a78bfa', icon: 'brain', image: '/projects/auralearn.jpg', description: 'AI-enabled adaptive study reminder system using spaced repetition, affective readiness signals and contextual reinforcement learning.', tech: ['Python', 'FastAPI', 'Spring Boot', 'React', 'MongoDB', 'Docker'], github: 'https://github.com/Hiru46/research_website', featured: true },
    { title: 'HarmoniQ', category: 'Full Stack', accent: '#38bdf8', icon: 'music', image: '/projects/harmoniq.svg', description: 'Microservices music platform for song discovery, playlist management and personalised recommendations.', tech: ['React', 'Vite', 'Node.js', 'MongoDB', 'Clerk', 'Kubernetes'], github: null, featured: true },
    { title: 'Wash & Go', category: 'Full Stack', accent: '#34d399', icon: 'car', image: '/projects/wash-and-go.png', description: 'Vehicle service centre operations platform with service packages, CRUD workflows and administration.', tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'], github: 'https://github.com/Hiru46/Wash_and_Go', featured: true },
    { title: 'Leeds Kindergarten', category: 'Full Stack', accent: '#f59e0b', icon: 'school', image: '/projects/leeds-kindergarten.png', description: 'Management platform for student information, parents and events backed by a relational database.', tech: ['React', 'Vite', 'Node.js', 'Express', 'MySQL'], github: 'https://github.com/Hiru46/Leeds_Kindergartens', featured: true },
    { title: 'Wander World', category: 'Frontend', accent: '#818cf8', icon: 'globe', image: '/projects/wander-world.jpg', description: 'Country exploration application integrating REST APIs and deployed for the web.', tech: ['MERN', 'TypeScript', 'REST APIs', 'Firebase'], github: 'https://github.com/Hiru46/Wander_World', featured: true },
    { title: 'BiteBlaze', category: 'Microservices', accent: '#fb7185', icon: 'utensils', image: '/projects/biteblaze.svg', description: 'Distributed systems meal delivery application built with a modular microservices architecture.', tech: ['MERN', 'Vite', 'Microservices', 'Tailwind'], github: 'https://github.com/Hiru46/BiteBlaze', featured: true },
    { title: 'Finance Tracker', category: 'Backend', accent: '#22d3ee', icon: 'wallet', image: '/projects/finance-tracker.svg', description: 'Database-driven backend services for managing customer financial tasks.', tech: ['MongoDB', 'Express', 'Node.js'], github: 'https://github.com/Hiru46/Finance_Tracker', featured: false },
    { title: 'CrickFound', category: 'Mobile', accent: '#4ade80', icon: 'smartphone', image: '/projects/crickfound.png', description: 'Android academic application developed using Kotlin.', tech: ['Kotlin', 'Android'], github: 'https://github.com/Hiru46/CrickFound', featured: false },
    { title: 'Wedding Planning', category: 'Web', accent: '#f472b6', icon: 'heart', image: '/projects/wedding-planning.svg', description: 'Web application for coordinating wedding event planning activities.', tech: ['HTML', 'CSS', 'JavaScript', 'PHP'], github: null, featured: false },
    { title: 'Marry Meal', category: 'Web', accent: '#fb923c', icon: 'meal', image: '/projects/marry-meal.svg', description: 'Non-profit meal delivery management application for elders.', tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'phpMyAdmin'], github: 'https://github.com/Hiru46/MerryMeal', featured: false },
    { title: 'BattleShip', category: 'Games', accent: '#60a5fa', icon: 'game', image: '/projects/battleship.svg', description: 'Two-player Battleship game with core gameplay logic.', tech: ['Java'], github: 'https://github.com/Hiru46/Battleship', featured: false }
  ],
  research: {
    title: 'AuraLearn Adaptive Study Reminder',
    subtitle: 'Emotion- and Progress-Aware Adaptive Scheduling',
    description: 'A final-year research microservice that combines an extended SM-2 algorithm, memory-decay modelling and an Affective Readiness Index with contextual-bandit decision making.',
    metrics: [
      { value: '86.4%', label: 'Review adherence', note: 'vs 58.0% static baseline' },
      { value: '88.0%', label: '30-day retention', note: 'vs 68.0% baseline' },
      { value: '89.0%', label: 'Session completion', note: '30-day study trial' },
      { value: '84.0%', label: 'Burnout satisfaction', note: '30-day study trial' }
    ],
    note: 'Reported research study results from a 30-day trial with 32 students, not commercial production metrics.'
  }
};

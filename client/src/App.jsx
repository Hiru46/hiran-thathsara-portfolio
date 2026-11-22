import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2,
  GraduationCap, Mail, MapPin, Menu, Sparkles, X
} from 'lucide-react'
import './App.css'

const fallback = {
  name: 'Hiran Thathsara',
  role: 'Associate Software Engineer',
  secondaryRole: 'Full-Stack Developer',
  location: 'Matara, Sri Lanka',
  email: 'hiranthathsara9@gmail.com',
  github: 'https://github.com/Hiru46',
  linkedin: 'https://linkedin.com/in/hiran-thathsara-64512a220',
  summary: 'Full-stack developer with more than a year of professional experience building, integrating and maintaining web applications across Java, JavaScript, React.js and Node.js.',
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
    { title: 'AuraLearn', category: 'Research', accent: '#a78bfa', icon: 'brain', image: '/projects/auralearn.png', description: 'AI-enabled adaptive study reminder system using spaced repetition, affective readiness signals and contextual reinforcement learning.', tech: ['Python', 'FastAPI', 'Spring Boot', 'React', 'MongoDB', 'Docker'], github: 'https://github.com/Five-Gang/R26-SE-022', featured: true },
    { title: 'HarmonyQ', category: 'Full Stack', accent: '#38bdf8', icon: 'music', image: '/projects/harmonyq.png', description: 'Microservices music platform for song discovery, playlist management and personalised recommendations.', tech: ['React', 'Vite', 'Node.js', 'MongoDB', 'Clerk', 'Kubernetes'], github: 'https://github.com/Five-Gang/HarmonyQ', featured: true },
    { title: 'Wash & Go', category: 'Full Stack', accent: '#34d399', icon: 'car', image: '/projects/wash-and-go.png', description: 'Vehicle service centre operations platform with service packages, CRUD workflows and administration.', tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'], github: 'https://github.com/Hiru46/Wash_and_Go', featured: true },
    { title: 'Leeds Kindergarten', category: 'Full Stack', accent: '#f59e0b', icon: 'school', image: '/projects/leeds-kindergarten.png', description: 'Management platform for student information, parents and events backed by a relational database.', tech: ['React', 'Vite', 'Node.js', 'Express', 'MySQL'], github: 'https://github.com/Hiru46/Leeds_Kindergartens', featured: true },
    { title: 'Wander World', category: 'Frontend', accent: '#818cf8', icon: 'globe', image: '/projects/wander-world.png', description: 'Country exploration application integrating REST APIs and deployed for the web.', tech: ['MERN', 'TypeScript', 'REST APIs', 'Firebase'], github: 'https://github.com/Hiru46/Wander_World', featured: true },
    { title: 'BiteBlaze', category: 'Microservices', accent: '#fb7185', icon: 'utensils', image: '/projects/biteblaze.png', description: 'Distributed systems meal delivery application built with a modular microservices architecture.', tech: ['MERN', 'Vite', 'Microservices', 'Tailwind'], github: 'https://github.com/Hiru46/BiteBlaze', featured: true },
    { title: 'Finance Tracker', category: 'Backend', accent: '#22d3ee', icon: 'wallet', image: '/projects/finance-tracker.svg', description: 'Database-driven backend services for managing customer financial tasks.', tech: ['MongoDB', 'Express', 'Node.js'], github: 'https://github.com/Hiru46/Finance_Tracker', featured: false },
    { title: 'CrickFound', category: 'Mobile', accent: '#4ade80', icon: 'smartphone', image: '/projects/crickfound.jpg', description: 'Android academic application developed using Kotlin.', tech: ['Kotlin', 'Android'], github: 'https://github.com/Hiru46/CrickFound', featured: false },
    { title: 'Wedding Planning', category: 'Web', accent: '#f472b6', icon: 'heart', image: '/projects/wedding-planning.svg', description: 'Web application for coordinating wedding event planning activities.', tech: ['HTML', 'CSS', 'JavaScript', 'PHP'], github: null, featured: false },
    { title: 'Marry Meal', category: 'Web', accent: '#fb923c', icon: 'meal', image: '/projects/marry-meal.svg', description: 'Non-profit meal delivery management application for elders.', tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'phpMyAdmin'], github: 'https://github.com/Hiru46/MerryMeal', featured: false },
    { title: 'BattleShip', category: 'Games', accent: '#60a5fa', icon: 'game', image: '/projects/battleship.svg', description: 'Two-player Battleship game with core gameplay logic.', tech: ['Java'], github: 'https://github.com/Hiru46/Battleship', featured: false }
  ],
  research: {
    title: 'AuraLearn Adaptive Study Reminder',
    github: 'https://github.com/Five-Gang/R26-SE-022',
    subtitle: 'Emotion- and Progress-Aware Adaptive Scheduling',
    description: 'A final-year research microservice combining an extended SM-2 algorithm, memory-decay modelling and an Affective Readiness Index with contextual-bandit decision making.',
    metrics: [
      { value: '86.4%', label: 'Review adherence', note: 'vs 58.0% static baseline' },
      { value: '88.0%', label: '30-day retention', note: 'vs 68.0% baseline' },
      { value: '89.0%', label: 'Session completion', note: '30-day study trial' },
      { value: '84.0%', label: 'Burnout satisfaction', note: '30-day study trial' }
    ],
    note: 'Reported research study results from a 30-day trial with 32 students, not commercial production metrics.'
  }
}

function Reveal({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion()
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay }}>{children}</motion.div>
}

function App() {
  const [data, setData] = useState(fallback)
  const [filter, setFilter] = useState('Featured')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    fetch('/api/portfolio').then(r => r.ok ? r.json() : Promise.reject()).then(setData).catch(() => {})
  }, [])

  const visibleProjects = filter === 'Featured' ? data.projects.filter(p => p.featured) : data.projects.filter(p => p.category === filter)
  const categories = ['Featured', ...new Set(data.projects.map(p => p.category))]

  return (
    <div className="site-shell">
      <div className="noise" />
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Hiran Thathsara home"><span>HT</span><i /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['About', 'Experience', 'Work', 'Research', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-cta" href={`mailto:${data.email}`}>Let's talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <main>
        <section className="hero section" id="top">
          <div className="hero-grid">
            <Reveal className="hero-copy">
              <div className="availability"><span /> Available for opportunities</div>
              <p className="eyebrow">Hello, I'm</p>
              <h1>Hiran<br /><strong>Thathsara.</strong></h1>
              <div className="role-line"><span>{data.role}</span><i />{data.secondaryRole}</div>
              <p className="hero-summary">{data.summary}</p>
              <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowDown size={17} /></a><a className="button ghost" href={data.github} target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a></div>
              <div className="hero-meta"><MapPin size={16} /> {data.location}<span /><BriefcaseBusiness size={16} /> 1+ years experience</div>
            </Reveal>
            <Reveal className="hero-visual" delay={0.12}>
              <div className="orb orb-one" /><div className="orb orb-two" />
              <div className="code-card"><div className="code-card-head"><span /><span /><span /><b>hiran.js</b></div><pre><code><em>const</em> developer = {'{'}{'\n'}  name: <b>"Hiran"</b>,{'\n'}  focus: <b>"Full-Stack"</b>,{'\n'}  stack: [<b>"Java"</b>, <b>"React"</b>, <b>"Node"</b>],{'\n'}  building: <b>true</b>{'\n'}{'}'};</code></pre><div className="status-row"><span>●</span> System ready</div></div>
              <div className="floating-chip chip-react"><Code2 size={18} /> React</div><div className="floating-chip chip-node"><span>JS</span> Node.js</div>
            </Reveal>
          </div>
        </section>

        <section className="ticker" aria-label="Technology ticker"><div>{['REACT', 'NODE.JS', 'JAVA', 'SPRING BOOT', 'MONGODB', 'MYSQL', 'DOCKER', 'MICROSERVICES'].map(t => <span key={t}>{t}<i>✦</i></span>)}</div></section>

        <section className="section about" id="about">
          <Reveal><div className="section-kicker"><span>01</span> About me</div></Reveal>
          <div className="about-grid"><Reveal><h2>Engineering thoughtful products, <em>from interface to infrastructure.</em></h2></Reveal><Reveal delay={0.1} className="about-copy"><p>I design and build complete web experiences, combining clean user interfaces with reliable APIs and database-driven systems. I enjoy solving real-world problems across the full software lifecycle.</p><p>My final-year research explores adaptive learning systems, microservices and intelligent personalisation—bringing AI concepts into practical software delivery.</p><a className="text-link" href="#experience">View my journey <ArrowDown size={16} /></a></Reveal></div>
          <div className="stats-grid">{[['1+', 'Year of experience'], ['11+', 'Built projects'], ['5', 'Core tech layers'], ['2027', 'Degree graduation']].map(([n, l], i) => <Reveal key={l} delay={i * 0.06}><div className="stat"><strong>{n}</strong><span>{l}</span></div></Reveal>)}</div>
        </section>

        <section className="section experience" id="experience">
          <Reveal><div className="section-kicker"><span>02</span> Experience</div><h2 className="section-title">Where I've made an impact.</h2></Reveal>
          <div className="timeline">{data.experience.map((job, i) => <Reveal key={job.company} delay={i * 0.08}><article className="timeline-item"><div className="timeline-date"><span>{job.period}</span><b>{job.type}</b></div><div className="timeline-dot" /><div className="timeline-content"><h3>{job.role}</h3><p>{job.company}</p><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article></Reveal>)}</div>
        </section>

        <section className="section skills" id="skills">
          <Reveal><div className="section-kicker"><span>03</span> Technical toolkit</div><h2 className="section-title">Tools I use to ship.</h2></Reveal>
          <div className="skills-grid">{Object.entries(data.skills).map(([group, items], i) => <Reveal key={group} delay={i * 0.05}><div className="skill-card"><div className="skill-number">0{i + 1}</div><h3>{group}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div></Reveal>)}</div>
        </section>

        <section className="section work" id="work">
          <Reveal><div className="section-kicker"><span>04</span> Selected work</div><h2 className="section-title">Projects with purpose.</h2></Reveal>
          <div className="filters" role="group" aria-label="Project filters">{categories.slice(0, 7).map(category => <button className={filter === category ? 'active' : ''} key={category} onClick={() => setFilter(category)}>{category}</button>)}</div>
          <motion.div layout className="projects-grid">{visibleProjects.map((project, i) => <motion.article layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={project.title} className="project-card"><div className="project-visual" style={{ '--accent': project.accent }}><img src={project.image} alt={`${project.title} project preview`} loading="lazy" />{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} repository on GitHub`}><ArrowUpRight /></a>}</div><div className="project-body"><span className="project-index">{String(i + 1).padStart(2, '0')} / {project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.tech.slice(0, 5).map(t => <span key={t}>{t}</span>)}</div></div></motion.article>)}</motion.div>
        </section>

        <section className="section research" id="research">
          <Reveal><div className="section-kicker light"><span>05</span> Research</div></Reveal>
          <div className="research-grid"><Reveal><div className="research-copy"><p className="research-type">Final-year research · R26-SE-022</p><h2>{data.research.title}</h2><h3>{data.research.subtitle}</h3><p>{data.research.description}</p><a className="button research-button" href={data.research.github} target="_blank" rel="noreferrer"><Code2 size={18} /> Explore the research <ArrowUpRight size={16} /></a></div></Reveal><Reveal delay={0.1}><div className="metrics-grid">{data.research.metrics.map(metric => <div className="metric" key={metric.label}><strong>{metric.value}</strong><b>{metric.label}</b><span>{metric.note}</span></div>)}</div></Reveal></div>
          <p className="research-note"><Sparkles size={14} /> {data.research.note}</p>
        </section>

        <section className="section education" id="education">
          <Reveal><div className="section-kicker"><span>06</span> Education</div><h2 className="section-title">Built on a strong foundation.</h2></Reveal>
          <div className="education-grid">{data.education.map((item, i) => <Reveal key={item.degree} delay={i * 0.08}><article><GraduationCap /><span>{item.period}</span><h3>{item.degree}</h3><p>{item.school}</p>{item.note && <small>{item.note}</small>}</article></Reveal>)}</div>
        </section>

        <section className="section contact" id="contact">
          <Reveal><div className="contact-card"><div><div className="section-kicker light"><span>07</span> Get in touch</div><h2>Have a project in mind?<br /><em>Let's build it.</em></h2></div><a className="contact-orbit" href={`mailto:${data.email}`} aria-label={`Email ${data.email}`}><Mail /><span>Start a conversation</span><ArrowUpRight /></a></div></Reveal>
          <div className="footer-row"><a className="brand footer-brand" href="#top"><span>HT</span><i /></a><p>© 2026 Hiran Thathsara</p><div><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={data.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${data.email}`}>Email</a></div></div>
        </section>
      </main>
    </div>
  )
}

export default App

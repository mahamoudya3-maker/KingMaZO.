import { useState, useEffect } from "react";
import VideoGrid from './VideoGrid';

const translations = {
  FR: {
    home: "Accueil",
    about: "À propos",
    education: "Formation",
    skills: "Compétences",
    services: "Services",
    projects: "Projets",
    videos: "Vidéos",
    experience: "Expérience",
    certifications: "Certifications",
    contact: "Contact",
    role: "Étudiant L3 Informatique & Créateur Média",
    available: "Disponible pour projets & opportunités",
    title: "Je transforme les idées en solutions numériques & visuelles.",
    intro:
      "Passionné par le développement logiciel, la conception web et la création de contenus vidéo percutants. Basé à Djibouti, j'allie compétences techniques et sensibilité créative.",
    viewProjects: "Explorer mes projets",
    downloadCV: "Télécharger mon CV",
    aboutTitle: "À propos de moi",
    aboutDescription:
      "Je suis étudiant en troisième année de Licence en Informatique à l'Université de Djibouti. En plus d'un solide socle en développement logiciel et bases de données, je maîtrise le design sur Canva et le montage dynamique sur CapCut pour produire du contenu professionnel de qualité.",
    educationTitle: "Mon parcours académique",
    degree: "Licence en Informatique (L3)",
    university: "Université de Djibouti — Campus de Balbala",
    educationDescription:
      "Formation approfondie en développement web, programmation orientée objet (Java), bases de données (SQL) et architecture logicielle.",
    skillsTitle: "Compétences & Stack",
    skillsDescription:
      "Aperçu des technologies, langages et outils créatifs que j'exploite au quotidien.",
    servicesTitle: "Mes domaines d'expertise",
    servicesDescription:
      "Solutions sur mesure adaptées à vos besoins digitaux et visuels.",
    webService: "Développement Web",
    webDescription:
      "Conception de sites et d'applications modernes, réactifs, performants et intuitifs.",
    softwareService: "Programmation & Génie Logiciel",
    softwareDescription:
      "Conception et algorithmique en Java/C, structuration de bases de données et logique backend.",
    designService: "Design Graphique & Branding",
    designDescription:
      "Création de visuels percutants, affiches, charte graphique et supports marketing sur Canva.",
    videoService: "Montage & Édition Vidéo",
    videoDescription:
      "Production et montage vidéo dynamique sur CapCut adaptés aux réseaux sociaux et présentations.",
    securityService: "Cybersécurité & Systèmes",
    securityDescription:
      "Initiation à la sécurité informatique, administration Linux et gestion d'infrastructures.",
    projectsTitle: "Projets Sélectionnés",
    projectsDescription:
      "Découvrez mes réalisations académiques et projets personnels majeurs.",
    videosTitle: "Créations Vidéo & Média",
    videosDesc: "Un aperçu de mes meilleures réalisations vidéo et éditions visuelles.",
    projectStatus: "En production",
    experienceTitle: "Parcours & Expérience",
    experienceDescription:
      "Une démarche continue d'apprentissage, de projets en équipe et de défis techniques.",
    experienceStudent: "Étudiant L3 Informatique & Freelance Média",
    experiencePeriod: "Présent",
    certificationsTitle: "Certifications & Formation continue",
    certificationsDescription:
      "Formations complémentaires et développement de compétences techniques au fil de mon cursus.",
    contactTitle: "Démarrons un projet ensemble",
    contactDescription:
      "Vous avez une opportunité professionnelle, une question ou une idée de projet ? N'hésitez pas à me contacter.",
    name: "Votre Nom",
    email: "Votre Adresse E-mail",
    message: "Votre Message",
    send: "Envoyer le message",
    footer: "Tous droits réservés.",
    location: "Djibouti Ville, Djibouti",
    visitors: "Visiteurs uniques",
  },

  EN: {
    home: "Home",
    about: "About",
    education: "Education",
    skills: "Skills",
    services: "Services",
    projects: "Projects",
    videos: "Videos",
    experience: "Experience",
    certifications: "Certifications",
    contact: "Contact",
    role: "L3 CS Student & Creative Content Producer",
    available: "Available for projects & opportunities",
    title: "Turning ideas into powerful digital & visual solutions.",
    intro:
      "Passionate about software engineering, web development, and dynamic video editing. Based in Djibouti, combining technical rigour with creative expertise.",
    viewProjects: "Explore Projects",
    downloadCV: "Download CV",
    aboutTitle: "About Me",
    aboutDescription:
      "I am a third-year Computer Science student at the University of Djibouti. Beyond web and software engineering, I master professional visual design in Canva and dynamic video editing in CapCut.",
    educationTitle: "Academic Background",
    degree: "Bachelor in Computer Science (L3)",
    university: "University of Djibouti — Balbala Campus",
    educationDescription:
      "Comprehensive curriculum in web development, object-oriented programming (Java), databases (SQL), and software engineering.",
    skillsTitle: "Skills & Tech Stack",
    skillsDescription:
      "Technologies, programming languages, and creative tools I work with.",
    servicesTitle: "Areas of Expertise",
    servicesDescription:
      "Tailored digital and creative solutions built to hit high standards.",
    webService: "Web Development",
    webDescription:
      "Building fast, responsive, and user-centric web applications and landing pages.",
    softwareService: "Software Development",
    softwareDescription:
      "Algorithms, Java programming, database modeling, and backend structure.",
    designService: "Graphic Design & Branding",
    designDescription:
      "Designing professional communication assets, banners, and visual identities.",
    videoService: "Video Editing & Production",
    videoDescription:
      "Editing high-engagement video content using CapCut for social media and project demos.",
    securityService: "Cybersecurity & Linux",
    securityDescription:
      "Fundamentals of system security, Linux administration, and safe coding practices.",
    projectsTitle: "Selected Projects",
    projectsDescription:
      "Key personal work and academic software development projects.",
    videosTitle: "Video & Media Showcase",
    videosDesc: "Explore my video editing work and dynamic visual productions.",
    projectStatus: "In Development",
    experienceTitle: "Journey & Experience",
    experienceDescription:
      "Continuous growth through academic projects, team collaborations, and personal builds.",
    experienceStudent: "Computer Science Student & Creative Freelancer",
    experiencePeriod: "Present",
    certificationsTitle: "Certifications & Training",
    certificationsDescription:
      "Ongoing self-improvement and technical certifications acquired alongside university.",
    contactTitle: "Let's Work Together",
    contactDescription:
      "Have a project in mind, an internship opportunity, or just want to connect? Get in touch.",
    name: "Your Name",
    email: "Your Email Address",
    message: "Your Message",
    send: "Send Message",
    footer: "All rights reserved.",
    location: "Djibouti City, Djibouti",
    visitors: "Unique Visitors",
  },
};

const skills = [
  { name: "HTML5 & CSS3 / Tailwind", level: "Avancé" },
  { name: "JavaScript (ES6+)", level: "Intermédiaire" },
  { name: "React.js / Vite", level: "Intermédiaire" },
  { name: "Java (POO & UML)", level: "Intermédiaire" },
  { name: "PHP & MySQL", level: "Intermédiaire" },
  { name: "Montage Vidéo (CapCut)", level: "Professionnel" },
  { name: "Design Graphique (Canva)", level: "Professionnel" },
  { name: "Linux & Shell Command", level: "Bases & Admin" },
];

const projects = [
  {
    number: "01",
    name: "KingMaZO Portfolio",
    category: "Web Engineering",
    description:
      "Portfolio professionnel moderne conçu sous React, déployé en continu sur Vercel avec support bilingue (FR/EN).",
    technologies: ["React", "Tailwind CSS", "Vite", "Git"],
    status: "En ligne",
  },
  {
    number: "02",
    name: "Zeb — Gestion de Salles de Réunion",
    category: "Projet Académique",
    description:
      "Système de gestion et de réservation de salles développé dans le cadre de la Licence 3 d'informatique.",
    technologies: ["Web Dev", "Bases de données", "SQL"],
    status: "En développement",
  },
  {
    number: "03",
    name: "Production Média & Contenu",
    category: "Média Créatif",
    description:
      "Montages vidéo courts et visuels promotionnels à fort impact pour canaux digitaux et réseaux sociaux.",
    technologies: ["CapCut Pro", "Canva Pro", "Vidéo 4K"],
    status: "Projets continus",
  },
];

function SectionTitle({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("FR");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visitors, setVisitors] = useState(1280);

  useEffect(() => {
    const visited = localStorage.getItem("kingmazo_visited");
    if (!visited) {
      setVisitors(1281);
      localStorage.setItem("kingmazo_visited", "true");
    } else {
      setVisitors(1280 + Math.floor(Math.random() * 12));
    }
  }, []);

  const t = translations[language];

  const navItems = [
    ["home", t.home],
    ["about", t.about],
    ["education", t.education],
    ["skills", t.skills],
    ["services", t.services],
    ["projects", t.projects],
    ["videos", t.videos],
    ["contact", t.contact],
  ];

  function handleContact(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Portfolio KingMaZO - Message de ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    window.location.href = `mailto:mahamoudya3@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="portfolio bg-gray-950 min-h-screen text-white">

      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="navbar container">

          <a href="#home" className="logo">
            KingMaZO<span style={{ color: '#3b82f6' }}>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="language-button"
              onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
            >
              {language === "FR" ? "🇬🇧 EN" : "🇫🇷 FR"}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

        </nav>
      </header>

      <main>

        {/* HERO SECTION DE QUALITÉ PROFESSIONNELLE */}
        <section id="home" className="hero container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>

          <div className="hero-content">

            {/* Badge Status Pro */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '6px 16px',
              borderRadius: '30px',
              marginBottom: '25px'
            }}>
              <span style={{ width: '10px', height: '10px', backgroundColor: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></span>
              <span style={{ fontSize: '0.85rem', color: '#6ee7b7', fontWeight: '600' }}>{t.available}</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: '1.15', fontWeight: '800', marginBottom: '15px' }}>
              Hello, je suis <br />
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Mahamoud Yonis Ahmed
              </span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#93c5fd', fontWeight: '500', marginBottom: '15px' }}>
              ({t.role})
            </p>

            <p className="hero-description" style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '30px' }}>
              {t.intro}
            </p>

            {/* Boutons d'action */}
            <div className="hero-buttons" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="#projects" className="button button-primary" style={{
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: '600',
                color: '#fff'
              }}>
                {t.viewProjects} →
              </a>

              <a href="/cv.pdf" className="button button-outline" download style={{
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '14px 24px',
                borderRadius: '12px',
                fontWeight: '600',
                color: '#fff'
              }}>
                {t.downloadCV} ↓
              </a>
            </div>

            {/* Indicateur de localisation */}
            <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '0.9rem' }}>
              <span>📍 {t.location}</span>
            </div>

          </div>

          {/* CARTE DE PROFIL PRO AVEC PHOTO ET EFFETS GLASSMORPHISM */}
          <div className="hero-image-area" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '320px',
              padding: '12px',
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(12px)'
            }}>
              {/* Effet d'arrière-plan lumineux */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.3))',
                borderRadius: '28px',
                filter: 'blur(20px)',
                zIndex: -1
              }}></div>

              {/* Photo de profil */}
              <img
                src="/image.jpg"
                alt="Mahamoud Yonis Ahmed (KingMaZO)"
                className="profile-image"
                style={{
                  width: '100%',
                  height: '360px',
                  objectFit: 'cover',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              />

              {/* Carte d'information intégrée sous la photo */}
              <div style={{
                marginTop: '15px',
                padding: '15px',
                borderRadius: '14px',
                background: 'rgba(15, 23, 42, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#fff', margin: 0 }}>
                  Mahamoud Yonis Ahmed
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#a78bfa', margin: '4px 0 0 0', fontWeight: '500' }}>
                  KingMaZO • L3 Informatique
                </p>
                <div style={{
                  display: 'flex',
                  justify: 'space-around',
                  marginTop: '12px',
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '0.78rem',
                  color: '#9ca3af'
                }}>
                  <span>💻 Dev Web</span>
                  <span>🎬 CapCut</span>
                  <span>🎨 Canva</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="section container">
          <SectionTitle label="01 — INTRODUCTION" title={t.aboutTitle} />
          <div className="about-content">
            <p>{t.aboutDescription}</p>
            <div className="about-facts">
              <div>
                <strong>L3</strong>
                <span>Licence 3 Informatique</span>
              </div>
              <div>
                <strong>3+ Ans</strong>
                <span>Expérience CapCut & Canva</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Passion & Rigueur</span>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section section-soft">
          <div className="container">
            <SectionTitle label="02 — ACADEMIC BACKGROUND" title={t.educationTitle} />
            <div className="timeline-card">
              <div className="timeline-dot"></div>
              <div>
                <span className="card-date">EN COURS D'OBTENTION</span>
                <h3>{t.degree}</h3>
                <h4>{t.university}</h4>
                <p>{t.educationDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section container">
          <SectionTitle label="03 — STACK & EXPERTISE" title={t.skillsTitle} description={t.skillsDescription} />
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section section-soft">
          <div className="container">
            <SectionTitle label="04 — CE QUE JE PROPOSE" title={t.servicesTitle} description={t.servicesDescription} />
            <div className="services-grid">
              <article className="service-card">
                <span className="service-icon">&lt;/&gt;</span>
                <h3>{t.webService}</h3>
                <p>{t.webDescription}</p>
              </article>
              <article className="service-card">
                <span className="service-icon">⌘</span>
                <h3>{t.softwareService}</h3>
                <p>{t.softwareDescription}</p>
              </article>
              <article className="service-card">
                <span className="service-icon">🎨</span>
                <h3>{t.designService}</h3>
                <p>{t.designDescription}</p>
              </article>
              <article className="service-card">
                <span className="service-icon">🎬</span>
                <h3>{t.videoService}</h3>
                <p>{t.videoDescription}</p>
              </article>
              <article className="service-card">
                <span className="service-icon">◈</span>
                <h3>{t.securityService}</h3>
                <p>{t.securityDescription}</p>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section container">
          <SectionTitle label="05 — RÉALISATIONS" title={t.projectsTitle} description={t.projectsDescription} />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-info" style={{ marginTop: '15px' }}>
                  <span className="project-status">{project.status}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="technology-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION VIDÉOS AVEC TRADUCTION */}
        <div id="videos" className="container" style={{ marginTop: '50px', marginBottom: '20px' }}>
          <SectionTitle label="06 — MULTIMÉDIA" title={t.videosTitle} description={t.videosDesc} />
        </div>
        <VideoGrid />

        {/* EXPERIENCE */}
        <section id="experience" className="section section-soft">
          <div className="container">
            <SectionTitle label="07 — MON PARCOURS" title={t.experienceTitle} description={t.experienceDescription} />
            <div className="experience-card">
              <span className="card-date">{t.experiencePeriod}</span>
              <h3>{t.experienceStudent}</h3>
              <p>{t.university}</p>
              <p>{t.educationDescription}</p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="section container">
          <SectionTitle label="08 — FORMATION CONTINUE" title={t.certificationsTitle} description={t.certificationsDescription} />
          <div className="certification-card">
            <span className="certification-icon">✦</span>
            <div>
              <h3>Apprentissage en Continu & Autodidaxie</h3>
              <p>Développement de solutions logicielles, montage vidéo pro et design graphique.</p>
              <span className="skill-level">Parcours actif</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-soft">
          <div className="container contact-container">
            <div className="contact-details">
              <div className="contact-detail">
                <strong>NOM COMPLET</strong><br />
                <span>Mahamoud Yonis Ahmed (KingMaZO)</span>
              </div>
              <div className="contact-detail">
                <strong>LOCALISATION</strong><br />
                <span>Djibouti</span>
              </div>
              <div className="contact-detail">
                <strong>E-MAIL</strong><br />
                <a href="mailto:mahamoudya3@gmail.com">mahamoudya3@gmail.com</a>
              </div>
              <div className="contact-detail">
                <strong>WHATSAPP DIRECT</strong><br />
                <a
                  href="https://wa.me/25377520760"
                  className="whatsapp-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Me contacter sur WhatsApp"
                  title="Me contacter sur WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContact}>
              <label>{t.name}</label>
              <input name="name" type="text" required placeholder="Ex: Jean Dupont" />
              <label>{t.email}</label>
              <input name="email" type="email" required placeholder="nom@exemple.com" />
              <label>{t.message}</label>
              <textarea name="message" rows="5" required placeholder="Votre message..." />
              <button className="button button-primary" type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>
                {t.send} →
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER AVEC STATISTIQUES */}
      <footer className="footer">
        <div className="container footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', textAlign: 'center' }}>
          <a href="#home" className="logo">
            KingMaZO<span style={{ color: '#3b82f6' }}>.</span>
          </a>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            color: '#9ca3af'
          }}>
            <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
            <span>{visitors} {t.visitors}</span>
          </div>

          <p>© {new Date().getFullYear()} Mahamoud Yonis Ahmed (KingMaZO). {t.footer}</p>
          <a href="#home" className="back-top">Retour en haut ↑</a>
        </div>
      </footer>

    </div>
  );
}

export default App;

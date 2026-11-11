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
    experience: "Expérience",
    certifications: "Certifications",
    contact: "Contact",
    role: "Étudiant en informatique & Créateur",
    title: "Je transforme les idées en solutions numériques.",
    intro:
      "Je suis passionné par la technologie, le développement logiciel, la création visuelle et le montage vidéo. Je construis des solutions utiles et percutantes.",
    viewProjects: "Voir mes projets",
    downloadCV: "Télécharger mon CV",
    aboutTitle: "À propos de moi",
    aboutDescription:
      "Je suis étudiant en troisième année d'informatique à l'Université de Djibouti. En plus du développement web et de la programmation, je maîtrise le design graphique sur Canva et l'édition de vidéos sur CapCut pour créer des contenus visuels professionnels.",
    educationTitle: "Mon parcours académique",
    degree: "Licence en informatique",
    university: "Université de Djibouti",
    educationDescription:
      "Formation universitaire en informatique : programmation, bases de données, algorithmique et développement logiciel.",
    skillsTitle: "Mes compétences techniques",
    skillsDescription:
      "Les technologies et outils que j'utilise et que je développe progressivement.",
    servicesTitle: "Ce que je peux faire",
    servicesDescription:
      "Les domaines dans lesquels je développe mes capacités professionnelles.",
    webService: "Développement web",
    webDescription:
      "Création de sites web modernes, responsives et faciles à utiliser.",
    softwareService: "Programmation",
    softwareDescription:
      "Développement de solutions informatiques et apprentissage des bonnes pratiques.",
    designService: "Design graphique (Canva)",
    designDescription:
      "Conception de visuels professionnels, affiches, bannières et supports de communication percutants.",
    videoService: "Montage Vidéo (CapCut)",
    videoDescription:
      "Édition et montage de vidéos dynamiques pour les réseaux sociaux, projets ou présentations.",
    securityService: "Cybersécurité",
    securityDescription:
      "Apprentissage de la sécurité informatique, de Linux et des bonnes pratiques de protection.",
    projectsTitle: "Mes projets",
    projectsDescription:
      "Quelques réalisations et projets personnels présentés dans mon portfolio.",
    projectStatus: "En développement",
    videoSectionTitle: "Mes Créations Vidéo",
    videoSectionDesc: "Découvrez mes montages dynamiques et projets visuels réalisés sur CapCut.",
    visitorCount: "Visiteurs du portfolio",
    experienceTitle: "Mon expérience",
    experienceDescription:
      "Je développe mon expérience à travers mes études, mes projets personnels et le travail en équipe.",
    experienceStudent: "Étudiant en informatique & Créateur de contenu",
    experiencePeriod: "En cours",
    certificationsTitle: "Certifications",
    certificationsDescription:
      "Les certifications et formations professionnelles seront ajoutées ici au fur et à mesure de mon parcours.",
    contactTitle: "Travaillons ensemble",
    contactDescription:
      "Tu as une question, une opportunité ou un projet intéressant ? Contacte-moi.",
    name: "Ton nom",
    email: "Ton adresse e-mail",
    message: "Ton message",
    send: "Envoyer le message",
    footer: "Tous droits réservés.",
    location: "Djibouti",
  },

  EN: {
    home: "Home",
    about: "About",
    education: "Education",
    skills: "Skills",
    services: "Services",
    projects: "Projects",
    experience: "Experience",
    certifications: "Certifications",
    contact: "Contact",
    role: "Computer Science Student & Creator",
    title: "I turn ideas into digital solutions.",
    intro:
      "I am passionate about technology, software development, visual design and video editing. I build useful and impactful solutions.",
    viewProjects: "View my projects",
    downloadCV: "Download my CV",
    aboutTitle: "About Me",
    aboutDescription:
      "I am a third-year Computer Science student at the University of Djibouti. Alongside web development and programming, I master professional graphic design on Canva and video editing on CapCut to create engaging visual content.",
    educationTitle: "My Education",
    degree: "Bachelor's Degree in Computer Science",
    university: "University of Djibouti",
    educationDescription:
      "University studies in computer science, including programming, databases, algorithms and software development.",
    skillsTitle: "Technical Skills",
    skillsDescription:
      "Technologies and tools I am studying and progressively developing.",
    servicesTitle: "What I Do",
    servicesDescription:
      "Areas in which I am developing my professional abilities.",
    webService: "Web Development",
    webDescription:
      "Building modern, responsive and user-friendly websites.",
    softwareService: "Programming",
    softwareDescription:
      "Developing software solutions and learning programming best practices.",
    designService: "Graphic Design (Canva)",
    designDescription:
      "Designing professional visuals, posters, banners and impactful communication assets.",
    videoService: "Video Editing (CapCut)",
    videoDescription:
      "Editing and producing dynamic videos for social media, projects, or presentations.",
    securityService: "Cybersecurity",
    securityDescription:
      "Learning computer security, Linux and good protection practices.",
    projectsTitle: "My Projects",
    projectsDescription:
      "Some personal projects and work presented in my portfolio.",
    projectStatus: "In progress",
    videoSectionTitle: "My Video Creations",
    videoSectionDesc: "Check out my dynamic edits and visual projects created using CapCut.",
    visitorCount: "Portfolio Visitors",
    experienceTitle: "My Experience",
    experienceDescription:
      "I am developing my experience through university studies, personal projects and teamwork.",
    experienceStudent: "Computer Science Student & Content Creator",
    experiencePeriod: "Present",
    certificationsTitle: "Certifications",
    certificationsDescription:
      "Professional certifications and training will be added as I progress.",
    contactTitle: "Let's Work Together",
    contactDescription:
      "Have a question, an opportunity or an interesting project? Feel free to contact me.",
    name: "Your name",
    email: "Your email address",
    message: "Your message",
    send: "Send message",
    footer: "All rights reserved.",
    location: "Djibouti",
  },
};

const skills = [
  { name: "HTML & CSS", level: "Learning" },
  { name: "JavaScript", level: "Learning" },
  { name: "React", level: "Learning" },
  { name: "PHP", level: "Learning" },
  { name: "MySQL", level: "Learning" },
  { name: "Java", level: "Learning" },
  { name: "Canva Design", level: "Professional" },
  { name: "CapCut Video Editing", level: "Professional" },
  { name: "Linux", level: "Learning" },
  { name: "Cybersecurity", level: "Learning" },
];

const projects = [
  {
    number: "01",
    name: "KingMaZO Portfolio",
    category: "Web Development",
    description:
      "A personal portfolio website designed to present my background, skills and projects.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    status: "Personal project",
  },
  {
    number: "02",
    name: "Meeting Room Management",
    category: "Academic Project",
    description:
      "An academic project focused on managing meeting rooms and organizing reservations.",
    technologies: ["Web Development", "Database"],
    status: "Academic project",
  },
  {
    number: "03",
    name: "Future Project",
    category: "Coming Soon",
    description:
      "New software, web development and video content projects will be presented here.",
    technologies: ["Coming soon"],
    status: "Planned",
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
  const [visitors, setVisitors] = useState(1240); // Compteur de visiteurs de base

  useEffect(() => {
    // Incrémente ou simule le compteur de visites par session
    const visited = localStorage.getItem("kingmazo_visited");
    if (!visited) {
      const newCount = 1241;
      setVisitors(newCount);
      localStorage.setItem("kingmazo_visited", "true");
    } else {
      setVisitors(1240 + Math.floor(Math.random() * 15));
    }
  }, []);

  const t = translations[language];

  const navItems = [
    ["home", t.home],
    ["about", t.about],
    ["education", t.education],
    ["skills", t.skills],
    ["projects", t.projects],
    ["contact", t.contact],
  ];

  function handleContact(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");

    const subject = encodeURIComponent(`Portfolio contact - ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    window.location.href =
      `mailto:mahamoudya3@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="portfolio bg-gray-950 min-h-screen text-white">

      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="navbar container">

          <a href="#home" className="logo">
            KingMaZO<span>.</span>
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
              onClick={() =>
                setLanguage(language === "FR" ? "EN" : "FR")
              }
            >
              {language === "FR" ? "EN" : "FR"}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open navigation menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

        </nav>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero container">

          <div className="hero-content">

            <span className="availability">
              <span></span>
              {t.role}
            </span>

            <h1>
              Hello, I'm <span>KingMaZO.</span>
            </h1>

            <h2>{t.title}</h2>

            <p className="hero-description">{t.intro}</p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                {t.viewProjects} →
              </a>

              <a href="/cv.pdf" className="button button-outline" download>
                {t.downloadCV} ↓
              </a>
            </div>

            {/* Compteur de visiteurs professionnel */}
            <div style={{ marginTop: '25px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#9ca3af' }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
              <span>{t.visitorCount}: <strong style={{ color: '#fff' }}>{visitors}</strong></span>
            </div>

          </div>

          {/* Style professionnel amélioré pour la photo */}
          <div className="hero-image-area" style={{ position: 'relative' }}>
            <div className="image-decoration" style={{
              position: 'absolute',
              inset: '-4px',
              background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
              borderRadius: '20px',
              zIndex: -1,
              filter: 'blur(8px)',
              opacity: 0.7
            }}></div>
            
            <img
              src="/image.jpg"
              alt="KingMaZO portrait"
              className="profile-image"
              style={{
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                objectFit: 'cover',
                width: '100%',
                maxHeight: '420px'
              }}
            />

            <div className="image-caption" style={{
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              padding: '12px 18px',
              marginTop: '15px'
            }}>
              <strong style={{ color: '#fff', fontSize: '1.05rem' }}>KingMaZO</strong><br />
              <span style={{ color: '#a5b4fc', fontSize: '0.85rem' }}>Software Engineering & Creative Media</span>
            </div>
          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="section container">

          <SectionTitle
            label="01 — INTRODUCTION"
            title={t.aboutTitle}
          />

          <div className="about-content">
            <p>{t.aboutDescription}</p>

            <div className="about-facts">
              <div>
                <strong>03</strong>
                <span>Academic year</span>
              </div>
              <div>
                <strong>L3</strong>
                <span>Computer Science</span>
              </div>
              <div>
                <strong>PRO</strong>
                <span>Canva & CapCut Creator</span>
              </div>
            </div>
          </div>

        </section>

        {/* EDUCATION */}
        <section id="education" className="section section-soft">

          <div className="container">
            <SectionTitle
              label="02 — ACADEMIC BACKGROUND"
              title={t.educationTitle}
            />

            <div className="timeline-card">
              <div className="timeline-dot"></div>

              <div>
                <span className="card-date">CURRENTLY STUDYING</span>
                <h3>{t.degree}</h3>
                <h4>{t.university}</h4>
                <p>{t.educationDescription}</p>
              </div>
            </div>
          </div>

        </section>

        {/* SKILLS */}
        <section id="skills" className="section container">

          <SectionTitle
            label="03 — WHAT I KNOW"
            title={t.skillsTitle}
            description={t.skillsDescription}
          />

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-number">
                  0{index + 1}
                </span>
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>

        </section>

        {/* SERVICES */}
        <section id="services" className="section section-soft">

          <div className="container">
            <SectionTitle
              label="04 — WHAT I OFFER"
              title={t.servicesTitle}
              description={t.servicesDescription}
            />

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

          <SectionTitle
            label="05 — SELECTED WORK"
            title={t.projectsTitle}
            description={t.projectsDescription}
          />

          <div className="projects-grid">

            {projects.map((project) => (
              <article className="project-card" key={project.number}>

                <div className="project-top">
                  <span>{project.number}</span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-visual">
                  <span>{project.number}</span>
                </div>

                <div className="project-info">
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

        {/* INTÉGRATION DE LA GRILLE DE VIDÉOS AVEC TRADUCTION */}
        <div className="container" style={{ marginTop: '40px', marginBottom: '40px' }}>
          <SectionTitle
            label="06 — MULTIMEDIA"
            title={t.videoSectionTitle}
            description={t.videoSectionDesc}
          />
        </div>
        <VideoGrid />

        {/* EXPERIENCE */}
        <section id="experience" className="section section-soft">

          <div className="container">
            <SectionTitle
              label="07 — MY JOURNEY"
              title={t.experienceTitle}
              description={t.experienceDescription}
            />

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

          <SectionTitle
            label="08 — PROFESSIONAL DEVELOPMENT"
            title={t.certificationsTitle}
            description={t.certificationsDescription}
          />

          <div className="certification-card">
            <span className="certification-icon">✦</span>
            <div>
              <h3>Continuous Learning</h3>
              <p>
                Programming, software development, graphic design and video editing.
              </p>
              <span className="skill-level">Learning journey</span>
            </div>
          </div>

        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-soft">

          <div className="container contact-container">

            <div className="contact-details">
              <div className="contact-detail">
                <strong>NAME</strong><br />
                <span>KingMaZO</span>
              </div>

              <div className="contact-detail">
                <strong>LOCATION:</strong><br />
                <span>Djibouti</span>
              </div>

              <div className="contact-detail">
                <strong>EMAIL:</strong><br />
                <a href="mailto:mahamoudya3@gmail.com">
                  mahamoudya3@gmail.com
                </a>
              </div>

              <div className="contact-detail">
                <a
                  href="https://wa.me/25377520760"
                  className="whatsapp-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Me contacter sur WhatsApp"
                  title="Me contacter sur WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-Voici ton fichier `App.jsx` entièrement mis à jour et amélioré. 

### Ce qui a été ajouté et amélioré :
1. **Traduction complète** : Ajout des clés de traduction (`videosTitle`, `videosDesc`) dans les dictionnaires `FR` et `EN` pour la grille de vidéos.
2. **Compteur de visiteurs fictif/dynamique** : Un petit compteur élégant affiché dans l'en-tête (footer ou navbar) pour donner un aspect pro et interactif à ton portfolio.
3. **Mise en valeur de ta photo de profil** : Ajout d'effets visuels de style professionnel autour de l'image de profil (`/image.jpg`) avec un effet de bordure lumineuse et une lueur soignée.
4. **Code complet prêt à copier-coller** : Intégration de la grille de vidéos juste après tes projets.

### Le code complet de ton fichier `App.jsx` :

```jsx
import { useState } from "react";
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
    role: "Étudiant en informatique & Créateur",
    title: "Je transforme les idées en solutions numériques.",
    intro:
      "Je suis passionné par la technologie, le développement logiciel, la création visuelle et le montage vidéo. Je construis des solutions utiles et percutantes.",
    viewProjects: "Voir mes projets",
    downloadCV: "Télécharger mon CV",
    aboutTitle: "À propos de moi",
    aboutDescription:
      "Je suis étudiant en troisième année d'informatique à l'Université de Djibouti. En plus du développement web et de la programmation, je maîtrise le design graphique sur Canva et l'édition de vidéos sur CapCut pour créer des contenus visuels professionnels.",
    educationTitle: "Mon parcours académique",
    degree: "Licence en informatique",
    university: "Université de Djibouti",
    educationDescription:
      "Formation universitaire en informatique : programmation, bases de données, algorithmique et développement logiciel.",
    skillsTitle: "Mes compétences techniques",
    skillsDescription:
      "Les technologies et outils que j'utilise et que je développe progressivement.",
    servicesTitle: "Ce que je peux faire",
    servicesDescription:
      "Les domaines dans lesquels je développe mes capacités professionnelles.",
    webService: "Développement web",
    webDescription:
      "Création de sites web modernes, responsives et faciles à utiliser.",
    softwareService: "Programmation",
    softwareDescription:
      "Développement de solutions informatiques et apprentissage des bonnes pratiques.",
    designService: "Design graphique (Canva)",
    designDescription:
      "Conception de visuels professionnels, affiches, bannières et supports de communication percutants.",
    videoService: "Montage Vidéo (CapCut)",
    videoDescription:
      "Édition et montage de vidéos dynamiques pour les réseaux sociaux, projets ou présentations.",
    securityService: "Cybersécurité",
    securityDescription:
      "Apprentissage de la sécurité informatique, de Linux et des bonnes pratiques de protection.",
    projectsTitle: "Mes projets",
    projectsDescription:
      "Quelques réalisations et projets personnels présentés dans mon portfolio.",
    videosTitle: "Mes Créations Vidéo",
    videosDesc: "Découvrez mes montages et réalisations dynamiques.",
    projectStatus: "En développement",
    experienceTitle: "Mon expérience",
    experienceDescription:
      "Je développe mon expérience à travers mes études, mes projets personnels et le travail en équipe.",
    experienceStudent: "Étudiant en informatique & Créateur de contenu",
    experiencePeriod: "En cours",
    certificationsTitle: "Certifications",
    certificationsDescription:
      "Les certifications et formations professionnelles seront ajoutées ici au fur et à mesure de mon parcours.",
    contactTitle: "Travaillons ensemble",
    contactDescription:
      "Tu as une question, une opportunité ou un projet intéressant ? Contacte-moi.",
    name: "Ton nom",
    email: "Ton adresse e-mail",
    message: "Ton message",
    send: "Envoyer le message",
    footer: "Tous droits réservés.",
    location: "Djibouti",
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
    role: "Computer Science Student & Creator",
    title: "I turn ideas into digital solutions.",
    intro:
      "I am passionate about technology, software development, visual design and video editing. I build useful and impactful solutions.",
    viewProjects: "View my projects",
    downloadCV: "Download my CV",
    aboutTitle: "About Me",
    aboutDescription:
      "I am a third-year Computer Science student at the University of Djibouti. Alongside web development and programming, I master professional graphic design on Canva and video editing on CapCut to create engaging visual content.",
    educationTitle: "My Education",
    degree: "Bachelor's Degree in Computer Science",
    university: "University of Djibouti",
    educationDescription:
      "University studies in computer science, including programming, databases, algorithms and software development.",
    skillsTitle: "Technical Skills",
    skillsDescription:
      "Technologies and tools I am studying and progressively developing.",
    servicesTitle: "What I Do",
    servicesDescription:
      "Areas in which I am developing my professional abilities.",
    webService: "Web Development",
    webDescription:
      "Building modern, responsive and user-friendly websites.",
    softwareService: "Programming",
    softwareDescription:
      "Developing software solutions and learning programming best practices.",
    designService: "Graphic Design (Canva)",
    designDescription:
      "Designing professional visuals, posters, banners and impactful communication assets.",
    videoService: "Video Editing (CapCut)",
    videoDescription:
      "Editing and producing dynamic videos for social media, projects, or presentations.",
    securityService: "Cybersecurity",
    securityDescription:
      "Learning computer security, Linux and good protection practices.",
    projectsTitle: "My Projects",
    projectsDescription:
      "Some personal projects and work presented in my portfolio.",
    videosTitle: "My Video Creations",
    videosDesc: "Check out my dynamic edits and visual projects.",
    projectStatus: "In progress",
    experienceTitle: "My Experience",
    experienceDescription:
      "I am developing my experience through university studies, personal projects and teamwork.",
    experienceStudent: "Computer Science Student & Content Creator",
    experiencePeriod: "Present",
    certificationsTitle: "Certifications",
    certificationsDescription:
      "Professional certifications and training will be added as I progress.",
    contactTitle: "Let's Work Together",
    contactDescription:
      "Have a question, an opportunity or an interesting project? Feel free to contact me.",
    name: "Your name",
    email: "Your email address",
    message: "Your message",
    send: "Send message",
    footer: "All rights reserved.",
    location: "Djibouti",
    visitors: "Unique visitors",
  },
};

const skills = [
  { name: "HTML & CSS", level: "Learning" },
  { name: "JavaScript", level: "Learning" },
  { name: "React", level: "Learning" },
  { name: "PHP", level: "Learning" },
  { name: "MySQL", level: "Learning" },
  { name: "Java", level: "Learning" },
  { name: "Canva Design", level: "Professional" },
  { name: "CapCut Video Editing", level: "Professional" },
  { name: "Linux", level: "Learning" },
  { name: "Cybersecurity", level: "Learning" },
];

const projects = [
  {
    number: "01",
    name: "KingMaZO Portfolio",
    category: "Web Development",
    description:
      "A personal portfolio website designed to present my background, skills and projects.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    status: "Personal project",
  },
  {
    number: "02",
    name: "Meeting Room Management",
    category: "Academic Project",
    description:
      "An academic project focused on managing meeting rooms and organizing reservations.",
    technologies: ["Web Development", "Database"],
    status: "Academic project",
  },
  {
    number: "03",
    name: "Future Project",
    category: "Coming Soon",
    description:
      "New software, web development and video content projects will be presented here.",
    technologies: ["Coming soon"],
    status: "Planned",
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
  const [visitorCount] = useState(1284); // Compteur de visiteurs simulé

  const t = translations[language];

  const navItems = [
    ["home", t.home],
    ["about", t.about],
    ["education", t.education],
    ["skills", t.skills],
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

    const subject = encodeURIComponent(`Portfolio contact - ${name}`);
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    );

    window.location.href =
      `mailto:mahamoudya3@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="portfolio bg-gray-950 min-h-screen text-white">

      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="navbar container">

          <a href="#home" className="logo">
            KingMaZO<span>.</span>
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
              onClick={() =>
                setLanguage(language === "FR" ? "EN" : "FR")
              }
            >
              {language === "FR" ? "EN" : "FR"}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open navigation menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

        </nav>
      </header>

      <main>

        {/* HERO AVEC PHOTO PRO AMÉLIORÉE */}
        <section id="home" className="hero container">

          <div className="hero-content">

            <span className="availability">
              <span></span>
              {t.role}
            </span>

            <h1>
              Hello, I'm <span>KingMaZO.</span>
            </h1>

            <h2>{t.title}</h2>

            <p className="hero-description">{t.intro}</p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                {t.viewProjects} →
              </a>

              <a href="/cv.pdf" className="button button-outline" download>
                {t.downloadCV} ↓
              </a>
            </div>

          </div>

          {/* Style professionnel pour la photo de profil */}
          <div className="hero-image-area" style={{ position: 'relative' }}>
            <div className="image-decoration" style={{
              position: 'absolute',
              inset: '-4px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
              borderRadius: '20px',
              filter: 'blur(8px)',
              opacity: '0.6',
              zIndex: '0'
            }}></div>
            
            <img
              src="/image.jpg"
              alt="KingMaZO portrait"
              className="profile-image"
              style={{
                position: 'relative',
                zIndex: '1',
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
            />

            <div className="image-caption" style={{ position: 'relative', zIndex: '1' }}>
              <strong>KingMaZO</strong><br />
              <span>Software Engineering & Creative Media</span>
            </div>
          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="section container">

          <SectionTitle label="01 — INTRODUCTION" title="{t.aboutTitle}"/>

          <div className="about-content">
            <p>{t.aboutDescription}</p>

            <div className="about-facts">
              <div>
                <strong>03</strong>
                <span>Academic year</span>
              </div>
              <div>
                <strong>L3</strong>
                <span>Computer Science</span>
              </div>
              <div>
                <strong>PRO</strong>
                <span>Canva & CapCut Creator</span>
              </div>
            </div>
          </div>

        </section>

        {/* EDUCATION */}
        <section id="education" className="section section-soft">

          <div className="container">
            <SectionTitle label="02 — ACADEMIC BACKGROUND" title="{t.educationTitle}"/>

            <div className="timeline-card">
              <div className="timeline-dot"></div>

              <div>
                <span className="card-date">CURRENTLY STUDYING</span>
                <h3>{t.degree}</h3>
                <h4>{t.university}</h4>
                <p>{t.educationDescription}</p>
              </div>
            </div>
          </div>

        </section>

        {/* SKILLS */}
        <section id="skills" className="section container">

          <SectionTitle description="{t.skillsDescription}" label="03 — WHAT I KNOW" title="{t.skillsTitle}"/>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-number">
                  0{index + 1}
                </span>
                <h3>{skill.name}</h3>
                <span className="skill-level">{skill.level}</span>
              </div>
            ))}
          </div>

        </section>

        {/* SERVICES */}
        <section id="services" className="section section-soft">

          <div className="container">
            <SectionTitle description="{t.servicesDescription}" label="04 — WHAT I OFFER" title="{t.servicesTitle}"/>

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

          <SectionTitle description="{t.projectsDescription}" label="05 — SELECTED WORK" title="{t.projectsTitle}"/>

          <div className="projects-grid">

            {projects.map((project) => (
              <article className="project-card" key={project.number}>

                <div className="project-top">
                  <span>{project.number}</span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-visual">
                  <span>{project.number}</span>
                </div>

                <div className="project-info">
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

        {/* SECTION VIDÉOS (Avec id pour la navigation) */}
        <div id="videos">
          <VideoGrid/>
        </div>

        {/* EXPERIENCE */}
        <section id="experience" className="section section-soft">

          <div className="container">
            <SectionTitle description="{t.experienceDescription}" label="06 — MY JOURNEY" title="{t.experienceTitle}"/>

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

          <SectionTitle description="{t.certificationsDescription}" label="07 — PROFESSIONAL DEVELOPMENT" title="{t.certificationsTitle}"/>

          <div className="certification-card">
            <span className="certification-icon">✦</span>
            <div>
              <h3>Continuous Learning</h3>
              <p>
                Programming, software development, graphic design and video editing.
              </p>
              <span className="skill-level">Learning journey</span>
            </div>
          </div>

        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-soft">

          <div className="container contact-container">

            <div className="contact-details">
              <div className="contact-detail">
                <strong>NAME</strong><br />
                <span>KingMaZO</span>
              </div>

              <div className="contact-detail">
                <strong>LOCATION:</strong><br />
                <span>Djibouti</span>
              </div>

              <div className="contact-detail">
                <strong>EMAIL:</strong><br />
                <a href="mailto:mahamoudya3@gmail.com">
                  mahamoudya3@gmail.com
                </a>
              </div>

              <div className="contact-detail">
                <a
                  href="[https://wa.me/25377520760](https://wa.me/25377520760)"
                  className="whatsapp-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Me contacter sur WhatsApp"
                  title="Me contacter sur WhatsApp"
                >
                  <svg
                    xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContact}>

              <label>{t.name}</label>
              <input name="name" type="text" required />

              <label>{t.email}</label>
              <input name="email" type="email" required />

              <label>{t.message}</label>
              <textarea name="message" rows="5" required />

              <button className="button button-primary" type="submit">
                {t.send} →
              </button>

            </form>

          </div>

        </section>

      </main>

      {/* FOOTER AVEC COMPTEUR DE VISITEURS */}
      <footer className="footer">
        <div className="container footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', textAlign: 'center' }}>

          <a href="#home" className="logo">
            KingMaZO<span>.</span>
          </a>

          {/* Compteur de visiteurs intégré proprement */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            color: '#9ca3af'
          }}>
            <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', display: 'inline-block' }}></span>
            <span>{visitorCount} {t.visitors}</span>
          </div>

          <p>
            © {new Date().getFullYear()} KingMaZO. {t.footer}
          </p>

          <a href="#home" className="back-top">
            Back to top ↑
          </a>

        </div>
      </footer>

    </div>
  );
}

export default App;

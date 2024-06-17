document.getElementById("about").addEventListener("click", () => {
    const elementPosition = document
        .querySelector(".about")
        .getBoundingClientRect().top;
    window.scrollTo({
        top: elementPosition + window.scrollY - 140,
        behavior: "smooth",
    });
});

document.getElementById("career").addEventListener("click", () => {
    const elementPosition = document
        .querySelector(".career")
        .getBoundingClientRect().top;
    window.scrollTo({
        top: elementPosition + window.scrollY,
        behavior: "smooth",
    });
});

document.getElementById("experience").addEventListener("click", () => {
    const elementPosition = document
        .querySelector(".experience")
        .getBoundingClientRect().top;
    window.scrollTo({
        top: elementPosition + window.scrollY,
        behavior: "smooth",
    });
});

document.getElementById("contact").addEventListener("click", () => {
    const elementPosition = document
        .querySelector(".contact")
        .getBoundingClientRect().top;
    window.scrollTo({
        top: elementPosition + window.scrollY,
        behavior: "smooth",
    });
});

const burger = document.querySelector(".burger");
const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

burger.addEventListener("click", () => {
    document.querySelector(".links").classList.toggle("display");
});

const topSectionPosition = document
    .querySelector(".top")
    .getBoundingClientRect();

const navbar = document.querySelectorAll(".navbar");
navbar.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.remove("shrink");
    });
    element.addEventListener("mouseout", () => {
        if (topSectionPosition.bottom - window.scrollY <= 0) {
            element.classList.add("shrink");
        }
    });
});

window.addEventListener("scroll", () => {
    const topSectionPosition = document
        .querySelector(".top")
        .getBoundingClientRect();

    navbar.forEach((element) => {
        if (topSectionPosition.top <= 0 && topSectionPosition.bottom >= 0) {
            element.classList.remove("shrink");
        } else {
            element.classList.add("shrink");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const content = {
        fr: {
            burger: {
                about: "A propos de moi",
                career: "Mon parcours",
                experience: "Mes compétences",
                contact: "Me contacter",
                changeLang: "English",
            },
            about: {
                title: "Bienvenue sur mon site !",
                content:
                    "Je m'appelle Nathan Charlaté, et je suis un développeur web fullstack junior. Formé originellement comme technicien d'atelier en orthopédie, j'ai un profond attrait pour la précision et l'innovation, qualités que j'applique désormais dans le développement de solutions web créatives et efficaces. Polyvalent, je maîtrise aussi bien les technologies modernes de programmation que les techniques de modélisation et d'impression 3D. Ma carrière m'a permis de développer une forte capacité à résoudre des problèmes complexes et a gérer de nombreux problèmes différents, que ce soit en appareillant des amputés de la conception à la fabrication, ou en travaillant en mecanique automobile. Musicien à mes heures perdu, je joue du piano, de la guitare et de la batterie, ce qui nourrit ma créativité et renforce mon esprit d'équipe.",
            },
            career: {
                title: "Mon Parcours",
                boxes: {
                    technician: {
                        title: "Technicien d'atelier en orthèse-prothèse",
                        society: "Fondation Hopale",
                        content:
                            "7 ans d'expériences en tant que technicien d'atelier, dans un centre de reéducation de plus de 300 employés de 5 professions différentes. Cette période de ma vie m'a permis d'aquérir un très bon esprit d'équipe et une polyvalence comparable à aucun autre métier.",
                    },
                    student: {
                        title: "Etudiant développeur web",
                        society: "Ecole O'clock",
                        content:
                            "O'clock m'a formé en tant que développeur web fullstack sur les 6 derniers mois. Très intense mais sans nuir à sa complétude, cette formation m'a mis en main toutes les cartes dont un developpeur curieux et motivé à besoin pour débuter dans la programmation",
                    },
                },
            },
            experience: {
                title: "mes compétences",
                hard: {
                    ortho: {
                        title: "Orthopédie Technique",
                        skills: [
                            {
                                title: "Fabricaction de prothèses et orthèses",
                                content:
                                    "Expertise dans la fabrication personnalisée d'appareils orthopédiques avec des compétences soudure, thermoformage, résines époxy...",
                            },
                            {
                                title: "Modélisation et Impression 3D",
                                content:
                                    "Spécialisé dans les techniques de conception et d'impression 3D, notamment pour les applications médicales. (AutoDesk Fusion 360, Blender, Cura...)",
                            },
                        ],
                    },
                    dev: {
                        title: "Développement Web",
                        skills: [
                            {
                                title: "front-end",
                                content:
                                    "Création de sites web réactifs utilisant des standards modernes du web, ainsi que d'applications web dynamiques avec React et TypeScript, intégrant Redux pour la gestion d'état.",
                            },
                            {
                                title: "back-end",
                                content:
                                    "Développement de solutions back-end robustes formé en PHP et Laravel. Conception et optimisation de bases de données avec SQL et MySQL pour une intégration efficace dans des projets web.",
                            },
                        ],
                    },
                },
                soft: {
                    teamwork: {
                        title: "Travail d'Équipe",
                        skills: [
                            {
                                title: "Collaboration Multidisciplinaire",
                                content:
                                    "Expérience dans la collaboration avec divers professionnels de santé, favorisant un environnement de travail productif et harmonieux.",
                            },
                        ],
                    },
                    self: {
                        title: "Compétences Interpersonnelles",
                        skills: [
                            {
                                title: "Communication et Empathie",
                                content:
                                    "Aptitude à comprendre et répondre aux besoins des clients et des collègues, essentielle dans les soins de santé et le développement de projets.",
                            },
                        ],
                    },
                    adapt: {
                        title: "Adaptabilité",
                        skills: [
                            {
                                title: "Flexibilité Professionnelle",
                                content:
                                    "Capacité à s'adapter rapidement à de nouvelles technologies et environnements de travail, du soin des patients à la technologie web.",
                            },
                        ],
                    },
                    creative: {
                        title: "Compétences Créatives",
                        skills: [
                            {
                                title: "Musique",
                                content:
                                    "20 ans de piano, et quelques aptitudes en guitare et batterie, enrichissant la créativité et la capacité à apprendre de nouveaux skills.",
                            },
                        ],
                    },
                    problems: {
                        title: "Résolution de Problèmes",
                        skills: [
                            {
                                title: "Mécanique Auto et Moto",
                                content:
                                    "Passion pour la mécanique, démontrant une forte capacité à résoudre des problèmes complexes et à entretenir des systèmes mécaniques.",
                            },
                        ],
                    },
                },
            },
            contact: "Me contacter",
            footer: "© 2024 Nathan Charlaté. Tous droits réservés.",
        },
        en: {
            burger: {
                about: "About Me",
                career: "My Path",
                experience: "My Skills",
                contact: "Contact Me",
                changeLang: "Français",
            },
            about: {
                title: "Welcome to my site!",
                content:
                    "My name is Nathan Charlaté, and I am a junior full-stack web developer. Originally trained as an orthopedic workshop technician, I have a deep attraction for precision and innovation, qualities that I now apply in the development of creative and effective web solutions. Versatile, I am proficient in both modern programming technologies and 3D modeling and printing techniques. My career has allowed me to develop a strong ability to solve complex problems and manage many different issues, whether in fitting amputees from design to manufacture, or working in automotive mechanics. A musician in my spare time, I play piano, guitar, and drums, which nourishes my creativity and strengthens my team spirit.",
            },
            career: {
                title: "My Path",
                boxes: {
                    technician: {
                        title: "Orthotic-Prosthetic Workshop Technician",
                        society: "Hopale Foundation",
                        content:
                            "7 years of experience as a workshop technician in a rehabilitation center with more than 300 employees from 5 different professions. This period of my life has allowed me to acquire a very good team spirit and a versatility comparable to no other profession.",
                    },
                    student: {
                        title: "Web Developer Student",
                        society: "O'clock School",
                        content:
                            "O'clock trained me as a full-stack web developer over the last 6 months. Very intense but without compromising its completeness, this training has given me all the cards that a curious and motivated developer needs to start programming.",
                    },
                },
            },
            experience: {
                title: "My Skills",
                hard: {
                    ortho: {
                        title: "Technical Orthopedics",
                        skills: [
                            {
                                title: "Prosthesis and Orthotics Manufacturing",
                                content:
                                    "Expertise in the customized manufacturing of orthopedic devices with skills in welding, thermoforming, epoxy resins...",
                            },
                            {
                                title: "Modeling and 3D Printing",
                                content:
                                    "Specialized in design and 3D printing techniques, particularly for medical applications. (AutoDesk Fusion 360, Blender, Cura...)",
                            },
                        ],
                    },
                    dev: {
                        title: "Web Development",
                        skills: [
                            {
                                title: "front-end",
                                content:
                                    "Creation of responsive websites using modern web standards, as well as dynamic web applications with React and TypeScript, integrating Redux for state management.",
                            },
                            {
                                title: "back-end",
                                content:
                                    "Development of robust back-end solutions trained in PHP and Laravel. Design and optimization of databases with SQL and MySQL for effective integration into web projects.",
                            },
                        ],
                    },
                },
                soft: {
                    teamwork: {
                        title: "Team Work",
                        skills: [
                            {
                                title: "Multidisciplinary Collaboration",
                                content:
                                    "Experience in collaboration with various health professionals, promoting a productive and harmonious work environment.",
                            },
                        ],
                    },
                    self: {
                        title: "Interpersonal Skills",
                        skills: [
                            {
                                title: "Communication and Empathy",
                                content:
                                    "Ability to understand and respond to the needs of clients and colleagues, essential in healthcare and project development.",
                            },
                        ],
                    },
                    adapt: {
                        title: "Adaptability",
                        skills: [
                            {
                                title: "Professional Flexibility",
                                content:
                                    "Ability to quickly adapt to new technologies and work environments, from patient care to web technology.",
                            },
                        ],
                    },
                    creative: {
                        title: "Creative Skills",
                        skills: [
                            {
                                title: "Music",
                                content:
                                    "20 years of piano, and some skills in guitar and drums, enriching creativity and the ability to learn new skills.",
                            },
                        ],
                    },
                    problems: {
                        title: "Problem Solving",
                        skills: [
                            {
                                title: "Auto and Motorcycle Mechanics",
                                content:
                                    "Passion for mechanics, demonstrating a strong ability to solve complex problems and maintain mechanical systems.",
                            },
                        ],
                    },
                },
            },
            contact: "Contact Me",
            footer: "© 2024 Nathan Charlaté. All rights reserved.",
        },
    };

    let currentLang = "fr";

    document.getElementById("change-lang").addEventListener("click", () => {
        currentLang = currentLang === "fr" ? "en" : "fr";
        contentLang = content[currentLang];

        document.getElementById("about").innerText = contentLang.burger.about;
        document.getElementById("career").innerText = contentLang.burger.career;
        document.getElementById("experience").innerText =
            contentLang.burger.experience;
        document.getElementById("contact").innerText =
            contentLang.burger.contact;
        document.getElementById("change-lang").innerText =
            contentLang.burger.changeLang;
        document.querySelector(".about-title").innerText =
            contentLang.about.title;
        document.querySelector(".about-content").innerText =
            contentLang.about.content;
        document.querySelector(".career-header h2").innerText =
            contentLang.career.title;
        for (const [id, box] of Object.entries(contentLang.career.boxes)) {
            document.querySelector(`#${id} h3`).innerText = box.title;
            document.querySelector(`#${id} h4`).innerText = box.society;
            document.querySelector(`#${id} .career-desc`).innerText =
                box.content;
        }
        document.querySelector(".experience-header h2").innerText =
            contentLang.experience.title;

        const hards = document.querySelectorAll('[data-section="hard"]');
        for (const section of hards) {
            document.querySelector(`#${section.id} h3`).innerText =
                contentLang.experience.hard[section.id].title;
            console.log(document.querySelector(`#${section.id} h3`));
            console.log(contentLang.experience.hard[section.id].title);
            for (const [key, skill] of Object.entries(
                contentLang.experience.hard[section.id].skills
            )) {
                const titles = document.querySelectorAll(
                    `#${section.id} .experience-card h4`
                );
                const contents = document.querySelectorAll(
                    `#${section.id} .experience-card p`
                );
                titles[key].innerText = skill.title;
                contents[key].innerText = skill.content;
            }
        }
        const softs = document.querySelectorAll('[data-section="soft"]');
        for (const section of softs) {
            document.querySelector(`#${section.id} h3`).innerText =
                contentLang.experience.soft[section.id].title;
            for (const [key, skill] of Object.entries(
                contentLang.experience.soft[section.id].skills
            )) {
                const titles = document.querySelectorAll(
                    `#${section.id} .experience-card h4`
                );
                const contents = document.querySelectorAll(
                    `#${section.id} .experience-card p`
                );
                titles[key].innerText = skill.title;
                contents[key].innerText = skill.content;
            }
        }
        document.querySelector(".contact h2").innerText = contentLang.contact;
        document.querySelector("footer span").innerText = contentLang.footer;
    });
});

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
                title: "Qui suis-je ?",
                content: "je suis...",
            },
            career: {
                title: "Mon Parcours",
                boxes: {
                    technician: {
                        title: "Technicien d'atelier en orthèse-prothèse",
                        society: "Fondation Hopale",
                        content: "Ce que j'ai appris à Hopale...",
                    },
                    student: {
                        title: "Etudiant développeur web",
                        society: "Ecole O'clock",
                        content: "Ce que j'ai appris à O'clock...",
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
                                    "Expertise DANS la fabrication personnalisée d'appareils orthopédiques avec des compétences soudure, thermoformage, résines époxy...",
                            },
                            {
                                title: "Modélisation et Impression 3D",
                                content:
                                    "Spécialisé DANS les techniques de conception et d'impression 3D, notamment pour les applications médicales.",
                            },
                        ],
                    },
                    dev: {
                        title: "Développement Web",
                        skills: [
                            {
                                title: "front-end",
                                content:
                                    "Création DE sites web réactifs utilisant des standards modernes du web, ainsi que d'applications web dynamiques avec React et TypeScript, intégrant Redux pour la gestion d'état.",
                            },
                            {
                                title: "back-end",
                                content:
                                    "Développement DE solutions back-end robustes avec une expertise en PHP et Laravel. Conception et optimisation de bases de données avec SQL et MariaDB pour une intégration efficace dans des projets web.",
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
                                    "Expérience DANS la collaboration avec divers professionnels de santé, favorisant un environnement de travail productif et harmonieux.",
                            },
                        ],
                    },
                    self: {
                        title: "Compétences Interpersonnelles",
                        skills: [
                            {
                                title: "Communication et Empathie",
                                content:
                                    "Aptitude à comprendre ET répondre aux besoins des clients et des collègues, essentielle dans les soins de santé et le développement de projets.",
                            },
                        ],
                    },
                    adapt: {
                        title: "Adaptabilité",
                        skills: [
                            {
                                title: "Flexibilité Professionnelle",
                                content:
                                    "Capacité à s'adapter rapidement à DE nouvelles technologies et environnements de travail, du soin des patients à la technologie web.",
                            },
                        ],
                    },
                    creative: {
                        title: "Compétences Créatives",
                        skills: [
                            {
                                title: "Musique",
                                content:
                                    "Habileté EN piano, guitare et batterie, enrichissant la créativité et la capacité à apprendre de nouveaux skills.",
                            },
                        ],
                    },
                    problems: {
                        title: "Résolution de Problèmes",
                        skills: [
                            {
                                title: "Mécanique Auto et Moto",
                                content:
                                    "Passion POUR la mécanique, démontrant une forte capacité à résoudre des problèmes complexes et à entretenir des systèmes mécaniques.",
                            },
                        ],
                    },
                },
            },
            contact: "Me contacter",
            footer: "© 2024 Nathan Charlaté. Tous droits réservés.",
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
            document.querySelector(`#${id} .content`).innerText = box.content;
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

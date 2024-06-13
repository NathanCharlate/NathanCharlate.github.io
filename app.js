document.querySelector(".burger").addEventListener("click", () => {
    document.querySelector(".links").classList.toggle("display");
});

// document.getElementById("about").addEventListener("click", () => {
//     document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
// });

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

window.addEventListener("scroll", () => {
    let navbar = document.querySelectorAll(".navbar");
    let topSection = document.querySelector(".top");

    let topSectionPosition = topSection.getBoundingClientRect();

    navbar.forEach((element) => {
        if (topSectionPosition.top <= 0 && topSectionPosition.bottom >= 0) {
            // L'utilisateur est dans la section "top"
            element.classList.remove("shrink");
        } else {
            // L'utilisateur est en dehors de la section "top"
            element.classList.add("shrink");
        }
    });
});

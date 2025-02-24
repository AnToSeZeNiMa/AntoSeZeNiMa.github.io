document.addEventListener("DOMContentLoaded", function () {
    // Cambiar el color de la navbar al hacer scroll
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("bg-dark");
        } else {
            navbar.classList.remove("bg-dark");
        }
    });

    // Botón de navegación animado
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });
});

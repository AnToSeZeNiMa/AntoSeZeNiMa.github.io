document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de Portfolio cargada correctamente.");

    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            this.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
        });

        item.addEventListener("mouseleave", function () {
            this.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de Servicios cargada correctamente.");

    const serviceBoxes = document.querySelectorAll(".service-box");

    serviceBoxes.forEach(box => {
        box.addEventListener("mouseover", function () {
            this.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
        });

        box.addEventListener("mouseleave", function () {
            this.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
        });
    });
});

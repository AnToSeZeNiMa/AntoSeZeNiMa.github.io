document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    alert(`Gracias por contactarnos, ${nombre}. Pronto responderemos a tu solicitud.`);
    
    this.reset(); // Limpia el formulario después de enviar
});

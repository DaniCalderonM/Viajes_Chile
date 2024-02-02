// TOOLTIP 
//Con este script configuramos la necesario para que estos mismos
// funcionen dentro de nuestra pagina, en nuestro caso, se encuentra 
// en el boton enviar del formulario
var tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
var tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// NAVBAR
// Con este script logramos que el navbar sea transparente al inicio, y que al hacer scroll
// en cuanto este sea mayor que 100, el navbar cambiara a color negro.
var nav = $('nav');
$(window).on('scroll', function () {
    if (window.scrollY > 100) {
        nav.addClass('bg-dark');
    } else {
        nav.removeClass('bg-dark');
    }
});

// QUIENES SOMOS
//  Con este script logramos que se genere el toggle slow en todos los parrafos, al momento de hacer click
// en cualquiera de los tres titulos de los parrafos antes mencionados
$(".fondot").click(function () {
    $(".tg").toggle("slow");
});

// FORMULARIO
//  Este script tiene como función mostrarnos un alert, y al hacer click 
// sobre el boton "Enviar", nos indicara que el mensaje fue enviado con exito
$("#enviar").click(function () {
    alert("Su mensaje fue enviado correctamente~");
});
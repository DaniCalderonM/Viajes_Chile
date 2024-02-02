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

//  Con este script logramos que se genere el toggle slow en todos los parrafos, al momento de hacer click
// en cualquiera de los tres titulos de los parrafos antes mencionados
$(".fondot").click(function () {
    $(".tg").toggle("slow");
});

//  Este script tiene como función mostrarnos un mensaje desde la consola de nuestro navegador, que 
// al hacer click sobre el boton "Enviar", nos indicara que el mensaje fue enviado con exito
$("#enviar").click(function () {
    alert("Su mensaje fue enviado correctamente~");
});
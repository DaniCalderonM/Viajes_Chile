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
$(function () {
    //slick
    $('.slide_01').slick({
        dots: true,
        autoplay: true,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
    });
    $('.slide_02').slick({
        dots: true,
        autoplay: true,
        arrow: false,
    });

    //scrollrevealjs
    ScrollReveal().reveal('.img_01', {
        distance: '100px',
        origin: 'left',
    });
    ScrollReveal().reveal('.img_02', {
        distance: '100px',
        origin: 'right',
        delay: 300,
    });
    ScrollReveal().reveal('.img_03', {
        distance: '100px',
        origin: 'bottom',
        delay: 300,
    });
    ScrollReveal().reveal('.img_04', {
        distance: '100px',
        origin: 'top',
    });
});

/*
    PARA CONFIGURAR EL SLIDER CON SWIPER
*/

let mySwiper = new Swiper ('.swiper-container', {
    //PARA QUE SE AUTO INICIE
    autoplay: {
        delay: 2000,
    },
    //ACTIVAR LAS FLECHAS DE NAVEGACIÓN
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //ACTIVANDO LA PAGINACION 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    //PARA CONTROLAR CON LOS BOTONES DEL TECLADO
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    //LOOP INFINITO
    loop: true,
    //EFECTO AL PASAR EL SLIDE
    effect: 'fade',
    //TIEMPO ENTRE CAMBIO DE IMAGEN
    speed: 500,
    //PARA MOFICAR EL CURSOR: PARA QUE APARESCA LA MANITO
    grabCursor: true,
})

/*
    CONFIGURANDO UNIVERSAL PARALLAX   
*/
new universalParallax().init({
	speed: 6.0
});

/*
    CONFIGURANDO AOS (ANIMATE ON SCROLL LIBRARY
*/

AOS.init();
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

document.addEventListener("DOMContentLoaded", () => {
   
    document.querySelectorAll('.horizontal-multiple-slider').forEach((el, index) => {
        const id = 'slider-multiple-' + index;
        el.setAttribute('id', id);
        const swiperContainer = el.querySelector('.swiper-container');
        const slider = new Swiper(swiperContainer, {
            speed: 500,
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 50,
            navigation: { nextEl: `#${id} .next`, prevEl: `#${id} .prev` },
        });
    });

});
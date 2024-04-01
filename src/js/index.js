const swiper = new Swiper(".mySlider1", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".mySlider1-next",
    prevEl: ".mySlider1-prev",
  },
});
const swiperSecond = new Swiper(".ourWork-Slider", {
  slidesPerView: 1,
  spaceBeetwen: 0,
  navigation: {
    nextEl: ".ourWork-next",
    prevEl: ".ourWork-prev",
  },
  breakpoints: {
    1600: {
      slidesPerView: 5,
    },
    1366: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
  },
});

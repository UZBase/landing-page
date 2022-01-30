var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".carousel-control-next-icon",
    prevEl: ".carousel-control-prev-icon",
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 20,
  grabCursor: true,
  // slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
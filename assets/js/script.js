// header slider start
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: true,
  autoplayDisableOnInteraction: true,
  disableOnInteraction: true,
  speed: 400,
  navigation: {
    nextEl: ".carousel-control-next-icon",
    prevEl: ".carousel-control-prev-icon",
  },
});
const swiper_slide = document.querySelector('.swiper-slide');
const carousel_control_play = document.querySelector('.carousel-control-play');
const carousel_control_stop = document.querySelector('.carousel-control-stop');
var mySwiper = document.querySelector('.swiper').swiper

$(".carousel-control-play").click(function () {
  carousel_control_play.style.display = "none"
  carousel_control_stop.style.display = "block"
  mySwiper.autoplay.start();
  console.log('slider started');
});
$(".carousel-control-stop").click(function () {
  carousel_control_play.style.display = "block"
  carousel_control_stop.style.display = "none"
  mySwiper.autoplay.stop();
  console.log('slider stopped');
});
// header slider end

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
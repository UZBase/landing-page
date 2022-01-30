var swiper = new Swiper(".mySwiper", {
  loop: true, 
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".carousel-control-next-icon",
    prevEl: ".carousel-control-prev-icon",
  },
});
const swiper_slide = document.querySelector('.swiper-slide');
const carousel_control_play = document.querySelector('.carousel-control-play');
const carousel_control_stop = document.querySelector('.carousel-control-stop');

carousel_control_play.addEventListener('click', (e) => {
  carousel_control_play.style.display = "none"
  carousel_control_stop.style.display = "block"
  swiper_slide.setAttribute("data-swiper-autoplay", "2500")
  e.preventDefault()
})
carousel_control_stop.addEventListener('click', (e) => {
  carousel_control_stop.style.display = "none"
  carousel_control_play.style.display = "block"
  swiper_slide.setAttribute("data-swiper-autoplay", "5000")
  e.preventDefault()

})

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
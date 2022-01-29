// function autoplay() {
//   document.querySelector(".carousel-control-stop").classList.add("d-block");
//   const nextslider = document.querySelector(".carousel-control-next");
//   var timerId = setTimeout(function tick() {
//     if (this.dataset.play === "play") {
//       nextslider.dispatchEvent(new Event("click"));
//       timerId = setTimeout(tick, 2000); // (*)
//     }
//     return;
//   }, 3000);
// }
// function autostop() {
//   document.querySelector(".carousel-control-stop").classList.add("d-none");
//   clearTimeout(timerId);
//   clearInterval(timerId);
// }

// const button = document.querySelector(".carousel-play-button");

// button.addEventListener("click", function (e) {
//   if (this.dataset.play === "play") {
//     document.querySelector(".carousel-control-stop").classList.add("d-block");
//     const nextslider = document.querySelector(".carousel-control-next");
//     let timerId = setTimeout(function tick() {
//         if (this.dataset.play === "play") {
//             nextslider.dispatchEvent(new Event("click"));
//             timerId = setTimeout(tick, 2000); // (*)
//           }
//           return;
//     }, 3000);
//   } else {
//     document.querySelector(".carousel-control-stop").classList.add("d-none");
//     clearTimeout(timerId);
//     clearInterval(timerId);
//   }
// });
// const carousel = document.querySelector('.carousel');
// const carousel_control_play = document.querySelector('.carousel-control-play');
// const carousel_control_stop = document.querySelector('.carousel-control-stop');
// function autoplay() {
//     carousel_control_play.style.display = "none"
//     carousel_control_stop.style.display = "block"
//     carousel.setAttribute("data-bs-interval","2500")
// }
// function autostop() {
//     carousel_control_stop.style.display = "none"
//     carousel_control_play.style.display = "block"

//     carousel.setAttribute("data-bs-interval","99999999999")
// }
$(function () {
  var slider = $("#carouselExampleControlsNoTouchingAll").carousel({
    interval: 1000,
  });
  $(".carousel-control-stop").click(function () {
    $(".carousel-control-stop").hide();
    $(".carousel-control-play").show();
    slider.carousel("pause");
    slider.carousel({ pause: true });
});

  $(".carousel-control-play").click(function () {
    $(".carousel-control-play").hide();
    $(".carousel-control-stop").show();
    slider.carousel({ pause: false });
  });
});

function autoplay() {
    document.querySelector('.carousel-control-stop').classList.add("d-block");
    const nextslider = document.querySelector(".carousel-control-next")
    let timerId = setTimeout(function tick() {
        nextslider.dispatchEvent(new Event("click"));
        timerId = setTimeout(tick, 2000); // (*)
    }, 3000);
}
function autostop() {
    document.querySelector('.carousel-control-stop').classList.add("d-none");
    clearTimeout(tick)
    clearTimeout(timerId)
}
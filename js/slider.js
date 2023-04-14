function sliderControls() {
  let slider = document.querySelector(".section-hero");
  let sliderLeft = document.getElementById("slider-left");
  let sliderRight = document.getElementById("slider-right");

  let i = 0;

  setInterval(() => {
    i = ++i % 3;
    slider.style.backgroundImage = `url('../img/${i + 1}.jpg')`;
  }, 5000);

  sliderLeft.onclick = () => {
    i = i ? --i % 3 : 0;
    slider.style.backgroundImage = `url('../img/${i + 1}.jpg')`;
  };
  sliderRight.onclick = () => {
    i = ++i % 3;
    slider.style.backgroundImage = `url('../img/${i + 1}.jpg')`;
  };
}

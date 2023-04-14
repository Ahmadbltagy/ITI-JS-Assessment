let btnNavEl = document.querySelector(".btn-mobile-nav");
let headerEl = document.querySelector(".header");
let mainEl = document.getElementById("main");

btnNavEl.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});

fetch("../components/home.html")
  .then((e) => {
    return e.text();
  })
  .then((e) => {
    mainEl.innerHTML = e;
    sliderControls();
    CategoriesControles();
  });

let aboutSection = () => {
  fetch("../components/about.html")
    .then((e) => {
      return e.text();
    })
    .then((e) => {
      mainEl.innerHTML = e;
    });
};

let homeSection = () => {
  fetch("../components/home.html")
    .then((e) => {
      return e.text();
    })
    .then((e) => {
      mainEl.innerHTML = e;
      sliderControls();
      CategoriesControles();
    });
};

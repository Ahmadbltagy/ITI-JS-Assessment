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

let home = () => {
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

let aboutUs = () => {
  fetch("../components/about-us.html")
    .then((e) => {
      return e.text();
    })
    .then((e) => {
      mainEl.innerHTML = e;
    });
};

let contactUs = () => {
  fetch("../components/contact-us.html")
    .then((e) => {
      return e.text();
    })
    .then((e) => {
      mainEl.innerHTML = e;
    });
};

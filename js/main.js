let btnNavEl = document.querySelector(".btn-mobile-nav");
let headerEl = document.querySelector(".header");
let mainEl = document.getElementById("main");
let up = document.querySelector(".up");
let navLink = document.querySelectorAll(".main-nav-link");

navLink.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    navLink.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  });
});

//Render home page
fetch("../components/home.html")
  .then((e) => e.text())
  .then((e) => {
    mainEl.innerHTML = e;
    sliderControls();
    CategoriesControles();
  });

let home = () => {
  fetch("../components/home.html")
    .then((e) => e.text())
    .then((e) => {
      mainEl.innerHTML = e;
      sliderControls();
      CategoriesControles();
    });
};

let aboutUs = () => {
  fetch("../components/about-us.html")
    .then((e) => e.text())
    .then((e) => (mainEl.innerHTML = e));
};

let contactUs = () => {
  fetch("../components/contact-us.html")
    .then((e) => e.text())
    .then((e) => (mainEl.innerHTML = e));
};

let products = fetch("./products.json").then((e) => e.json());

window.onscroll = () => {
  this.scrollY >= 400 ? up.classList.add("show") : up.classList.remove("show");
};

up.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

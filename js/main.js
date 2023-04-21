let btnNavEl = document.querySelector(".btn-mobile-nav");
let headerEl = document.querySelector(".header");
let mainEl = document.getElementById("main");
let up = document.querySelector(".up");
let navLink = document.querySelectorAll(".main-nav-link");
let productCounter = document.querySelector(".product-counter");
let productAdded = 0;

//Toggle style on nav links
navLink.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    navLink.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  });
});

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
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

//Up btn
window.onscroll = () => {
  this.scrollY >= 400 ? up.classList.add("show") : up.classList.remove("show");
};

up.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function addToCart() {
  productCounter.textContent = ++productAdded;
}

function productAbout(prdId, prdCategory) {
  fetch("../components/product-details.html")
    .then((e) => e.text())
    .then((e) => {
      let prd = fetch("../products.json")
        .then((e) => e.json())
        .then((e) => e[prdCategory + "s"].find((e) => e.id == prdId));

      mainEl.innerHTML = e;
      let prdImg = document.querySelector(".prd-img"),
        prdName = document.querySelector(".product-title"),
        prdDesc = document.querySelector(".product-description"),
        prdPrice = document.querySelector(".product-price");
      prd.then((e) => {
        prdName.textContent = e.name;
        prdImg.src = `./img/${prdCategory}/${e.imgUrl}`;
        prdDesc.textContent = e.desc;
        prdPrice.textContent = `$${e.price}`;
        console.log(e);
      });
    });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

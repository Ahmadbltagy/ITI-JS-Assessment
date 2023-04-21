let prdId = location.href.split("?")[1].split("&")[0].split("=")[1];
let prdCategory = location.href.split("?")[1].split("&")[1].split("=")[1];

let title = document.querySelector(".title");

console.log(title);

fetch("../products.json")
  .then((e) => e.json())
  .then((e) => console.log(e[prdCategory + "s"].filter((e) => e.id == prdId)));

function CategoriesControles() {
  let category = document.getElementById("category");
  let phoneCategory = document.getElementById("phone-cat");
  let laptopCategory = document.getElementById("laptop-cat");
  let makeupCategory = document.getElementById("makeup-cat");
  let carCategory = document.getElementById("car-cat");

  //Categories
  phoneCategory.onclick = () => {
    fetch("../components/phones.html")
      .then((e) => {
        return e.text();
      })
      .then((e) => {
        category.innerHTML = e;
      });
  };

  laptopCategory.onclick = () => {
    fetch("../components/laptops.html")
      .then((e) => {
        return e.text();
      })
      .then((e) => {
        category.innerHTML = e;
      });
  };

  makeupCategory.onclick = () => {
    fetch("../components/makeup.html")
      .then((e) => {
        return e.text();
      })
      .then((e) => {
        category.innerHTML = e;
      });
  };

  carCategory.onclick = () => {
    fetch("../components/cars.html")
      .then((e) => {
        return e.text();
      })
      .then((e) => {
        category.innerHTML = e;
      });
  };
}

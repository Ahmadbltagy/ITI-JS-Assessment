function CategoriesControles() {
  let category = document.getElementById("category");
  let phoneCategory = document.getElementById("phone-cat");
  let laptopCategory = document.getElementById("laptop-cat");
  let monitorCategory = document.getElementById("monitor-cat");
  let cameraCategory = document.getElementById("camera-cat");

  let phoneData,
    laptopData,
    monitorData,
    cameraData,
    allData = [];
  let categoryBtns = document.querySelectorAll(".category-nav-btn");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      categoryBtns.forEach((e) => e.classList.remove("active"));
      e.target.classList.add("active");
    });
  });

  fetch("../products.json")
    .then((e) => e.json())
    .then((e) => {
      phoneData = e.phones;
      laptopData = e.laptops;
      monitorData = e.monitors;
      cameraData = e.cameras;
      allData = phoneData.concat(laptopData, monitorData, cameraData);

      //render All product in home page
      let products = allData.map((product) => {
        return `<div class="product-card">
      <div class="product-tumb">
        <img src="../img/${product.category}/${product.imgUrl}" alt="${product.name}" />
      </div>
      <div class="product-details">
        <div>
          <span class="product-catagory">Phone</span>
          <h4><a class="product-name" href="javascript:void(0)" onclick="productAbout('${product.id}','${product.category}')">${product.name}</a></h4>
          <p>${product.desc}</p>
        </div>
        <div class="product-bottom-details">
          <div class="product-price">$${product.price}</div>
          <div class="product-links">
            <a href=""><i class="fa fa-heart"></i></a>
            <a href=""><i class="fa fa-shopping-cart"></i></a>
            <button class="btn" onclick="addToCart()">Add to cart</button>
          </div>
        </div>
      </div>
    </div>`;
      });
      category.innerHTML = products.join("");
    });

  phoneCategory.onclick = () => {
    let phones = phoneData.map((product) => {
      return `<div class="product-card">
      <div class="product-tumb">
        <img src="../img/phone/${product.imgUrl}" alt="${product.name}" />
      </div>
      <div class="product-details">
        <div>
          <span class="product-catagory">Phone</span>
          <h4><a class="product-name" href="javascript:void(0)" onclick="productAbout('${product.id}','${product.category}')">${product.name}</a></h4>
          <p>${product.desc}</p>
        </div>
        <div class="product-bottom-details">
          <div class="product-price">$${product.price}</div>
          <div class="product-links">
            <a href=""><i class="fa fa-heart"></i></a>
            <a href=""><i class="fa fa-shopping-cart"></i></a>
            <button class="btn" onclick="addToCart()">Add to cart</button>
          </div>
        </div>
      </div>
    </div>`;
    });
    category.innerHTML = phones.join("");
  };

  laptopCategory.onclick = () => {
    let laptop = laptopData.map((product) => {
      return `<div class="product-card">
      <div class="product-tumb">
        <img src="../img/laptop/${product.imgUrl}" alt="${product.name}" />
      </div>
      <div class="product-details">
        <div>
          <span class="product-catagory">Phone</span>
          <h4><a class="product-name" href="javascript:void(0)" onclick="productAbout('${product.id}','${product.category}')">${product.name}</a></h4>
          <p>${product.desc}</p>
        </div>
        <div class="product-bottom-details">
          <div class="product-price">$${product.price}</div>
          <div class="product-links">
            <a href=""><i class="fa fa-heart"></i></a>
            <a href=""><i class="fa fa-shopping-cart"></i></a>
            <button class="btn" onclick="addToCart()">Add to cart</button>
          </div>
        </div>
      </div>
    </div>`;
    });
    category.innerHTML = laptop.join("");
  };

  monitorCategory.onclick = () => {
    let monitor = monitorData.map((product) => {
      return `<div class="product-card">
      <div class="product-tumb">
        <img src="../img/monitor/${product.imgUrl}" alt="${product.name}" />
      </div>
      <div class="product-details">
        <div>
          <span class="product-catagory">Phone</span>
          <h4><a class="product-name" href="javascript:void(0)" onclick="productAbout('${product.id}','${product.category}')">${product.name}</a></h4>
          <p>${product.desc}</p>
        </div>
        <div class="product-bottom-details">
          <div class="product-price">$${product.price}</div>
          <div class="product-links">
            <a href=""><i class="fa fa-heart"></i></a>
            <a href=""><i class="fa fa-shopping-cart"></i></a>
            <button class="btn" onclick="addToCart()">Add to cart</button>
          </div>
        </div>
      </div>
    </div>`;
    });
    category.innerHTML = monitor.join("");
  };

  cameraCategory.onclick = () => {
    let camera = cameraData.map((product) => {
      return `<div class="product-card">
      <div class="product-tumb">
        <img src="../img/camera/${product.imgUrl}" alt="${product.name}" />
      </div>
      <div class="product-details">
        <div>
          <span class="product-catagory">Phone</span>
          <h4><a class="product-name" href="javascript:void(0)" onclick="productAbout('${product.id}','${product.category}')">${product.name}</a></h4>
          <p>${product.desc}</p>
        </div>
        <div class="product-bottom-details">
          <div class="product-price">$${product.price}</div>
          <div class="product-links">
            <a href=""><i class="fa fa-heart"></i></a>
            <a href=""><i class="fa fa-shopping-cart"></i></a>
            <button class="btn" onclick="addToCart()">Add to cart</button>
          </div>
        </div>
      </div>
    </div>`;
    });
    category.innerHTML = camera.join("");
  };
}

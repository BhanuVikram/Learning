fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((convertedData) => displayData(convertedData))
  .catch((err) => console.log(err));

let cartProduct = [];

function addToCart(product) {
  let data = { ...product, qty: 1 };
  cartProduct.push(data);
  localStorage.setItem("cart", JSON.stringify(cartProduct));
  alert("Product Successfully Added To Your Cart");
}

function displayData(data) {
  let productsCont = document.querySelector(".products");

  for (let i = 0; i < data.length; i++) {
    let product = document.createElement("div");
    product.className = "product";

    let title = document.createElement("h2");
    title.className = "title";
    title.innerHTML = data[i].title;

    let image = document.createElement("img");
    image.alt = "";
    image.className = "image";
    image.src = data[i].image;

    let price = document.createElement("h5");
    price.className = "price";
    price.innerHTML = `$${data[i].price}`;

    let category = document.createElement("h6");
    category.className = "category";
    category.innerHTML = data[i].category;

    let description = document.createElement("p");
    description.className = "desc";
    description.innerHTML = data[i].description;

    let buttons = document.createElement("div");
    buttons.className = "buttons";

    let add = document.createElement("button");
    add.className = "add";
    add.innerText = "Add To Cart";
    add.addEventListener("click", function () {
      addToCart(data[i]);
      console.log(data[i]);
    });

    let buy = document.createElement("button");
    buy.className = "buy";
    buy.innerText = "Buy Now";

    buttons.append(add, buy);

    product.append(title, image, price, category, description, buttons);

    productsCont.append(product);
  }
}

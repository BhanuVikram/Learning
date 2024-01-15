let products = JSON.parse(localStorage.getItem("cart")) || [];

displayData(products);

function removeFromCart(product) {
  let index = products.findIndex((item) => item.id === product.id);
  console.log("index:", index);

  products.splice(index, 1);
  console.log("products:", products);

  localStorage.setItem("cart", JSON.stringify(products));
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

    let remove = document.createElement("button");
    remove.className = "add";
    remove.innerText = "Remove From Cart";
    remove.addEventListener("click", function () {
      removeFromCart(data[i]);
    });

    let checkout = document.createElement("button");
    checkout.className = "buy";
    checkout.innerText = "Proceed To Checkout";

    buttons.append(remove, checkout);

    product.append(title, image, price, category, description, buttons);

    productsCont.append(product);
  }
}

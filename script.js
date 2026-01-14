let cart = 0;

const productData = [
  { name: "Mobile Phone", price: 9999, img: "https://via.placeholder.com/150" },
  { name: "Shoes", price: 1999, img: "https://via.placeholder.com/150" },
  { name: "Headphones", price: 1499, img: "https://via.placeholder.com/150" },
  { name: "Watch", price: 2499, img: "https://via.placeholder.com/150" }
];

const productsDiv = document.getElementById("products");

productData.forEach((p, i) => {
  productsDiv.innerHTML += `
    <div class="product">
      <img src="${p.img}">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    </div>
  `;
});

function addToCart() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
  document.getElementById("overlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}

function checkout() {
  alert("Order placed (Demo COD)");
}

function navClick(name) {
  alert(name + " clicked");
}

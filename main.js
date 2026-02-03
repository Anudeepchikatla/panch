const list = document.getElementById("productList");

function renderProducts(arr) {
  list.innerHTML = "";
  arr.forEach(p => {
    list.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="secondary-btn" onclick="location.href='product.html?id=${p.id}'">View</button>
        <button class="primary-btn" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

if (list) renderProducts(products);

function filterProducts(cat) {
  renderProducts(cat === "all" ? products : products.filter(p => p.category === cat));
}

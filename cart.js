let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* SAVE CART */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

/* ADD PRODUCT */
function addToCart(id) {
  let item = cart.find(i => i.id === id);

  if (item) item.qty++;
  else cart.push({ id, qty: 1 });

  saveCart();
  alert("Added to cart ✅");
}



/* UPDATE QTY */
function updateQty(id, change) {
  let item = cart.find(i => i.id === id);
  item.qty += change;

  if (item.qty <= 0) {
    cart = cart.filter(i => i !== item);
  }

  saveCart();
  location.reload();
}

/* CART COUNT */
function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const el = document.getElementById("cartCount");
  if (el) el.innerText = count;
}

updateCartCount();

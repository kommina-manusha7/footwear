let total = 0;

function addToCart(price) {
  total += price;
  document.getElementById("cart-total").textContent = `₹${total}`;
}

function showOffer() {
  document.getElementById("offer-message").textContent = "🎉 Get 20% off on all items today!";
}

function showProfileName() {
  const nameBox = document.getElementById("profile-name");
  nameBox.classList.toggle("show");
}

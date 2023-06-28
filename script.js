let cartItems = [];


function addToCart(itemName, price) {
  const item = { name: itemName, price: price };
  cartItems.push(item);
  updateCart();
}


function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";

  if (cartItems.length === 0) {
    cartElement.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    const cartList = document.createElement("ul");

    cartItems.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${item.name} - $${item.price}`;
      const removeButton = document.createElement("button");
      removeButton.innerHTML = "Remove";
      removeButton.onclick = () => removeFromCart(index);
      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);
    });

    cartElement.appendChild(cartList);
  }
}

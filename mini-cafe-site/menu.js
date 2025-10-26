// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const menuList = document.getElementById("menu-list");

  // Array of menu items
  const menuItems = [
    { name: "Espresso", description: "Strong and bold shot of coffee to start your day.", price: "₱80" },
    { name: "Cappuccino", description: "Espresso with steamed milk and a layer of foam.", price: "₱120" },
    { name: "Latte", description: "Rich espresso blended with creamy steamed milk.", price: "₱110" },
    { name: "Green Tea", description: "Refreshing and healthy with a calming aroma.", price: "₱90" },
    { name: "Milk Tea", description: "Smooth black tea with milk and a touch of sweetness.", price: "₱100" },
    { name: "Herbal Tea", description: "Relaxing blend of herbs for a soothing experience.", price: "₱95" },
    { name: "Croissant", description: "Buttery and flaky, perfect with coffee.", price: "₱75" },
    { name: "Cheesecake", description: "Creamy dessert topped with a sweet glaze.", price: "₱150" },
    { name: "Chocolate Muffin", description: "Moist muffin loaded with chocolate chips.", price: "₱85" }
  ];

  // Loop through the array to create menu items dynamically
  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-item");

    card.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <span class="price">${item.price}</span>
      <button>Order Now</button>
    `;

    // Add button click event
    card.querySelector("button").addEventListener("click", () => {
      orderItem(item.name);
    });

    menuList.appendChild(card);
  });

  // Function for order
  function orderItem(itemName) {
    alert("You ordered " + itemName + "!");
    const summary = document.getElementById("order-summary");
    summary.innerHTML = `
      <h2>Your Order</h2>
      <p>You ordered: <strong>${itemName}</strong>. Thank you for choosing Nowii & Goldy Café!</p>
    `;
  }
});

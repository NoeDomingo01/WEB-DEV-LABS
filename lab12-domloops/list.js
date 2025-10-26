// Create an array of fruits
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Get the <ul> element by its ID
const fruitList = document.getElementById("fruit-list");

// Loop through the array and create <li> for each fruit
for (let i = 0; i < fruits.length; i++) {
  // Create a new <li> element
  const listItem = document.createElement("li");
  
  // Set the text of the <li> to the fruit name
  listItem.textContent = fruits[i];
  
  // Append the <li> to the <ul>
  fruitList.appendChild(listItem);
}

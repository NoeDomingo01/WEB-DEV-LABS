// Function to change heading text
function changeTitle() {
  // Select the heading element using getElementById
  let heading = document.getElementById("page-title");

  // Change the text of the heading using innerText
  heading.innerText = "Title has been changed!";
}

// Add event listener to button
document.getElementById("change-btn").addEventListener("click", changeTitle);

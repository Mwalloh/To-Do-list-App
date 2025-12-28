const addToListButton = document.querySelector("button");
const ulParentElement = document.querySelector("ul");
const inputField = document.getElementById("list-item-input");
const date = new Date();

addToListButton.addEventListener("click", function (event) {
  if (inputField.value !== "") {
    event.preventDefault();

    // Get input value
    const inputFieldValue = inputField.value.trim();

    // Creating new element and adding it to the list
    const newListItem = document.createElement("li");
    newListItem.textContent = inputFieldValue;

    ulParentElement.appendChild(newListItem);

    // Paragraph element that displays date
    const dateText = document.createElement("p");
    dateText.textContent = date.toDateString();

    ulParentElement.appendChild(dateText);

    // Style the added paragraph
    dateText.style.fontSize = "10px";

    // Add a horizontal line
    const horizontalLine = document.createElement("hr");
    ulParentElement.appendChild(horizontalLine);
    alert("Task added successfully!");

    // Clear input field after adding value
    inputField.value = "";
  } else {
    alert("Please enter a task!");
  }
});


inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && inputField.value !== "") {
    event.preventDefault();

    // Get input value
    const inputFieldValue = inputField.value.trim();

    // Creating new element and adding it to the list
    const newListItem = document.createElement("li");
    newListItem.textContent = inputFieldValue;

    ulParentElement.appendChild(newListItem);

    // Paragraph element that displays date
    const dateText = document.createElement("p");
    dateText.textContent = date.toDateString();

    ulParentElement.appendChild(dateText);

    // Style the added paragraph
    dateText.style.fontSize = "10px";

    // Add a horizontal line
    const horizontalLine = document.createElement("hr");
    ulParentElement.appendChild(horizontalLine);
    alert("Task added successfully!");

    // Clear input field after adding value
    inputField.value = "";
  } else if (event.key === "Enter" && inputField.value === "") {
    event.preventDefault();
    alert("Please enter a task!");
  }
});

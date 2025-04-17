// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
  document.getElementById('text-content').textContent = 'The text has been changed dynamically!';
});

// Modify CSS styles via JavaScript
document.getElementById('changeStyleBtn').addEventListener('click', function() {
  document.body.style.backgroundColor = 'lightblue'; // Changes the background color
});

// Add or remove an element when a button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a dynamically added paragraph!';
  
  const container = document.getElementById('added-element-container');
  container.appendChild(newElement); // Adds the new paragraph to the container
});

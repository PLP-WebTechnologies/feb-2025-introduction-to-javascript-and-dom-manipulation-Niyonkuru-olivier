// Function to change the text content
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('text-content').textContent = 'The paragraph text has been changed!';
});

// Function to modify CSS styles dynamically
document.getElementById('change-style-btn').addEventListener('click', function() {
    const box = document.getElementById('style-box');
    box.style.backgroundColor = 'lightcoral';
    box.style.transform = 'rotate(10deg)';
});

// Function to add a new element dynamically
document.getElementById('add-element-btn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added element!';
    document.getElementById('new-element-container').appendChild(newElement);
});

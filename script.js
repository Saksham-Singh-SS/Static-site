// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the button and the heading elements
    const button = document.getElementById('action-btn');
    const textElement = document.getElementById('dynamic-text');

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Change the text content when clicked
        if (textElement.textContent === "Hello, World!") {
            textElement.textContent = "You clicked the button! 🎉";
            textElement.style.color = "#6200ea";
        } else {
            textElement.textContent = "Hello, World!";
            textElement.style.color = "#333";
        }
    });

});
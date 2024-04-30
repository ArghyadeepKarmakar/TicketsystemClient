// JavaScript code goes here
// You can use this to handle form submission, validation, etc.

document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get input values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // You can perform validation here if needed
        
        // For demonstration, let's just log the input values
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        // You can send the form data to a server for processing using fetch or XMLHttpRequest
        // Example using fetch:
        /*
        fetch('signup.php', {
            method: 'POST',
            body: JSON.stringify({ username: username, email: email, password: password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle response from server
        })
        .catch(error => console.error('Error:', error));
        */
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // URL of your Ktor server
    const apiUrl = 'http://127.0.0.1:8080/';

    // Making a GET request to your Ktor server
    fetch(apiUrl)
        .then(response => {
            // Check the status code of the response
            if (response.ok) {
                // If the status is OK (200), return the text response
                return response.text();
            } else {
                // If the status code is not OK, throw an error
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            // Display the response data in the response container element
            displayResponse(data);
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
});

function displayResponse(response) {
    // Get a reference to the response container element
    const responseContainer = document.getElementById('responseContainer');

    // Display the response in the container
    responseContainer.textContent = response;
}

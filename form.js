// JavaScript code goes here
// You can use this to handle form submission, validation, etc.

function confirmReservation() {
    // Here you can add JavaScript code to handle the confirmation
    // For example, you can submit the form data to a server or display a confirmation message
    alert("Reservation confirmed!");
    // If you want to submit the form to a server, you can do so by using AJAX or fetch
    // Example using fetch:
    /*
    const form = document.getElementById('ticketForm');
    const formData = new FormData(form);
    fetch('reservation.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from server
    })
    .catch(error => console.error('Error:', error));
    */
}

function cancelReservation() {
    // Here you can add JavaScript code to handle cancellation
    // For example, you can reset the form fields or redirect to another page
    document.getElementById("ticketForm").reset();
}

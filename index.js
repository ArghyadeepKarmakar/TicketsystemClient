// JavaScript code goes here
// You can use this to handle dynamic behavior, form submissions, etc.

// Example JavaScript code:
// Assuming you want to display an alert when a ticket booking button is clicked

// Get all elements with class name "book-ticket"
const bookTicketButtons = document.querySelectorAll('.book-ticket');

// Iterate through each button and attach a click event listener
bookTicketButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior (e.g., following the link)

        // Get the event name from the parent <td> element
        const eventName = this.parentNode.parentNode.childNodes[0].textContent;

        // Display an alert with the event name
        alert(`Booking ticket for ${eventName}`);
        
        // Alternatively, you can redirect to the booking page using window.location.href
        // window.location.href = this.href;
    });
});

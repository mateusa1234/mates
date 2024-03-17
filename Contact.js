// contact.js

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // You can add code here to handle the form submission (e.g., send the form data to a server)

    // Example: Log form data to console
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Clear the form fields
    event.target.reset();
}

// Event listener to handle form submission when the form is submitted
document.getElementById('contact-form').addEventListener('submit', handleFormSubmission);

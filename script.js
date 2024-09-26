// script.js
document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Hi Alfen`;
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            const formData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
            document.getElementById('form-response').textContent = formData;
        } else {
            alert('Please fill in all fields');
        }
    });
});
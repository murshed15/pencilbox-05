// Display current date and time in the footer
function displayDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };
    document.getElementById('dateTime').textContent = now.toLocaleString('en-US', options);
}

displayDateTime(); // Initial call to display immediately
setInterval(displayDateTime, 1000); // Update every second

// Confirmation popup on form submit
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Signup successful!');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login successful!');
});

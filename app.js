document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();
            login();
        });
    }
});

// Users stored in the script
const users = {
    'rahul.fidai': 'Rahul1969',
    'umesh.sharma': 'sharma.123',
    'asma.shaikh': 'shaikh.123',
    'jaydip.vansia': 'vansia.123',
    'sathya.cv': 'sathya.123'
};

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        alert('Login successful!');
        window.location.href = 'chatbot.html';
    } else {
        alert('Incorrect username or password');
    }
}

// Toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }
}

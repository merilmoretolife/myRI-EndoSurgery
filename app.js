// app.js

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();
            login();
        });
    }

    if (document.querySelector('iframe')) {
        checkAuthentication();
    }
});

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username === 'rahul.fidai' && password === 'Rahul@1969') || 
        (username === 'umesh.sharma' && password === 'Meril@123')) {
        localStorage.setItem('authenticated', 'true');
        localStorage.setItem('authTime', Date.now());
        window.location.href = 'chatbot.html';
    } else {
        alert('Incorrect username or password');
    }
}

function checkAuthentication() {
    var isAuthenticated = localStorage.getItem('authenticated') === 'true';
    var authTime = parseInt(localStorage.getItem('authTime'), 10);
    var currentTime = Date.now();
    var sessionDuration = 30 * 60 * 1000; // 30 minutes

    if (!isAuthenticated || currentTime - authTime > sessionDuration) {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('authTime');
        window.location.href = 'index.html';
    }
}

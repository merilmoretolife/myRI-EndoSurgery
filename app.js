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
        window.location.href = 'chatbot.html';
    } else {
        alert('Incorrect username or password');
    }
}

function checkAuthentication() {
    if (localStorage.getItem('authenticated') !== 'true') {
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();
            login();
        });
    }

    if (document.getElementById('resetForm')) {
        document.getElementById('resetForm').addEventListener('submit', function (event) {
            event.preventDefault();
            resetPassword();
        });
    }
});

// Initial users stored in localStorage
const initialUsers = {
    'rahul.fidai': 'Rahul1969',
    'umesh.sharma': 'Meril@123',
    'asma.shaikh': 'Meril@123',
    'jaydip.vansia': 'Meril@123',
    'sathya.cv': 'Meril@123'
};

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(initialUsers));
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const users = JSON.parse(localStorage.getItem('users'));

    if (users[username] && users[username] === password) {
        if (username === 'rahul.fidai') {
            const choice = confirm('Do you want to go to the Admin Page? Click OK for Admin, Cancel for Chatbot.');
            if (choice) {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'chatbot.html';
            }
        } else {
            alert('Login successful!');
            window.location.href = 'chatbot.html';
        }
    } else {
        alert('Incorrect username or password');
    }
}

function resetPassword() {
    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('newPassword').value;
    const accessKey = document.getElementById('accessKey').value;

    if (accessKey !== 'key4endo') {
        alert('Invalid Access Key');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users'));
    if (users[username]) {
        users[username] = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Password reset successful!');
        window.location.href = 'index.html';
    } else {
        alert('Username not found');
    }
}

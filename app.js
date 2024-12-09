const gistId = '82282d5058015323bff08fda4c4fb1f4';
const gistUrl = `https://api.github.com/gists/${gistId}`;
const token = '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'; // Replace with your actual GitHub token

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents reload
    login();
});

document.getElementById('resetForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents reload
    resetPassword();
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(gistUrl, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            return response.json();
        })
        .then(data => {
            const users = JSON.parse(data.files['endo-users.json'].content);
            if (users[username] && users[username] === password) {
                window.location.href = username === 'rahul.fidai' ? 'admin.html' : 'chatbot.html';
            } else {
                alert('Incorrect username or password');
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again.');
        });
}

function resetPassword() {
    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('newPassword').value;
    const accessKey = document.getElementById('accessKey').value;

    if (accessKey !== 'key4endo') {
        alert('Invalid Access Key');
        return;
    }

    fetch(gistUrl, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            const users = JSON.parse(data.files['endo-users.json'].content);
            if (users[username]) {
                users[username] = newPassword;
                const updatedContent = JSON.stringify(users, null, 2);

                return fetch(gistUrl, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `token ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        files: {
                            'endo-users.json': {
                                content: updatedContent
                            }
                        }
                    })
                });
            } else {
                alert('Username not found');
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Password reset successful!');
                window.location.href = 'index.html';
            } else {
                throw new Error(`HTTP Error: ${response.status}`);
            }
        })
        .catch(error => {
            console.error('Error during password reset:', error);
            alert('An error occurred. Please try again.');
        });
}

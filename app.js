console.log('app.js is loaded!');
const gistId = '82282d5058015323bff08fda4c4fb1f4'; // Your Gist ID
const gistUrl = `https://api.github.com/gists/${gistId}`;
const token = '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'; // Replace with your token

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch(gistUrl)
        .then(response => response.json())
        .then(data => {
            const users = JSON.parse(data.files['endo-users.json'].content);
            if (users[username] && users[username] === password) {
                if (username === 'rahul.fidai') {
                    const choice = confirm("Do you want to go to the Admin Page? Click 'OK' for Admin Page, 'Cancel' for Chatbot.");
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
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            alert('An error occurred. Please try again.');
        });
}

function resetPassword() {
    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('newPassword').value;
    const accessKey = document.getElementById('accessKey').value;

    if (accessKey !== "key4endo") {
        alert('Invalid Access Key');
        return;
    }

    fetch(gistUrl)
        .then(response => response.json())
        .then(data => {
            const users = JSON.parse(data.files['endo-users.json'].content);
            if (users[username]) {
                users[username] = newPassword;
                const updatedContent = JSON.stringify(users, null, 2);

                fetch(gistUrl, {
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
                })
                    .then(response => {
                        if (response.ok) {
                            alert('Password reset successful!');
                            window.location.href = 'index.html';
                        } else {
                            throw new Error('Failed to update password');
                        }
                    })
                    .catch(error => {
                        console.error('Error updating password:', error);
                        alert('An error occurred. Please try again.');
                    });
            } else {
                alert('Username not found');
            }
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            alert('An error occurred. Please try again.');
        });
}

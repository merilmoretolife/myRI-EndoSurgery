document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'rahul.fidai';
    const validPassword = 'Rahul@1969';

    if (username === validUsername && password === validPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';

        // Load the third-party chatbot
        const iframe = document.getElementById('chatbot-frame');
        iframe.src = 'https://www.chatbase.co/chatbot-iframe/OHzQlcE2stl6MgQCuxzk_';
    } else {
        alert('Invalid username or password.');
    }
});

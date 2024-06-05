document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'yourUsername';
    const validPassword = 'yourPassword';

    if (username === validUsername && password === validPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('chat-container').style.display = 'block';

        // Load the third-party chatbot
        const script = document.createElement('script');
        script.src = 'URL_TO_THIRD_PARTY_CHATBOT';
        script.async = true;
        document.getElementById('chat-container').appendChild(script);
    } else {
        alert('Invalid username or password.');
    }
});
y
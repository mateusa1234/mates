function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    console.log('Login:', username, password);
    // Implement login functionality here
    // For demo purposes, assume successful login and redirect to new page
    redirectToIndex();
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    console.log('Register:', username, password);
    // Implement register functionality here
    // For demo purposes, assume successful registration and redirect to new page
    redirectToIndex();
}

function redirectToIndex() {
    // Replace 'new-index.html' with the path to your new index file
    window.location.href = 'index.html';
}

function toggleForm() {
    document.getElementById('login-form').classList.toggle('hidden');
    document.getElementById('register-form').classList.toggle('hidden');
}

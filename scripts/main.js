function checkUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(email + " " + password);
    window.location.href = 'homepage.html';
}
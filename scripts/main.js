function checkUser() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://mhrsystem.herokuapp.com/users/signin"; // site that doesn’t send Access-Control-*

    var request = new XMLHttpRequest()
    request.open('POST',proxyurl + url, true)
    request.setRequestHeader('Content-Type', 'application/json')
    request.onload = function() {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            if (data.code == "200") {
                window.location = "homepage.html";
            } else {
                alert('Please check your email - password!');
            }
        }
        else {
            console.log('error');
        }
    }
    request.send(JSON.stringify({
        email: email,
        password: password
    }));
}

function signUp() {
    var newEmail = document.getElementById('newemail').value;
    var newPassword = document.getElementById('newpassword').value;
    var confirmPassword = document.getElementById('confirmpassword').value;

    if (newPassword != confirmPassword) {
        alert('Your password does not match');
    } else {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://mhrsystem.herokuapp.com/users/signup"; // site that doesn’t send Access-Control-*
        var request = new XMLHttpRequest()
        request.open('POST',proxyurl + url, true)
        request.setRequestHeader('Content-Type', 'application/json')
        request.onload = function() {
            var data = JSON.parse(this.response)
            if (request.status >= 200 && request.status < 400) {
                if (data.code == "200") {
                    alert('Successfully created your account');
                    window.location = "login.html";
                } else {
                    alert('Something went wrong! Please try again later');
                }
            }
            else {
                console.log('error');
            }
        }
        request.send(JSON.stringify({
            email: newEmail,
            password: newPassword,
            name: 'EAD',
            role: 'employee'
        }));
    }
}
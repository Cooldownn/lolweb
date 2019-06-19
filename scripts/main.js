function checkUser() {
    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://mhrsystem.herokuapp.com/users"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://mhrsystem.herokuapp.com
    .then(response => response.text())
    .then(contents => console.log(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
}
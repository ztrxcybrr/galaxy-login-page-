function validateLogin(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginMessage = document.getElementById("login-message");

    // Simple validation for username and password
    if (username.toLowerCase() === "admin" && password === "admin") {
        loginMessage.textContent = "Login successful!";
        loginMessage.style.color = "green";
        // Redirect or perform other actions here
    } else {
        loginMessage.textContent = "Username or password incorrect. Please try again.";
        loginMessage.style.color = "red";
    }
}

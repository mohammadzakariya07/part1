function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Hardcoded credentials (demo only)
    if (user === "admin" && pass === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText =
            "Invalid Username or Password";
    }
}

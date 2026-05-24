// ---------------------------
// BASIC LOGIN SYSTEM
// ---------------------------

// Hard-coded login credentials
const validUsername = "student";
const validPassword = "password123";

// DOM elements
const loginSection = document.getElementById("loginSection");
const taskSection = document.getElementById("taskSection");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");

// Login button event
loginBtn.addEventListener("click", () => {
    const usernameInput = document.getElementById("usernameInput").value.trim();
    const passwordInput = document.getElementById("passwordInput").value.trim();

    if (usernameInput === validUsername && passwordInput === validPassword) {
        loginSection.style.display = "none";
        taskSection.style.display = "block";
        loginError.textContent = "";
    } else {
        loginError.textContent = "Invalid username or password.";
    }
});

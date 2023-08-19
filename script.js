import { initializeForms } from "./script.js";

document.addEventListener("DOMContentLoaded", function() {
    initializeForms();
});



export function initializeForms() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");

    loginButton.addEventListener("click", function() {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    signupButton.addEventListener("click", function() {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = loginForm.querySelector("input[type='text']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        // For demonstration purposes, check credentials
        if (username === "demo" && password === "password") {
            alert("Login successful!");
            // You can redirect to a dashboard or other page here
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = signupForm.querySelector("input[type='text']").value;
        const newPassword = signupForm.querySelector("input[type='password']").value;

        // For demonstration purposes, display success message
        alert("Signup successful! Username: " + newUsername + ", Password: " + newPassword);

        signupForm.reset();
    });
}
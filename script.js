document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const username = document.getElementById("signInUsername");
    const email = document.getElementById("signInEmail");
    const password = document.getElementById("signInPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    form.addEventListener("submit", (event) => {
        let isValid = true;

       
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

       
        if (username.value.trim() === "") {
            usernameError.textContent = "Username is required";
            isValid = false;
        }

        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email";
            isValid = false;
        }

        
        if (password.value.trim() === "") {
            passwordError.textContent = "Password is required";
            isValid = false;
        }

       
        if (confirmPassword.value.trim() !== password.value.trim()) {
            confirmPasswordError.textContent = "Passwords do not match";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); 
        } else {
            alert("Registration Successful!");
        }
    });


    function passwardcheck() {
        if (password.value.trim() !== confirmPassword.value.trim()) {
            alert("Passwords do not match!");
        } else {
            alert("Passwords match!");
        }
    }
});



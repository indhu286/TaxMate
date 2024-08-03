const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (()=>{
    loginBtn.click(); // Clicking the login button when signup link is clicked
    return false;
});

loginForm.onsubmit = (() => {
    // Redirecting to index.html when login form is submitted
    window.location.href = "index.html";
    return false; // Preventing the form from submitting normally
});
document.getElementById("loginButton").addEventListener("click", function() {
    // Code to trigger the Google save password popup
    // This could be achieved through browser-specific APIs
    // Here's a general example, but it might not work as intended due to browser security restrictions
    // You may need to explore browser-specific documentation for more accurate implementation
    if (document.createElement('input').webkitSpeech === undefined) {
        alert('Your browser does not support Google Save Password feature.');
    } else {
        // Triggering the save password prompt
        document.getElementById("loginForm").submit();
    }
});

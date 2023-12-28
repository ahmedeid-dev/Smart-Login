/* ----------inputs---------- */
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
/* ----------buttons---------- */
var loginButton = document.getElementById("loginButton");
var goingSignupButton = document.getElementById("goingSignupButton");
var goingForgetButton = document.getElementById("goingForgetButton");
/* ----------Alerts---------- */
var loginAlert = document.getElementById("loginAlert");

var mailsList = [];
if (localStorage.getItem("mailsArray") != null) {
    mailsList = JSON.parse(localStorage.getItem("mailsArray"));
}
/* ----------functions---------- */
loginButton.addEventListener("click", function () {
    for (var i = 0; i < mailsList.length; i++) {
        if (mailsList[i].userEmail == loginEmail.value && mailsList[i].userPassword == loginPassword.value) {
            localStorage.setItem("loggedName", JSON.stringify(mailsList[i].userName));
            window.location = "html/logged.html";
            return
        }
    }
    loginAlert.classList.remove("d-none");
});
goingSignupButton.addEventListener("click", function () {
    window.location = "html/signup.html";
});
goingForgetButton.addEventListener("click", function () {
    window.location = "html/reset.html";
}); 
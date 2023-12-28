/* ----------inputs---------- */
var signUpName = document.getElementById("signUpName");
var forgetEmail = document.getElementById("forgetEmail");
var forgetPassword = document.getElementById("forgetPassword");
/* ----------Alerts---------- */
var userEmailAlert = document.getElementById("userEmailAlert");
var userPasswordAlert = document.getElementById("userPasswordAlert");
/* ----------buttons---------- */
var submitButton = document.getElementById("submitButton");
var updateButton = document.getElementById("updateButton");
var goingSignupButton = document.getElementById("goingSignupButton");
var goingSigninButton = document.getElementById("goingSigninButton");
/* ----------regex---------- */
var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var userPassword = document.getElementById("userPassword");
/* ----------functions---------- */
var mailsList = [];
if (localStorage.getItem("mailsArray") != null) {
    mailsList = JSON.parse(localStorage.getItem("mailsArray"));
}
// var user = JSON.parse(localStorage.getItem("mailsArray"));
/* -------------------- */
submitButton.addEventListener('click', function () {
    for (var i = 0; i < mailsList.length; i++) {
        if (forgetEmail.value != mailsList[i].userEmail) {
            userEmailAlert.classList.remove("d-none");
        } else {
            signUpName.value = mailsList[i].userName;
            userEmailAlert.classList.add("d-none");
            forgetPassword.classList.remove("d-none");
            submitButton.classList.add("d-none");
            updateButton.classList.remove("d-none");
            break;
        }
    }
})
updateButton.addEventListener('click', function () {
        var user = {
            userName: signUpName.value,
            userEmail: forgetEmail.value,
            userPassword: forgetPassword.value,
        };
    if (user.userEmail.trim() == '' && user.userPassword == '') {
        alert(NaN);
    }
    else {
        for (var i = 0; i < mailsList.length; i++) {
            if (forgetEmail.value == mailsList[i].userEmail) {
                // indexUpdate = i;
                signUpName.value = mailsList[i].userName;
                mailsList.splice(i, 1, user);
                localStorage.setItem("mailsArray", JSON.stringify(mailsList));
                confirm("Success!!!!");
                window.location = "../index.html";            
            }
        }
    }
})
goingSignupButton.addEventListener("click", function () {
    window.location = "../html/signup.html";
});
goingSigninButton.addEventListener("click", function () {
    window.location = "../index.html";
});
forgetPassword.addEventListener("input", function () {
    onInputPassword();
});
function onInputPassword() {
    if (passwordRegex.test(forgetPassword.value) == true) {
        forgetPassword.classList.add("is-valid");
        forgetPassword.classList.remove("is-invalid");
        userPasswordAlert.classList.add("d-none");
        return true;
    } else {
        forgetPassword.classList.remove("is-valid");
        forgetPassword.classList.add("is-invalid");
        userPasswordAlert.classList.remove("d-none");
        return false;
    }   
}
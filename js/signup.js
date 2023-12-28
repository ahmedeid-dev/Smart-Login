/* ----------inputs---------- */
var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
/* ----------buttons---------- */
var signupButton = document.getElementById("signupButton");
var goingSigninButton = document.getElementById("goingSigninButton");
/* ----------Alerts---------- */
var userNameAlert = document.getElementById("userNameAlert");
var userEmailAlert = document.getElementById("userEmailAlert");
var userPasswordAlert = document.getElementById("userPasswordAlert");
var signupAlert = document.getElementById("signupAlert");
/* ----------regex---------- */
// var nameRegex = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/;
// var passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
var nameRegex = /^[A-Z ?a-z]{5,20}$/;
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

var mailsList = [];
if (localStorage.getItem("mailsArray") != null) {
    mailsList = JSON.parse(localStorage.getItem("mailsArray"));
}
/* ----------functions---------- */

// function signupClick() { 
//     var user = {
//         userName: signUpName.value,
//         userEmail: signUpEmail.value,
//         userPassword: signUpPassword.value,
//     };
//     if (user.userName.trim() == '' && user.userEmail.trim() == '' && user.userPassword == '') {
//         alert(NaN);
//     }
//     else if (onInputName() == false || onInputEmail() == false || onInputPassword() == false) {
//         alert("Error");
//     }
//     else if (localStorage.getItem("mailsArray").includes(signUpEmail.value)) {
//         alert("Email Already Exist");
//         }
//     else {
//         mailsList.push(user);
//         localStorage.setItem("mailsArray", JSON.stringify(mailsList));
//         alert("Success!!!!");
//         signUpName.classList.remove("is-valid");
//         signUpEmail.classList.remove("is-valid");
//         signUpPassword.classList.remove("is-valid");
//         window.location = "../index.html";
//     }
// }
// function goingSigninClick() {
//     window.location = "../index.html";
// }

signupButton.addEventListener("click", function () {
    var user = {
        userName: signUpName.value,
        userEmail: signUpEmail.value,
        userPassword: signUpPassword.value,
    };
    if (user.userName.trim() == '' && user.userEmail.trim() == '' && user.userPassword == '') {
        signupAlert.classList.remove("d-none");
    }
    else if (onInputName() == false || onInputEmail() == false || onInputPassword() == false) {
        signupAlert.classList.remove("d-none");
    }
    else if (localStorage.getItem("mailsArray") == null) {
        mailsList.push(user);
        localStorage.setItem("mailsArray", JSON.stringify(mailsList));
        signUpName.classList.remove("is-valid");
        signUpEmail.classList.remove("is-valid");
        signUpPassword.classList.remove("is-valid");
        confirm("Success!!!!");
        window.location = "../index.html";
        }
    else if (localStorage.getItem("mailsArray").includes(signUpEmail.value)) {
        confirm("Email Already Exist");
    }
    else {
        mailsList.push(user);
        localStorage.setItem("mailsArray", JSON.stringify(mailsList));
        signUpName.classList.remove("is-valid");
        signUpEmail.classList.remove("is-valid");
        signUpPassword.classList.remove("is-valid");
        confirm("Success!!!!");
        window.location = "../index.html";
    }
});

goingSigninButton.addEventListener("click", function () {
    window.location = "../index.html";
});

signUpName.addEventListener("input", function () {
    onInputName();
});
signUpEmail.addEventListener("input", function () {
    onInputEmail();
});
signUpPassword.addEventListener("input", function () {
    onInputPassword();
});

function onInputName() {
    if (nameRegex.test(signUpName.value) == true) {
        signUpName.classList.add("is-valid");
        signUpName.classList.remove("is-invalid");
        userNameAlert.classList.add("d-none");
        return true;
    } else {
        signUpName.classList.remove("is-valid");
        signUpName.classList.add("is-invalid");
        userNameAlert.classList.remove("d-none");
        return false;
    }
}

function onInputEmail() {
    if (emailRegex.test(signUpEmail.value) == true) {
        signUpEmail.classList.add("is-valid");
        signUpEmail.classList.remove("is-invalid");
        userEmailAlert.classList.add("d-none");
        return true;
    }
    else {
        signUpEmail.classList.remove("is-valid");
        signUpEmail.classList.add("is-invalid");
        userEmailAlert.classList.remove("d-none");
        return false;
    }   
}

function onInputPassword() {
    if (passwordRegex.test(signUpPassword.value) == true) {
        signUpPassword.classList.add("is-valid");
        signUpPassword.classList.remove("is-invalid");
        userPasswordAlert.classList.add("d-none");
        return true;
    } else {
        signUpPassword.classList.remove("is-valid");
        signUpPassword.classList.add("is-invalid");
        userPasswordAlert.classList.remove("d-none");
        return false;
    }   
}

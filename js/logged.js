var loggedName = document.getElementById("loggedName");
/* ----------buttons---------- */
var logoutButton = document.getElementById("logoutButton");
/* ----------functions---------- */
logoutButton.addEventListener("click", function () {
window.location = "../index.html";
});

loggedName.innerHTML = JSON.parse(localStorage.getItem("loggedName"));

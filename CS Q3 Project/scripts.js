function showp() {
    var password = document.querySelector("#pass");
    let show = document.getElementById("Show");

    if (password.type === "password") {
        password.type = "text";
        show.textContent = "Hide";
    } else {
        password.type = "password";
        show.textContent = "Show";
    }
}

function validate() {
    var user = document.querySelector("#user");
    var pass = document.querySelector("#pass");
    var fail = document.querySelector(".error");
    var error = "Log-in Error.";
    var success = "Successful Log-In";

    if (user.value.length == 0 && pass.value.length != 0) {
        fail.innerHTML = "Please enter your username.";
        console.log(error);
    }

    if (user.value.length != 0 && pass.value.length == 0) {
        fail.innerHTML = "Please enter your password.";
        console.log(error);
    }

    if (user.value.length == 0 && pass.value.length == 0) {
        fail.innerHTML = "Please put the necessary requirements.";
        console.log(error);
    }

    if (user.value.length != 0 && pass.value.length != 0) {
        fail.innerHTML = "";
        window.location.href = "files/kuizon.html";
        console.log(success);
    }
}
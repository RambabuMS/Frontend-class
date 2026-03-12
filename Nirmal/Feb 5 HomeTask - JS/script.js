let usernameField = document.getElementById('username');
let passwordField = document.getElementById('password');
let warningText = document.getElementById('warning-text');


function OnSubmit() {
    if (IsInputEmpty()) {
        warningText.classList.remove('alert-success');
        warningText.classList.add('alert-danger');
        warningText.innerText = "Enter all missing details";
    }
    else {
        warningText.classList.remove('alert-danger');
        warningText.classList.add('alert-success');
        warningText.innerText = "Login Success!";
    }
}

function IsInputEmpty() {
    return usernameField.value.trim() === '' ||
        passwordField.value.trim() === '';
}
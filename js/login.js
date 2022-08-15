// step-1: add click event handler to button.
document.getElementById('btn-login').addEventListener('click', function () {
    // step-2: get the email address inside the field
    // always remember to use .value to get the text from an input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3:get the password
    // a:- set the id in the html element
    // b:- get the element
    // c:- get the value
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password, email)
    // DANGER: DO NOT VERIFY EMAIL AND PASSWORD ON CLIENT'S SITE IN BELOW WAY
    // step-4: verify email and password
    if (email === 'ankoncosta@gmail.com' && password === '24012000') {
        window.location.href = 'bank.html';
    }
    else {
        alert('You Bustard,Mf,Bitch why do you forget your password?? .')
    }
}) 
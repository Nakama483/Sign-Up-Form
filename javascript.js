const signupForm = document.querySelector('form');
const submitButton = document.querySelector('button');

function validatePasswords() {
    const pwd = document.querySelector('#pwd');
    const confirmPass = document.querySelector('#confirm-pwd');
    let mismatch = document.querySelector('.mismatch'); 
    if (pwd.value !== confirmPass.value) {
        mismatch.textContent = '* Passwords do not match';
    }
    return pwd.value === confirmPass.value;
}

signupForm.setAttribute('onsubmit', 'return validatePasswords()')






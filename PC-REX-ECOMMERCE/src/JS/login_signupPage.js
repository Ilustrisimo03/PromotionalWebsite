
// SIGNIN-SIGNUP
function toggleForms() {
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');
    signInForm.classList.toggle('hidden');
    signUpForm.classList.toggle('hidden');
}

function togglePasswordVisibility(inputId, iconElement) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        iconElement.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        iconElement.classList.replace('fa-eye-slash', 'fa-eye');
    }
}



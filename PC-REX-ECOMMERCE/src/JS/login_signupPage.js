function toggleSection() {
    document.getElementById('signup-section').classList.toggle('hidden');
    document.getElementById('login-section').classList.toggle('hidden');
}

function togglePasswordVisibility(id) {
    const passwordInput = document.getElementById(id);
    const eyeIcon = passwordInput.nextElementSibling;
    if (passwordInput.type === 'password' ) {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}




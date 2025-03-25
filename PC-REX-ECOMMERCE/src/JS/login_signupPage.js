
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





document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("a, div"); // Kasama na ang navbar

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100");
                    entry.target.classList.remove("opacity-0");
                } else {
                    entry.target.classList.add("opacity-0"); // Magiging invisible ulit kapag lumabas sa viewport
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
});
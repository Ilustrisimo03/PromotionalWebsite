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

// Carousel Logic
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.add('hidden'));
    slides[index].classList.remove('hidden');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide); // Show the first slide initially
setInterval(nextSlide, 3000); // Auto change every 3 seconds

const animatedElements = document.querySelectorAll('.fade-in, .fade-left, .fade-right, .zoom-in, .rotate-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(element => observer.observe(element));
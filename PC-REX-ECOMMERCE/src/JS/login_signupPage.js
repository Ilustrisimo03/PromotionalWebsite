
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








// // src/JS/login_signupPage.js

// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     GoogleAuthProvider,
//     signInWithPopup,
//     onAuthStateChanged,
//     signOut // Optional: If you add logout later
// } from "firebase/auth";
// // Corrected path relative to src/JS/
// import { auth } from "../config/firebaseConfig";

// // --- DOM Element References ---
// const signinForm = document.getElementById('signin-form');
// const signupForm = document.getElementById('signup-form');
// const authContainer = document.getElementById('auth-container');
// const logoLink = document.getElementById('logo-link');
// const animatedIcon = document.getElementById('animated-icon');

// // Sign In Elements
// const signinEmailInput = document.getElementById('signin-email');
// const signinPasswordInput = document.getElementById('signin-password');
// const signinBtn = document.getElementById('signin-btn');
// const googleSigninBtn = document.getElementById('google-signin-btn');
// const signinErrorP = document.getElementById('signin-error');

// // Sign Up Elements
// const signupNameInput = document.getElementById('signup-name');
// const signupEmailInput = document.getElementById('signup-email');
// const signupPasswordInput = document.getElementById('signup-password');
// const signupConfirmPasswordInput = document.getElementById('signup-confirm-password');
// const privacyCheckbox = document.getElementById('privacy');
// const signupBtn = document.getElementById('signup-btn');
// const googleSignupBtn = document.getElementById('google-signup-btn');
// const signupErrorP = document.getElementById('signup-error');

// // --- Utility Functions ---

// // Toggle Forms
// window.toggleForms = () => {
//     signinForm.classList.toggle('hidden');
//     signupForm.classList.toggle('hidden');
//     clearErrors(); // Clear errors when switching
// };

// // Toggle Password Visibility
// window.togglePasswordVisibility = (fieldId, icon) => {
//     const passwordInput = document.getElementById(fieldId);
//     if (!passwordInput) return; // Add check if element exists
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         icon.classList.replace("fa-eye", "fa-eye-slash");
//     } else {
//         passwordInput.type = "password";
//         icon.classList.replace("fa-eye-slash", "fa-eye");
//     }
// };

// // Display errors
// const displayError = (element, message) => {
//     if (element) { // Check if element exists before setting text
//         element.textContent = message;
//     } else {
//         console.error("Error display element not found for message:", message);
//     }
// };

// // Clear errors
// const clearErrors = () => {
//     if (signinErrorP) signinErrorP.textContent = '';
//     if (signupErrorP) signupErrorP.textContent = '';
// };

// // --- Firebase Authentication Logic ---

// // Email/Password Sign Up
// const handleSignUp = async (event) => {
//     event.preventDefault();
//     clearErrors();

//     // Ensure elements exist before accessing value
//     const name = signupNameInput?.value?.trim();
//     const email = signupEmailInput?.value?.trim();
//     const password = signupPasswordInput?.value;
//     const confirmPassword = signupConfirmPasswordInput?.value;
//     const isPrivacyChecked = privacyCheckbox?.checked;

//     // Basic Validations
//     if (!name) return displayError(signupErrorP, 'Please enter your full name.');
//     if (!email) return displayError(signupErrorP, 'Please enter your email.');
//     if (!password) return displayError(signupErrorP, 'Please enter a password.');
//     if (password !== confirmPassword) return displayError(signupErrorP, 'Passwords do not match.');
//     if (password.length < 6) return displayError(signupErrorP, 'Password must be at least 6 characters.');
//     if (!isPrivacyChecked) return displayError(signupErrorP, 'You must agree to the Privacy Policy.');

//     // Disable button
//     if(signupBtn) {
//         signupBtn.disabled = true;
//         signupBtn.textContent = 'Signing Up...';
//     }

//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         console.log("Sign up successful:", userCredential.user);
//         // TODO: Optionally save user's name to Firestore/Realtime DB here associated with userCredential.user.uid
//         alert('Sign up successful! You are now logged in.');
//         window.location.href = 'index.html'; // Redirect (relative to current page in HTML folder)
//     } catch (error) {
//         console.error("Sign up error:", error.code, error.message);
//         let errorMessage = 'An error occurred during sign up. Check console for details.';
//         if (error.code === 'auth/email-already-in-use') errorMessage = 'Email already in use.';
//         else if (error.code === 'auth/weak-password') errorMessage = 'Password is too weak.';
//         else if (error.code === 'auth/invalid-email') errorMessage = 'Invalid email format.';
//         displayError(signupErrorP, errorMessage);
//     } finally {
//         if(signupBtn) {
//             signupBtn.disabled = false;
//             signupBtn.textContent = 'Sign Up';
//         }
//     }
// };

// // Email/Password Sign In
// const handleSignIn = async (event) => {
//     event.preventDefault();
//     clearErrors();

//     const email = signinEmailInput?.value?.trim();
//     const password = signinPasswordInput?.value;

//     if (!email || !password) return displayError(signinErrorP, 'Please enter email and password.');

//     if(signinBtn) {
//         signinBtn.disabled = true;
//         signinBtn.textContent = 'Signing In...';
//     }

//     try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         console.log("Sign in successful:", userCredential.user);
//         alert('Sign in successful!');
//         window.location.href = 'index.html'; // Redirect
//     } catch (error) {
//         console.error("Sign in error:", error.code, error.message);
//         let errorMessage = 'Sign in failed. Check console for details.';
//          // Newer SDK versions consolidate user-not-found and wrong-password into invalid-credential
//         if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
//             errorMessage = 'Invalid email or password.';
//         } else if (error.code === 'auth/invalid-email') {
//             errorMessage = 'Invalid email format.';
//         } else if (error.code === 'auth/too-many-requests') {
//             errorMessage = 'Access disabled due to too many failed attempts. Try again later or reset password.';
//         }
//         displayError(signinErrorP, errorMessage);
//     } finally {
//         if(signinBtn) {
//             signinBtn.disabled = false;
//             signinBtn.textContent = 'Sign In';
//         }
//     }
// };

// // Google Sign In / Sign Up
// const handleGoogleAuth = async () => {
//     clearErrors();
//     const provider = new GoogleAuthProvider();

//     try {
//         const result = await signInWithPopup(auth, provider);
//         const user = result.user;
//         console.log("Google sign-in successful:", user);
//         alert(`Welcome, ${user.displayName || 'User'}!`);
//         window.location.href = 'index.html'; // Redirect
//     } catch (error) {
//         console.error("Google sign-in error:", error.code, error.message);
//         let displayMsg = `Google Sign-In failed. Check console. (${error.code})`;
//         if (error.code === 'auth/popup-closed-by-user') displayMsg = 'Google Sign-In cancelled.';
//         else if (error.code === 'auth/account-exists-with-different-credential') displayMsg = 'Email already exists with a different sign-in method.';

//         // Display error on the currently visible form
//         if (signinForm && !signinForm.classList.contains('hidden')) {
//             displayError(signinErrorP, displayMsg);
//         } else if (signupForm) {
//             displayError(signupErrorP, displayMsg);
//         }
//     }
// };


// // --- Event Listeners ---
// // Add checks to ensure elements exist before adding listeners
// if (signupBtn) signupBtn.addEventListener('click', handleSignUp);
// if (signinBtn) signinBtn.addEventListener('click', handleSignIn);
// if (googleSigninBtn) googleSigninBtn.addEventListener('click', handleGoogleAuth);
// if (googleSignupBtn) googleSignupBtn.addEventListener('click', handleGoogleAuth); // Same function

// // --- Page Load Logic ---
// document.addEventListener('DOMContentLoaded', () => {
//     // Check auth state
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             console.log("User is signed in:", user.uid);
//             // Optional: Redirect if logged in and on login page
//             // if (window.location.pathname.includes('loginPage.html')) {
//             //     window.location.href = 'index.html';
//             // }
//         } else {
//             console.log("User is signed out.");
//             // Fade in elements only if they exist
//             if (authContainer) authContainer.style.opacity = 1;
//             if (logoLink) logoLink.style.opacity = 1;
//             if (animatedIcon) animatedIcon.style.opacity = 1;
//         }
//     });

//     // Clear any initial errors just in case
//     clearErrors();
// });




// // src/JS/login_signupPage.js

// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     GoogleAuthProvider,
//     signInWithPopup,
//     onAuthStateChanged,
//     signOut
// } from "firebase/auth";
// import { auth } from "../config/firebaseConfig";

// // --- DOM Element References ---
// const signinForm = document.getElementById('signin-form');
// const signupForm = document.getElementById('signup-form');
// const authContainer = document.getElementById('auth-container');
// const logoLink = document.getElementById('logo-link');
// const animatedIcon = document.getElementById('animated-icon');

// // Sign In Elements
// const signinEmailInput = document.getElementById('signin-email');
// const signinPasswordInput = document.getElementById('signin-password');
// const signinBtn = document.getElementById('signin-btn');
// const googleSigninBtn = document.getElementById('google-signin-btn');
// const signinErrorP = document.getElementById('signin-error');

// // Sign Up Elements
// const signupNameInput = document.getElementById('signup-name');
// const signupEmailInput = document.getElementById('signup-email');
// const signupPasswordInput = document.getElementById('signup-password');
// const signupConfirmPasswordInput = document.getElementById('signup-confirm-password');
// const privacyCheckbox = document.getElementById('privacy');
// const signupBtn = document.getElementById('signup-btn');
// const googleSignupBtn = document.getElementById('google-signup-btn');
// const signupErrorP = document.getElementById('signup-error');

// // --- Utility Functions ---
// window.toggleForms = () => {
//     signinForm.classList.toggle('hidden');
//     signupForm.classList.toggle('hidden');
//     clearErrors();
// };

// window.togglePasswordVisibility = (fieldId, icon) => {
//     const passwordInput = document.getElementById(fieldId);
//     if (!passwordInput) return;
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         icon.classList.replace("fa-eye", "fa-eye-slash");
//     } else {
//         passwordInput.type = "password";
//         icon.classList.replace("fa-eye-slash", "fa-eye");
//     }
// };

// const displayError = (element, message) => {
//     if (element) element.textContent = message;
// };

// const clearErrors = () => {
//     if (signinErrorP) signinErrorP.textContent = '';
//     if (signupErrorP) signupErrorP.textContent = '';
// };

// // --- Auth Handlers ---
// const handleSignUp = async (event) => {
//     event.preventDefault();
//     clearErrors();

//     const name = signupNameInput?.value.trim();
//     const email = signupEmailInput?.value.trim();
//     const password = signupPasswordInput?.value;
//     const confirmPassword = signupConfirmPasswordInput?.value;
//     const isPrivacyChecked = privacyCheckbox?.checked;

//     if (!name) return displayError(signupErrorP, 'Please enter your full name.');
//     if (!email) return displayError(signupErrorP, 'Please enter your email.');
//     if (!password) return displayError(signupErrorP, 'Please enter a password.');
//     if (password.length < 6) return displayError(signupErrorP, 'Password must be at least 6 characters.');
//     if (password !== confirmPassword) return displayError(signupErrorP, 'Passwords do not match.');
//     if (!isPrivacyChecked) return displayError(signupErrorP, 'Please agree to the Privacy Policy.');

//     try {
//         await createUserWithEmailAndPassword(auth, email, password);
//         alert('Sign up successful! You can now sign in.');
//         toggleForms(); // Switch to sign-in after success
//     } catch (error) {
//         displayError(signupErrorP, error.message);
//     }
// };

// const handleSignIn = async (event) => {
//     event.preventDefault();
//     clearErrors();

//     const email = signinEmailInput?.value.trim();
//     const password = signinPasswordInput?.value;

//     if (!email || !password) {
//         return displayError(signinErrorP, 'Please enter both email and password.');
//     }

//     try {
//         await signInWithEmailAndPassword(auth, email, password);
//         alert('Sign in successful!');
//         window.location.href = "index.html"; // Change to your dashboard/home page
//     } catch (error) {
//         displayError(signinErrorP, error.message);
//     }
// };

// // --- Google Auth ---
// const handleGoogleSignIn = async () => {
//     try {
//         const provider = new GoogleAuthProvider();
//         await signInWithPopup(auth, provider);
//         alert('Google sign-in successful!');
//         window.location.href = "index.html";
//     } catch (error) {
//         displayError(signinErrorP, error.message);
//     }
// };

// const handleGoogleSignUp = async () => {
//     try {
//         const provider = new GoogleAuthProvider();
//         await signInWithPopup(auth, provider);
//         alert('Google sign-up successful!');
//         window.location.href = "index.html";
//     } catch (error) {
//         displayError(signupErrorP, error.message);
//     }
// };

// // --- Fade-in Animations ---
// window.addEventListener("load", () => {
//     authContainer.style.opacity = 1;
//     logoLink.style.opacity = 1;
//     animatedIcon.style.opacity = 1;
// });

// // --- Event Listeners ---
// signupBtn?.addEventListener("click", handleSignUp);
// signinBtn?.addEventListener("click", handleSignIn);
// googleSigninBtn?.addEventListener("click", handleGoogleSignIn);
// googleSignupBtn?.addEventListener("click", handleGoogleSignUp);

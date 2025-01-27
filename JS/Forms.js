const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
});

const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    alert('Login successful! Redirecting you to the dashboard.');
});

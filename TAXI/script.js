function switchRole(role) {
    const userForm = document.getElementById('userLoginForm');
    const adminForm = document.getElementById('adminLoginForm');
    const roleBtns = document.querySelectorAll('.role-btn');

    if (role === 'admin') {
        userForm.classList.add('hidden');
        adminForm.classList.remove('hidden');
        adminForm.classList.add('fade-in');
        roleBtns[0].classList.remove('active');
        roleBtns[1].classList.add('active');
    } else {
        adminForm.classList.add('hidden');
        userForm.classList.remove('hidden');
        userForm.classList.add('fade-in');
        roleBtns[1].classList.remove('active');
        roleBtns[0].classList.add('active');
    }
}

function showRegister() {
    document.getElementById('userLoginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('fade-in');
}

function showLogin() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('forgotForm').classList.add('hidden');
    document.getElementById('adminLoginForm').classList.add('hidden');
    document.getElementById('userLoginForm').classList.remove('hidden');
    document.getElementById('userLoginForm').classList.add('fade-in');

    // Reset role buttons
    document.querySelectorAll('.role-btn')[0].classList.add('active');
    document.querySelectorAll('.role-btn')[1].classList.remove('active');
}

function showForgotPassword() {
    document.getElementById('userLoginForm').classList.add('hidden');
    document.getElementById('adminLoginForm').classList.add('hidden');
    document.getElementById('forgotForm').classList.remove('hidden');
    document.getElementById('forgotForm').classList.add('fade-in');
}

function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function handleLogin(event, type) {
    event.preventDefault();
    const btn = event.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert(type === 'admin' ? 'Welcome, Admin!' : 'Welcome back!');
    }, 1500);
}

function handleRegister(event) {
    event.preventDefault();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const btn = event.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('Account created successfully! Please sign in.');
        showLogin();
    }, 1500);
}

function handleForgotPassword(event) {
    event.preventDefault();
    const btn = event.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        document.getElementById('successMsg').style.display = 'flex';
        setTimeout(() => {
            document.getElementById('successMsg').style.display = 'none';
            showLogin();
        }, 3000);
    }, 1500);
}

// Add input animations
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

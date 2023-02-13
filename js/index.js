document.getElementById('submit-home').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passField = document.getElementById('pass');
    const password = passField.value;
    if (email === 'mahabub@p.com' && password === 'mahabub') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid');
    }
});
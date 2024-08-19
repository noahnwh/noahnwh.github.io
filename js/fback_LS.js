    function recaptchaCallback() {
        document.getElementById('captchaBtn').disabled = false;
    }

    function saveFormData() {
        localStorage.setItem('name', document.getElementById('name').value);
        localStorage.setItem('phone', document.getElementById('phone').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('feedback', document.getElementById('feedback').value);
    }

    // Function to load form data from localStorage
    function loadFormData() {
        document.getElementById('name').value = localStorage.getItem('name') || '';
        document.getElementById('phone').value = localStorage.getItem('phone') || '';
        document.getElementById('email').value = localStorage.getItem('email') || '';
        document.getElementById('feedback').value = localStorage.getItem('feedback') || '';
    }

    // Load saved data when the page loads
    window.onload = loadFormData;

    // Save data as the user types
    document.getElementById('name').addEventListener('input', saveFormData);
    document.getElementById('phone').addEventListener('input', saveFormData);
    document.getElementById('email').addEventListener('input', saveFormData);
    document.getElementById('feedback').addEventListener('input', saveFormData);

    // Clear localStorage on form submission
    document.querySelector('form').addEventListener('submit', function() {
        localStorage.removeItem('name');
        localStorage.removeItem('phone');
        localStorage.removeItem('email');
        localStorage.removeItem('feedback');
    });
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        clearErrors();

        let isValid = true;

        // 1. Patient Name Validation
        const patientName = document.getElementById('patientName');
        if (!patientName.value.trim() || !/^[A-Za-z\s]{2,50}$/.test(patientName.value.trim())) {
            showError(patientName, 'Please enter a valid name (letters and spaces only, 2-50 characters).');
            isValid = false;
        }

        // 2. Patient ID Validation
        const patientId = document.getElementById('patientId');
        if (!patientId.value.trim() || !/^[A-Za-z0-9\-_]{3,20}$/.test(patientId.value.trim())) {
            showError(patientId, 'Patient ID must be 3-20 alphanumeric characters.');
            isValid = false;
        }

        // 3. Age Validation
        const age = document.getElementById('age');
        const ageValue = parseInt(age.value, 10);
        if (isNaN(ageValue) || ageValue < 1 || ageValue > 120) {
            showError(age, 'Please enter a valid age between 1 and 120.');
            isValid = false;
        }

        // 4. Gender Selection Validation
        const gender = document.getElementById('gender');
        if (!gender.value) {
            showError(gender, 'Please select a gender.');
            isValid = false;
        }

        // 5. Mobile Number Validation (10 digits)
        const mobile = document.getElementById('mobile');
        if (!/^\d{10}$/.test(mobile.value.trim())) {
            showError(mobile, 'Please enter a valid 10-digit mobile number.');
            isValid = false;
        }

        // 6. Email Address Validation
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            showError(email, 'Please enter a valid email address.');
            isValid = false;
        }

        // 7. Doctor Name Validation
        const doctorName = document.getElementById('doctorName');
        if (!doctorName.value.trim() || !/^[A-Za-z\s.]{2,50}$/.test(doctorName.value.trim())) {
            showError(doctorName, 'Please enter a valid doctor name.');
            isValid = false;
        }

        // 8. Test Date Validation
        const testDate = document.getElementById('testDate');
        if (!testDate.value) {
            showError(testDate, 'Please select a valid test date.');
            isValid = false;
        }

        // Prevent form submission if any field fails validation
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Helper function to display error styling and messages
    function showError(inputElement, message) {
        inputElement.style.borderColor = 'red';

        const errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.style.color = 'red';
        errorSpan.style.fontSize = '12px';
        errorSpan.style.display = 'block';
        errorSpan.style.marginTop = '4px';
        errorSpan.innerText = message;

        inputElement.parentNode.appendChild(errorSpan);
    }

    // Helper function to clear previous error messages and reset field borders
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach((msg) => msg.remove());

        const inputs = form.querySelectorAll('input, select');
        inputs.forEach((input) => {
            input.style.borderColor = '';
        });
    }
});
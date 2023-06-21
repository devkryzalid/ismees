document.addEventListener('DOMContentLoaded', () => {
    const openFormButton = document.querySelector(".subscribe-button");
    const form = document.getElementById('subscriptionForm');
    const footerForm = document.querySelector(".footer-form");
    const footer = document.querySelector(".footer");
    let formHeight;
    const fields = ['name', 'surname', 'email', 'establishment'];

    const patterns = {
        name: /^[a-zA-ZÀ-ÿ]+$/,
        surname: /^[a-zA-ZÀ-ÿ]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        establishment: /^[a-zA-ZÀ-ÿ0-9\s]+$/
    };

    function validateField(id) {
        const input = document.getElementById(id);
        const error = document.getElementById(id + 'Error');
        const pattern = patterns[id];

        if (!pattern.test(input.value) && input.value !== "") {
            error.style.display = "block";
            return false;
        } else {
            error.style.display = "none";
            return true;
        }
    }

    function validateForm() {
        const nameValid = validateField('name');
        const surnameValid = validateField('surname');
        const emailValid = validateField('email');
        const establishmentValid = validateField('establishment');

        return nameValid && surnameValid && emailValid && establishmentValid;
    }

    async function submitForm() {
        const formData = new FormData(document.getElementById('subscriptionForm'));

        try {
            // const response = await fetch('path/to/your/endpoint', {
            //     method: 'POST',
            //     body: formData
            // });

            // if (response.ok) {
                console.log(formData);
            // } else {
            //     console.error('Failed to submit form.');
            // }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    fields.forEach((fieldId) => {
        const field = document.getElementById(fieldId);
        field.addEventListener('blur', () => validateField(fieldId));
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (validateForm()) {
            await submitForm();
        }
    });

    // TOGGLE THE FORM

    if (!formHeight) {
        form.style.height = 'auto';
        formHeight = form.offsetHeight;
        form.style.height = '0';
    }

    openFormButton.addEventListener('click', function () {

        if (form.style.height !== '0px') {
            form.style.height = '0';
            footerForm.classList.remove("-show");
        } else {
            form.style.height = formHeight + 'px';
            footerForm.classList.add("-show");
        }
    });
});
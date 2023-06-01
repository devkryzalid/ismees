import '../partials/header-reverse';
import '../partials/cards/activity-card';
import AjaxForm from '../utils/ajax';
import moreLessButton from '../partials/cards/activity-card';

document.addEventListener("DOMContentLoaded", () => {
    const ajax = new AjaxForm();
    new moreLessButton();

    const url = window.location.origin;

    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Function to return the right month names array based on the URL
    const getMonthNames = (url) => {
        if(url.includes('/en')) {
            return monthNamesEn;
        } else {
            return monthNames;
        }
    };

    getMonthNames(url);

    const prevButton = document.querySelector('#button-previous');
    const nextButton = document.querySelector('#button-next');
    const prevDate = prevButton.dataset.previousDate;
    let dateInput = document.querySelector('#date');
    const label = document.querySelector('.checkbox-ctn');
    const dateLabel = document.getElementById('date-label');

    // Creates and returns a new checkbox element with given value
    function createCheckbox(value) {
        let newCheckbox = document.createElement('input');
        newCheckbox.type = "checkbox";
        newCheckbox.name = "date";
        newCheckbox.value = value;
        newCheckbox.id = "date";
        newCheckbox.dataset.name = "date";
        return newCheckbox;
    }

    // Updates the display of the date based on the provided date value
    function updateDateDisplay(dateValue) {
        let month = parseInt(dateValue.substr(4, 2));
        dateLabel.textContent = monthNames[month - 1];
    }

    // Removes the existing date input and replaces it with a new checkbox
    function updateDateInput(dateValue) {
        dateInput.remove();
        dateInput = createCheckbox(dateValue);
        label.appendChild(dateInput);
        dateInput.click();
    }

    // Changes the date value based on the direction provided (next or prev)
    // Increments the month value if the direction is 'next' and decrements it if 'prev'
    // Handles year increment and decrement when the month value goes beyond 12 or below 1 respectively
    function changeMonth(direction) {
        let year = parseInt(dateInput.value.substr(0, 4));
        let month = parseInt(dateInput.value.substr(4, 2));

        if(direction === 'next') {
            if (++month > 12) {
                month = 1;
                year++;
            }
        } else if(direction === 'prev') {
            if (--month < 1) {
                month = 12;
                year--;
            }
        }

        let dateValue = `${year}${month < 10 ? '0' : ''}${month}`;

        updateDateInput(dateValue);
        updateDateDisplay(dateValue);
        prevButton.classList.toggle('disabled', dateValue <= prevDate);
    }

    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        if(!this.classList.contains('disabled')) {
            changeMonth('prev');
        }
    });

    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        changeMonth('next');
    });

    // Set the initial month display and check disabled condition
    updateDateDisplay(dateInput.value);
    prevButton.classList.toggle('disabled', dateInput.value <= prevDate);
});
document.addEventListener("DOMContentLoaded", () => {
    /********************************* FILTERS DROPDOWN *************************************/

    // Dropdowns filters behavior
    const filterButtons = document.querySelectorAll('.filter-button');

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const filterCtn = e.target.parentNode;
        console.log(e);
        // Prevents the dropdown from opening when triggered by pressing "Enter" key in the input search
        if (e.pointerType || e.type === "touchstart" || e.type === "click") {
            // Close other dropdowns
            filterButtons.forEach(otherFilterButton => {
                if (otherFilterButton !== e.target) {
                    const otherFilterCtn = otherFilterButton.parentNode;
                    otherFilterCtn.classList.remove('-show');
                }
            });

            filterCtn.classList.toggle('-show');
        }
    };

    filterButtons.forEach(filterButton => {
        filterButton.addEventListener('click', handleClick);
        filterButton.addEventListener('focus', handleClick);
        filterButton.addEventListener('touchstart', handleClick);
    });


    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown-filters')) {
            const filterContainers = document.querySelectorAll('.dropdown-filters');
            
            filterContainers.forEach(filterCtn => {
                filterCtn.classList.remove('-show');
            });
        }
    });

    // Add checked class to dropdown when checkbox is checked
    const checkboxInputs = document.querySelectorAll('.filter-ctn input[type="checkbox"]');

    checkboxInputs.forEach((input) => {
        const dropdownContainer = input.closest('.checkbox-ctn');

        if (input.checked) {
            dropdownContainer.classList.add('-checked');
        }

        input.addEventListener('change', () => {

            if (input.checked) {
                dropdownContainer.classList.add('-checked');
            } else {
                dropdownContainer.classList.remove('-checked');
            }

        });
    });
});
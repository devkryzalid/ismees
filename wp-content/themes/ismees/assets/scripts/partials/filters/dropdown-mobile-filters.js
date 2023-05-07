document.addEventListener("DOMContentLoaded", () => {

    // Add the checked class when on load and on click on the radio button

    const typesRadio = document.querySelectorAll('.dropdown-mobile-filters .radio-ctn');
    const selectedIcon = document.querySelector('.selected-icon');
    const selectedText = document.querySelector('.selected-text');
    const filterItems = document.querySelectorAll('.dropdown-mobile-filters .radio-ctn input[type="radio"]');
    const filterCtn = document.querySelector('.dropdown-mobile-filters');
    const filterMobileButton = document.getElementById('filterMobileButton');

    typesRadio.forEach((checkbox) => {
      const input = checkbox.querySelector('input');

      checkbox.addEventListener('click', function() {
        
        typesRadio.forEach((otherCheckbox) => {
          if (otherCheckbox !== checkbox) {
            otherCheckbox.classList.remove('-checked');
          }
        });
        
        if (input.checked) {
          this.classList.add('-checked');
        }
      });

      if (input.checked) {
        checkbox.classList.add('-checked');
      }
    });

    //Create a fake select behavior and push the selected value in a button

    const updateSelected = (item) => {
      if (item.checked) {
        selectedText.textContent = item.dataset.name;
        if (item.dataset.icon) {
            selectedIcon.innerHTML = '<img src="' + item.dataset.icon + '" alt="">';
        } else {
            selectedIcon.innerHTML = '';
        }
      }
    };

    filterItems.forEach((filterItem) => {
      // Update the selected value and icon on page load
      updateSelected(filterItem);

      // Add event listener to update the selected value and icon on change
      filterItem.addEventListener('change', (event) => {
          updateSelected(event.target);
      });
    });

    // Dropdown behavior
    const toggleFilters = (event) => {
      event.preventDefault();
    
      // Check if the event target is the button or a child element of the button    
      if (event.target == filterMobileButton || event.target.parentNode == filterMobileButton) {
        filterCtn.classList.toggle('-show');
      }
    };
    
    // Add an event listener to bind the click event to the button when the DOM is fully loaded
    filterMobileButton.addEventListener('click', toggleFilters);
    filterMobileButton.addEventListener('touchstart', toggleFilters);
    filterMobileButton.addEventListener('focus', toggleFilters);
    
    // Close dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
      
      if (event.target !== filterMobileButton) {
        filterCtn.classList.remove('-show');
      }
    });
});
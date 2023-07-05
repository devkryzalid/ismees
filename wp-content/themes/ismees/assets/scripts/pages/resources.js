import AjaxForm from '../utils/ajax';
import '../partials/filters/dropdown-filters';
import '../partials/filters/dropdown-mobile-filters';

document.addEventListener("DOMContentLoaded", () => {
    // Initialize ajax utils 
    const ajax = new AjaxForm();

    // Handle the filters display when a checkbox is checked
    const filters = document.querySelectorAll('.filter-item input[type="checkbox"]');
    let filtersArray = [];

    // Get the div elements
    const filtersInfoCtn = document.querySelector('.filters-infos-ctn .container');
    const filtersInfoCtnMobile = document.querySelector('.filters-infos-ctn-mobile');
    const filtersInfoDiv = filtersInfoCtn.querySelector('.filters-infos');

    // Function to update display based on viewport size
    const handleWindowResize = () => {
        if (window.innerWidth <= 992) {
            if (!filtersInfoCtnMobile.contains(filtersInfoDiv)) {
                filtersInfoCtnMobile.appendChild(filtersInfoDiv);
            }
        } else {
            if (!filtersInfoCtn.contains(filtersInfoDiv)) {
                filtersInfoCtn.appendChild(filtersInfoDiv);
            }
        }
    };

    // Define display filters function
    const displayFilters = () => {
        // Get the div element with the id 'display-filters'
        const displayFiltersDiv = filtersInfoDiv.querySelector('#display-filters');

        // Clear the div's innerHTML to remove any previous filters
        displayFiltersDiv.innerHTML = '';

        // Loop through the filtersArray and create a span element for each filter
        filtersArray.forEach((filter) => {
            const filterSpan = document.createElement('span');

            filterSpan.innerText = filter.name;

            filterSpan.classList.add('filter');

            // Add a click event listener to the span element to remove the filter when clicked
            filterSpan.addEventListener('click', () => {
                filtersArray = filtersArray.filter((item) => item.id != filter.id);

                document.getElementById(filter.id).click();

                displayFilters();
            });

            displayFiltersDiv.appendChild(filterSpan);
        });
    };

    // Add event listeners to filters
    filters.forEach((filter) => {
        // Add checked filters on page load
        if(filter.checked) { 
            filtersArray.push({
                id: filter.id,
                name: filter.dataset.name,
                taxonomie: filter.name
            });
            displayFilters();
        }

        filter.addEventListener('change', () => {
            if(filter.checked) {
                filtersArray.push({
                    id: filter.id,
                    name : filter.dataset.name,
                    taxonomie: filter.name
                });
                displayFilters();
            } else {
                let removeFilter = filtersArray.filter((item) => item.id != filter.id);
                filtersArray = removeFilter;
                displayFilters();
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', handleWindowResize);

    // Call handleWindowResize on load to handle case where window is already <= 992px on load
    handleWindowResize();
});

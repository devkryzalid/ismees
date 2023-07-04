import AjaxForm from '../utils/ajax';
import '../partials/filters/dropdown-filters';
import '../partials/filters/dropdown-mobile-filters';

document.addEventListener("DOMContentLoaded", () => {
    // Initialize ajax utils 
    const ajax = new AjaxForm();

    /********************************* FILTERS DISPLAY *************************************/


    //Handle the filters display when a checkbox is checked
    const filters = document.querySelectorAll('.filter-item input[type="checkbox"]');
    let filtersArray = [];

    const displayFilters = () => {
        // Get the div element with the id 'display-filters'
        const displayFiltersDiv = document.getElementById('display-filters');

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
    }

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
});
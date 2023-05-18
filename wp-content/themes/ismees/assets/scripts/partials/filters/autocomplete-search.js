// Search with autocomplete behavior

document.addEventListener("DOMContentLoaded", () => {
    // Get DOM elements
    const searchInput = document.getElementById('searchInput');
    const elementsList = document.getElementById('searchResult');
    const searchContainer = document.getElementById('searchContainer');

    // Retrieve and parse the JSON data from the hidden DOM element
    let autoCompleteData = document.getElementById('autoCompleteData');
    let jsonData = JSON.parse(autoCompleteData.textContent);

    // Default message when no results are found
    let noResults = "Aucun résultat pour cette recherche";

    // Function to remove accents from a string
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Event listener for when the value of the search input changes
    const handleSearch = () => { 
        searchInput.addEventListener('input', () => {

            // Get the search input value, lowercased and with accents removed
            let searchInputValue = removeAccents(searchInput.value.toLowerCase());

            // If the search input is at least 3 characters long
            if (searchInput.value.length >= 3) {
                // Filter the JSON data based on the search input
                let filteredData = jsonData.filter((data) => { 
                    return removeAccents(data.title.toLowerCase()).includes(searchInputValue);
                });

                // Clear the list of search results
                elementsList.innerHTML = '';

                // If there are results, add them to the list
                if (filteredData.length > 0) {
                    filteredData.map((data) => {
                        // Remove accents from the title and find the position of the search input
                        let titleNoAccent = removeAccents(data.title);
                        let index = titleNoAccent.toLowerCase().indexOf(searchInputValue);

                        // If the search input is found in the title, highlight it
                        if (index >= 0) {
                            let highlightedTitle = data.title.slice(0, index) + "<strong class='highlight'>" + data.title.slice(index, index + searchInputValue.length) + "</strong>" + data.title.slice(index + searchInputValue.length);
                            return elementsList.innerHTML += `<li class="result"><a href="${data.url}" target="_blank">${highlightedTitle}</a></li>`;
                        }
                    });
                } else {
                    // If there are no results, display a message
                    elementsList.innerHTML += `<p class="searchNoResult">${noResults}</p>`;
                }

                // Show the list of search results
                searchContainer.classList.add('-show');
            } else {
                // If the search input is less than 3 characters long, hide the list of search results and clear it
                searchContainer.classList.remove('-show');
                elementsList.innerHTML = '';
            }
        });
    };

    searchInput.addEventListener('focus', handleSearch);
    searchInput.addEventListener('blur', () => {
        searchContainer.classList.remove('-show');
    });
});
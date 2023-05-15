// Search with autocomplete behavior

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchInput');
    const elementsList = document.getElementById('searchResult');
    const searchContainer = document.getElementById('searchContainer');
    // Get those elements from your twig file
    let autoCompleteData = document.getElementById('autoCompleteData');
    let jsonData = JSON.parse(autoCompleteData.textContent);
 
    let noResults = "Aucun de résultat pour cette recherche";

    // Function to remove accents from a string
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Event listener for when the value of the search input changes
    searchInput.addEventListener('input', () => {
        // Get the search input value, lowercased and with accents removed
        let searchInputValue = removeAccents(searchInput.value.toLowerCase());

        // If the search input is at least 3 characters long => Show the result list otherwise the result is clear and hide.
        if (searchInput.value.length >= 3) {
            // Filter the school data based on the search input
            let filteredData =  jsonData.filter((data) => { 
                return removeAccents(data.title.toLowerCase()).includes(searchInputValue);
            })
            // Clear the result list
            elementsList.innerHTML = '';
            // Add the filtered data to the result list
            if (filteredData.length > 0) {
                filteredData.map((data) => {
                    return elementsList.innerHTML += `<li class="school-filter"><a href="${data.url}" target="_blank">${data.title}</a></li>`;
                });
            } else {
                elementsList.innerHTML += `<p class="searchNoResult">${noResults}</p>`;
            }
            searchContainer.classList.add('-show');
        } else {
            searchContainer.classList.remove('-show');
            elementsList.innerHTML = '';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // FILTER TOGGLER BEHAVIOR
    const toggler = document.getElementById("filtersToggler");
    const togglerContainer = document.getElementById("togglerContainer");
    const sidebar = document.getElementById("sidebarFilters");

    let isFirstLoad = true;

    const resetFilters = () => {
        if (isFirstLoad) {
            isFirstLoad = false;
            return;
        }
        const filtersChecked = document.querySelectorAll('.countable input:checked');
        filtersChecked.forEach(i => { i.click(); });
    };

    toggler.addEventListener('change', function() {
        resetFilters();

        if(this.checked) {
            togglerContainer.classList.add('-checked');
            sidebar.querySelector(".student-filters").style.display = "none";
            sidebar.querySelector(".member-filters").style.display = "flex";
        } else {
            togglerContainer.classList.remove('-checked');
            sidebar.querySelector(".member-filters").style.display = "none";
            sidebar.querySelector(".student-filters").style.display = "flex";
        }
    });

    toggler.dispatchEvent(new Event('change'));

    // FILTERS SIDEBAR TOGGLE

    const closeSidebar = document.querySelectorAll('.close-sidebar');
    const openSidebar = document.getElementById("sidebarOpener");

    openSidebar.addEventListener("click", () => {
        sidebar.classList.add("-show");
    });

    closeSidebar.forEach((button) => {
        button.addEventListener("click", () => {
            sidebar.classList.remove("-show");
        });
    });

    const searchInput = document.getElementById("inputSearch");
    const filledSearch = document.querySelector(".filled");
    const unfilledSearch = document.querySelector(".unfilled");

    searchInput.addEventListener('input', () => {
        if(searchInput.value !== "") {
            filledSearch.style.display = "block";
            unfilledSearch.style.display = "none";
        } else {
            filledSearch.style.display = "none";
            unfilledSearch.style.display = "block";
        }
    });

    filledSearch.addEventListener('click', () => {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event('input'));
    });

    searchInput.dispatchEvent(new Event('input'));
});
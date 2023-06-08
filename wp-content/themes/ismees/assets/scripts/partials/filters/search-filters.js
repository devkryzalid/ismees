document.addEventListener('DOMContentLoaded', () => {
    // FILTER TOGGLER BEHAVIOR
    const toggler = document.getElementById("filtersToggler");
    const togglerContainer = document.getElementById("togglerContainer");
    const sidebar = document.getElementById("sidebarFilters");

    const resetFilters = () => {
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
});
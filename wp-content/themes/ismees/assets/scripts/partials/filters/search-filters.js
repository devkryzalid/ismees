document.addEventListener('DOMContentLoaded', () => {
    // FILTER TOGGLER BEHAVIOR
    const toggler = document.getElementById("filtersToggler");
    const togglerContainer = document.getElementById("togglerContainer");

    toggler.addEventListener('change', function() {
        if(this.checked) {
            togglerContainer.classList.add('-checked');
        } else {
            togglerContainer.classList.remove('-checked');
        }
    });

    toggler.dispatchEvent(new Event('change'));

    // FILTERS SIDEBAR TOGGLE

    const closeSidebar = document.querySelectorAll('.close-sidebar');
    const sidebar = document.getElementById("sidebarFilters");
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
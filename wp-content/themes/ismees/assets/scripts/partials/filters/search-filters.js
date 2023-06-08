document.addEventListener('DOMContentLoaded', () => {
    // FILTER TOGGLER BEHAVIOR
    const toggler = document.getElementById("filtersToggler");
    const togglerContainer = document.getElementById("togglerContainer");

    toggler.addEventListener('change', function() {
        if(this.checked) {
            togglerContainer.classList.add('-checked');

            // Check if the 'member' parameter is already in the URL
            const urlParams = new URLSearchParams(window.location.search);
            if (!urlParams.has('member')) {
                window.history.replaceState({}, document.title, window.location.pathname + '?search=&member=on#resultsList');
                window.location.reload();
            }
        } else {
            togglerContainer.classList.remove('-checked');

            // If the 'member' parameter is in the URL, remove it and reload
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('member')) {
                urlParams.delete('member');
                window.history.replaceState({}, document.title, window.location.pathname + '?#resultsList' + urlParams.toString());
                window.location.reload();
            }
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
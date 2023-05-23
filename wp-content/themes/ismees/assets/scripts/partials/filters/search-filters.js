document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById("filtersToggler");
    const togglerContainer = document.getElementById("togglerContainer");

    toggler.addEventListener('change', function() {
        if(this.checked) {
            togglerContainer.classList.add('-checked');
        } else {
            togglerContainer.classList.remove('-checked');
        }
    });
    
});
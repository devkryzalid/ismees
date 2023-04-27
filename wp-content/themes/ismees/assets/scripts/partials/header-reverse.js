document.addEventListener("DOMContentLoaded", () => {

    // ********* Add reverse header behavior in the page ********* //

    const header = document.getElementById('header');
    const primaryMenuItems = document.querySelectorAll('#primary-menu .main-item');

    header.classList.add('-reverse-header');

    primaryMenuItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            header.classList.remove('-reverse-header');
        });

        item.addEventListener('mouseleave', () => {
            header.classList.add('-reverse-header');
        });
    });
});
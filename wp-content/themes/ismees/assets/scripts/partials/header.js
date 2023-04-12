document.addEventListener("DOMContentLoaded", () => {

    // ********* Display / Hide menu mobile ********* //

    const mobileMenu = () => {
        const menuBurger = document.querySelectorAll(".burger-menu");
        const menuMobile = document.getElementById("header");

        menuBurger.forEach((button) => {
            button.addEventListener("click", () => {
                menuMobile.classList.toggle("-open");
            });
        });
    }

    mobileMenu();

    // ********* Sticky Header Behavior ********* //

    const header = document.getElementById('header');

    previousScrollPosition = 0;

    document.addEventListener('scroll', () => {

        if(window.scrollY >= 50) {
            header.classList.add("-sticky");

            const stickyHeader = document.querySelector('.-sticky');
            const stickyHeaderHeight = stickyHeader.offsetHeight + 'px';

            // Hide header on scroll down and show it on scroll up
            if (window.scrollY >= previousScrollPosition) {
                header.style.top = `-${stickyHeaderHeight}`;
                previousScrollPosition = window.scrollY;
            } else {
                document.body.classList.contains('customize-support') ? header.style.top = '32px' : header.style.top = '0';
                previousScrollPosition = window.scrollY;
            }

        } else {
            header.classList.remove("-sticky");
        }
    });
});
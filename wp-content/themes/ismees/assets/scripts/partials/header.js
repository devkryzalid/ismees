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

        if(window.scrollY >= 10) {
            header.classList.add("-sticky");
            header.classList.remove("-not-sticky");

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
            header.classList.add("-not-sticky");
        }
    });

    // ********* Set sub menu alignment with its parent ********* //

    const menuMainItems = document.querySelectorAll("#primary-menu .menu-item-has-children.main-item");

    window.addEventListener('resize', () => {
        menuMainItems.forEach((item) => {
            const menuSubItems = item.querySelector(".child-menu");
            let marginItems = item.getBoundingClientRect().x;

            window.innerWidth > 992 ? menuSubItems.style.paddingLeft = `${marginItems}px` : menuSubItems.style.paddingLeft = '0px';    
        });
    });

    window.dispatchEvent(new Event("resize"));
    window.dispatchEvent(new Event("scroll"));

    // ********* White background on the header when user hover the menu dropdown ********* //

    const primaryMenuItems = document.querySelectorAll('#primary-menu .main-item');

    primaryMenuItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            header.classList.add('-white-background');
        });

        item.addEventListener('mouseleave', () => {
            header.classList.remove('-white-background');
        });
    });
});
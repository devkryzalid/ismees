document.addEventListener("DOMContentLoaded", () => {

    const baseUrl = window.location.origin;
    const childMenus = document.querySelectorAll('.child-menu');
    const header = document.getElementById('header');
    const menuMainItems = document.querySelectorAll("#primary-menu .menu-item-has-children.main-item");
    const primaryMenuItems = document.querySelectorAll('#primary-menu .main-item');


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

    // Create the primary menu arrows
    menuMainItems.forEach((item, index) => {
        const menuSubItems = item.querySelector(".child-menu");
        // Create header arrows starting at the second element
        if (index !== 0) {
            let img = document.createElement('img');
            img.src = `${baseUrl}/wp-content/themes/ismees/assets/images/header-arrows.svg`;
            img.className = 'header-arrows';
            menuSubItems.appendChild(img);
        }
    });

    window.addEventListener('resize', () => {
        menuMainItems.forEach((item, index) => {
            const menuSubItems = item.querySelector(".child-menu");
            let marginItems = item.getBoundingClientRect().x;

            window.innerWidth > 992 ? menuSubItems.style.paddingLeft = `${marginItems}px` : menuSubItems.style.paddingLeft = '0px';

            // Adjust arrows position
            if (index !== 0) {
                const img = item.querySelector(".header-arrows");
                if (img) {
                    img.style.left = `${marginItems - 60}px`;
                }
            }
        });
    });

    window.dispatchEvent(new Event("resize"));
    window.dispatchEvent(new Event("scroll"));


    // ********* White background on the header when user hover the menu dropdown ********* //

    primaryMenuItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            header.classList.add('-white-background');
        });

        item.addEventListener('mouseleave', () => {
            header.classList.remove('-white-background');
        });

    });

    // ********* Open header on click ********* //


    //******* Set style to primary menu if it has sub-children *********//

    // Select all elements with class .child-menu

    // Iterate over all selected elements
    childMenus.forEach(function(childMenu) {
        // If the childMenu has a descendant with class .has-sub-child
        if (childMenu.querySelector('.has-sub-child')) {
            childMenu.style.display = 'flex';

            if (window.innerWidth <= 992) {
                childMenu.style.gap = '30px';
            }

            window.addEventListener('resize', function() {
                if (window.innerWidth <= 992) {
                    childMenu.style.gap = '30px';
                } else {
                    childMenu.style.gap = '0';
                }
            });
        }
    });
});
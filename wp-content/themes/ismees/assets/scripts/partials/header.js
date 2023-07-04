document.addEventListener("DOMContentLoaded", () => {

    const baseUrl = window.location.origin;
    const childMenus = document.querySelectorAll('.child-menu');
    const header = document.getElementById('header');
    const menuMainItems = document.querySelectorAll("#primary-menu .menu-item-has-children.main-item");
    const primaryMenuItems = document.querySelectorAll('#primary-menu .main-item');

    let previousScrollPosition = 0;

    // Define click handler as a named function
    const titleClickHandler = function(event) {
        event.preventDefault();
        event.stopPropagation();

        let subMenu = this.nextElementSibling;
        if (subMenu.style.maxHeight !== '0px') {
            subMenu.style.maxHeight = '0px';
            this.classList.remove('-show');
        } else {
            subMenu.style.maxHeight = subMenu.dataset.scrollHeight;
            this.classList.add('-show');
        }
    }

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

    // ********* Add dropdown inside the sidebar menu ********* //

    // Calculate the subchildmenus initial height on load
    const mobileDropdowns = () => {
        let subChildMenus = document.querySelectorAll('.subChild-menu');

        if(window.innerWidth <= 1280) {
            subChildMenus.forEach((menu) => {
              menu.style.maxHeight = 'none';
              menu.dataset.scrollHeight = menu.scrollHeight + 'px';
              menu.style.maxHeight = '0px';
            });
          
            let titles = document.querySelectorAll('.has-sub-child-title');
            
            titles.forEach((title) => {
                // Remove previous click event listener
                title.removeEventListener('click', titleClickHandler);
                // Add new click event listener
                title.addEventListener('click', titleClickHandler);
            });
        } else {
            subChildMenus.forEach((menu) => {
                menu.style.maxHeight = 'none';
            });
        }
    }      

    mobileDropdowns();

    window.addEventListener('resize', mobileDropdowns);

    // ********* Sticky Header Behavior ********* //

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

            window.innerWidth > 1280 ? menuSubItems.style.paddingLeft = `${marginItems}px` : menuSubItems.style.paddingLeft = '0px';

            // Adjust arrows position
            if (index !== 0) {
                const img = item.querySelector(".header-arrows");
                if (img) {
                    img.style.left = `${marginItems - 60}px`;
                }
            }
        });
    });

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

    // Iterate over all selected elements
    childMenus.forEach(function(childMenu) {
        // If the childMenu has a descendant with class .has-sub-child
        if (childMenu.querySelector('.has-sub-child')) {
            childMenu.style.display = 'flex';
        }
    });

    window.dispatchEvent(new Event("resize"));
    window.dispatchEvent(new Event("scroll"));
});

// Use the class anchor for each anchors you have
// Use the class anchor-section for each section refered by anchors

document.addEventListener('DOMContentLoaded', () => {
    const offset = 200; // Change this value as needed

    let navigationLinks = document.querySelectorAll('.anchor');
    let navigationOrder = document.querySelectorAll('.anchor-number');

    window.addEventListener('scroll', function(){
        let sections = document.querySelectorAll('.anchor-section');

        sections.forEach((section, index) => {
            let rect = section.getBoundingClientRect();

            if(rect.top <= offset && rect.bottom >= offset){
                // Add the bold behavior on the numbers if it exists
                if (navigationOrder.length > 0) {
                    navigationOrder.forEach((navLink) => { 
                        navLink.style.fontWeight = ''; 
                    });
                    navigationOrder[index].style.fontWeight = 'bold';
                }
                navigationLinks.forEach((navLink) => { 
                    navLink.style.fontWeight = ''; 
                });
                navigationLinks[index].style.fontWeight = 'bold';
            }
        });
    });
});

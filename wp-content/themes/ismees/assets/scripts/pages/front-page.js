import '../partials/horizontal-slider';
import '../partials/banners/home-banner';

document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll('.home-cta');

    // INCREASE THE WIDTH OF THE IMAGE AND THE COLUMN OF THE HOVERED COLUMN
    // REDUCE THE WIDTH OF THE OTHER
    // ONLY ON DESKTOP
    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 993) {

            columns.forEach((column) => {
                const columnImage = column.querySelector('.img-ctn img');
                let columnImageWidth = columnImage.offsetWidth;
            
                column.addEventListener('mouseover', () => {
                    // Change the width of the hovered column
                    column.style.width = "57%";
                    columnImage.style.width = `calc(${columnImageWidth}px + ${columnImageWidth * 0.3}px)`;
            
                    // Change the width of other columns
                    columns.forEach((otherColumn) => {
                        if(otherColumn !== column) {
                            otherColumn.style.width = "43%";
                        }
                    });
                });
                
                // Reset the width of the columns
                column.addEventListener('mouseleave', () => {
                    column.style.width = "";
                    columnImage.style.width = "";
            
                    columns.forEach((otherColumn) => {
                        if(otherColumn !== column){
                            otherColumn.style.width = "";
                        }
                    });
                });
            });
        }
    });

    window.dispatchEvent(new Event("resize"));
});
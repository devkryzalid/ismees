import '../partials/horizontal-slider';
import '../partials/banners/home-banner';

document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll('.home-cta');

    // INCREASE THE WIDTH OF THE IMAGE AND THE COLUMN OF THE HOVERED COLUMN
    // REDUCE THE WIDTH OF THE OTHER
    // ONLY ON DESKTOP

    window.addEventListener('resize', () => {
        // Recalculate the initial widths on each resize
        const introduction = document.querySelectorAll('.home-cta .introduction');
        
        introduction.forEach((intro) => {
            intro.style.width = "";
        });

        const initialIntroWidths = Array.from(columns).map(column => column.querySelector('.introduction').offsetWidth);

        if (window.innerWidth >= 993) {
            columns.forEach((column, index) => {
                const columnImage = column.querySelector('.img-ctn img');
                let columnImageWidth = columnImage.offsetWidth;

                const intro = column.querySelector('.introduction');
                
                // Set the width of the .introduction element to its current value
                intro.style.width = `${initialIntroWidths[index]}px`;

                column.addEventListener('mouseover', () => {
                    column.style.width = "57%";
                    columnImage.style.width = `calc(${columnImageWidth}px + ${columnImageWidth * 0.3}px)`;

                    columns.forEach((otherColumn) => {
                        const otherColumnImage = otherColumn.querySelector('.img-ctn img');

                        if (otherColumn !== column) {
                            otherColumn.style.width = "43%";
                            otherColumnImage.style.width = `calc(${columnImageWidth}px - ${columnImageWidth * 0.3}px)`;
                        }
                    });
                });

                column.addEventListener('mouseleave', () => {
                    column.style.width = "";
                    columnImage.style.width = "";

                    columns.forEach((otherColumn) => {
                        const otherColumnImage = otherColumn.querySelector('.img-ctn img');

                        if (otherColumn !== column){
                            otherColumn.style.width = "";
                            otherColumnImage.style.width = "";
                        }
                    });
                });
            });
        }
    });

    // Trigger the resize event to calculate the initial widths when the page loads
    window.dispatchEvent(new Event("resize"));
});

import '../partials/horizontal-slider';
import '../partials/banners/home-banner';

document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll('.home-cta');
    let currentTimeout;

    // INCREASE THE WIDTH OF THE IMAGE AND THE COLUMN OF THE HOVERED COLUMN
    // REDUCE THE WIDTH OF THE OTHER
    // ONLY ON DESKTOP
    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 993) {
            columns.forEach((column) => {
                const columnImage = column.querySelector('.img-ctn img');
                let columnImageWidth = columnImage.offsetWidth;
                
                const intro = column.querySelector('.introduction');
                let initialIntroWidth = intro.offsetWidth;

                column.addEventListener('mouseover', () => {
                    column.style.width = "57%";
                    columnImage.style.width = `calc(${columnImageWidth}px + ${columnImageWidth * 0.3}px)`;
                    intro.style.width = `${initialIntroWidth}px`;

                    columns.forEach((otherColumn) => {
                        if (otherColumn !== column) {
                            otherColumn.style.width = "43%";
                            otherColumn.querySelector('.introduction').style.width = "";
                        }
                    });
                });

                column.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        intro.style.width = "";
                    }, 400);

                    column.style.width = "";
                    columnImage.style.width = "";

                    columns.forEach((otherColumn) => {
                        if (otherColumn !== column){
                            otherColumn.style.width = "";
                        }
                    });
                });
            });
        }
    });

    window.dispatchEvent(new Event("resize"));
});
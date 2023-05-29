import '../partials/horizontal-slider'

document.addEventListener("DOMContentLoaded", () => {
    const columns = document.querySelectorAll('.ctas-column');
    const baseUrl = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');

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


    // SET THE HOMEPAGE IMAGES ANIMATION

    // Image sources. You can add more overlays and images if you need.
    const images = [
        {
            banner: 'http://ismees.local/wp-content/themes/ismees/assets/images/home-images/slide-01.png',
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-1.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-asterisque.svg`
            ]
        },
        {
            banner: 'http://ismees.local/wp-content/themes/ismees/assets/images/home-images/slide-02.png',
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-etoile.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-2.svg`,
            ]
        },
        {
            banner: 'http://ismees.local/wp-content/themes/ismees/assets/images/home-images/slide-03.png',
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-3.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-asterisque.svg`,
            ]
        },
        {
            banner: 'http://ismees.local/wp-content/themes/ismees/assets/images/home-images/slide-04.png',
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-5.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-asterisque.svg`
            ]
          },
          {
            banner: 'http://ismees.local/wp-content/themes/ismees/assets/images/home-images/slide-05.png',
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-4.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-asterisque.svg`
            ]
          },
    ];

    //Set the background color of the before element for each image => it must be set in the SCSS file with a new class
    const colorClasses = ['-yellow', '-mint', '-blue', '-salmon','-purple'];
  
    let currentImageIndex = 0;
    const bannerImage = document.getElementById('bannerImageCtn');

    function changeImage() {
        // Remove the old image
        while (bannerImage.firstChild) {
            bannerImage.firstChild.remove();
        }

        // Remove old color classes and add new one
        colorClasses.forEach((colorClass) => {
            bannerImage.classList.remove(colorClass);
        });
        bannerImage.classList.add(colorClasses[currentImageIndex % colorClasses.length]);

        // Create a new image
        const newImage = document.createElement('img');
        newImage.src = images[currentImageIndex].banner;
        newImage.classList.add('banner-img');
        bannerImage.appendChild(newImage);

        // Create overlay images
        images[currentImageIndex].overlays.forEach((overlayImage, index) => {
            const newOverlayImage = document.createElement('img');
            newOverlayImage.src = overlayImage;
            newOverlayImage.classList.add(`overlay-image`);
            newOverlayImage.classList.add(`overlay-image__${currentImageIndex}-${index}`);
            bannerImage.appendChild(newOverlayImage);
        });

        // Prepare the index for the next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Call the function immediately to change the image when the page loads
    changeImage();

    // Adjust the interval here
    setInterval(changeImage, 4000);
});
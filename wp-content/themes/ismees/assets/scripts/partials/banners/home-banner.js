document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = window.location.origin;
    const bannerImageCtn = document.getElementById('bannerImageCtn');
    let bannerImageCtnWidth;

    // FIX THE WIDTH OF THE BANNER CONTAINER
    setTimeout(() => {
        bannerImageCtnWidth = bannerImageCtn.offsetWidth;

        window.dispatchEvent(new Event("resize"));
    }, 1000);

    window.addEventListener('resize', () => {
        bannerImageCtn.style.width = "";
        bannerImageCtnWidth = bannerImageCtn.offsetWidth;
        bannerImageCtn.style.width = `${bannerImageCtnWidth}px`;
    });

    

    // SET THE HOMEPAGE IMAGES ANIMATION

    // Image sources. You can add more overlays and images if you need.
    const images = [
        {
            banner: `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/slide-01.png`,
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-1.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-asterisque.svg`
            ]
        },
        {
            banner: `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/slide-02.png`,
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-etoile.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-2.svg`,
            ]
        },
        {
            banner: `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/slide-03.png`,
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-3.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-asterisque.svg`,
            ]
        },
        {
            banner: `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/slide-04.png`,
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-5.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-asterisque.svg`
            ]
          },
          {
            banner: `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/slide-05.png`,
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

    const changeImage = () => {
        // Fade out the current images
        const oldImages = Array.from(bannerImage.querySelectorAll('.banner-img'));
        oldImages.forEach((img) => {
            img.classList.add('slide-out');
        });

        // Fade out the current overlay images
        const oldOverlayImages = Array.from(bannerImage.querySelectorAll('.overlay-image'));
        oldOverlayImages.forEach((img) => {
            img.classList.add('slide-out-absolute');
        });

        // Set a delay before removing old images and adding new ones
        setTimeout(() => {
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
                newOverlayImage.classList.add('overlay-image', `overlay-image__${currentImageIndex}-${index}`);
                bannerImage.appendChild(newOverlayImage);
            });

            // Prepare the index for the next image
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 500); // Adjust with the animation time adn ensure it is lightly quicker than the setTiemout below

        // Set a second delay to ensure that the "slide-out" animations complete
        setTimeout(() => {
            // Remove the old images
            oldImages.forEach((img) => {
                img.remove();
            });

            // Remove the old overlay images
            oldOverlayImages.forEach((img) => {
                img.remove();
            });
        }, 600); // Adjust with the "slide-out" animation time
    }

    changeImage();

    setInterval(changeImage, 8000);
});
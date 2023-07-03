// Preload images
const preloadImages = (imageArray, callback) => {
    let imagesLoaded = 0;
    let imagesToLoad = imageArray.length;
    imageArray.forEach(imgSrc => {
        const img = new Image();
        img.onload = function() {
            imagesLoaded++;
            if (imagesLoaded === imagesToLoad) {
                callback(); // callback function to execute after images loaded
            }
        };
        img.src = imgSrc;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = window.location.origin;
    const bannerImageCtn = document.getElementById('bannerImageCtn');
    let imageWidth;

    // FIX THE WIDTH OF THE BANNER CONTAINER
    setTimeout(() => {
        let image = document.querySelector(".banner-img");

        if(image) {
            imageWidth = image.offsetWidth;
            bannerImageCtn.style.width = `${imageWidth}px`;
        }
    }, 2000);

    window.addEventListener('resize', () => {
        let image = document.querySelector(".banner-img");
        if(image) {
            bannerImageCtn.style.width = "";
            imageWidth = image.offsetWidth;
            bannerImageCtn.style.width = `${imageWidth}px`;
        }
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
          {
            banner: `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/slide-06.png`,
            overlays: [
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-etoile.svg`,
                `${baseUrl}/wp-content/themes/ismees/assets/images/home-images/handdraw-ligne-3.svg`
            ]
          },
    ];

    //Set the background color of the before element for each image => it must be set in the SCSS file with a new class
    const colorClasses = ['-yellow', '-mint', '-blue', '-salmon','-purple','-darkGreen'];
  
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
        }, 550); // Adjust with the animation time adn ensure it is lightly quicker than the setTiemout below

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

    // Now the preloading part
    const imagesArray = images.reduce((acc, curr) => {
        return acc.concat(curr.banner, curr.overlays);
    }, []);

    // Call the preloading function
    preloadImages(imagesArray, () => {
        changeImage();
        setInterval(changeImage, 6000);
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = window.location.origin;

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
        const oldImages = Array.from(bannerImage.querySelectorAll('img'));
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
            
            // Remove the old images
            oldImages.forEach((img) => {
                img.remove();
            });
    
            // Remove the old overlay images
            oldOverlayImages.forEach((img) => {
                img.remove();
            });
    
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
        }, 400); // Adjust with the animation time
    }

    // Call the function immediately to change the image when the page loads
    changeImage();

    // Adjust the interval here
    setInterval(changeImage, 4000);
});
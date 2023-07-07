document.addEventListener("DOMContentLoaded", () => {
  const bannerImageCtn = document.getElementById('bannerImageCtn');
  let imageWidth;
  let image = document.querySelector(".banner-placeholder");
  imageWidth = image.offsetWidth;
  bannerImageCtn.style.width = `${imageWidth}px`;

  const animationContainer = document.querySelector('.banner-image-ctn');
  const bannerImages = Array.from(animationContainer.querySelectorAll('.banner-img'));
  const colorArray = ['yellow', 'mint', 'blue', 'salmon', 'purple', 'darkGreen'];

  let currentIndex = 0;

  // Remove all animation classes from all banner images and their overlay images
  const resetAnimationClasses = () => {
    bannerImages.forEach((imageCtn) => {
      imageCtn.classList.remove('slide-out');
      imageCtn.classList.remove('slide-up');
      
      let overlayImages = imageCtn.parentNode.querySelectorAll('.overlay-image');
      overlayImages.forEach((overlayImage) => {
        overlayImage.classList.remove('fade-in-absolute');
        overlayImage.classList.remove('fade-out-absolute');
      });
    });
  };

  // Add slide-in and fade-in classes to a specified banner image and its overlay images
  const slideIn = (index) => {
    bannerImages[index].classList.add('slide-up');
    let overlayImages = bannerImages[index].parentNode.querySelectorAll('.overlay-image');
    overlayImages.forEach((overlayImage) => {
      overlayImage.classList.add('fade-in-absolute');
    });
  };

  // Add slide-out and fade-out classes to a specified banner image and its overlay images
  const slideOut = (index) => {
    let prevIndex = index - 1 >= 0 ? index - 1 : bannerImages.length - 1;
    if (bannerImages[prevIndex]) {
      bannerImages[prevIndex].classList.add('slide-out');
      let overlayImages = bannerImages[prevIndex].parentNode.querySelectorAll('.overlay-image');
      overlayImages.forEach((overlayImage) => {
        overlayImage.classList.add('fade-out-absolute');
      });
    }
  };

  // Change the color class of the animation container based on the current index
  const changeColor = (index) => {
    const colorIndex = (index + colorArray.length - 1) % colorArray.length;
    const previousColorIndex = (colorIndex - 1 + colorArray.length) % colorArray.length;
    animationContainer.classList.add(`-${colorArray[colorIndex]}`);
    animationContainer.classList.remove(`-${colorArray[previousColorIndex]}`);
  };

  // Reset all animations, then starts slide-in and slide-out animations, and schedules a color change
  const startAnimation = () => {
    resetAnimationClasses();
    slideIn(currentIndex);
    slideOut(currentIndex);
    currentIndex = (currentIndex + 1) % bannerImages.length;
    setTimeout(() => {
      changeColor(currentIndex);
    }, 600); // Adjust the delay duration as needed
  };

  // Set the width of the banner container to match the current width of the first image
  const setBannerWidth = () => {
    imageWidth = image.offsetWidth;
    bannerImageCtn.style.width = `${imageWidth}px`;
  };

  // Set the initial width of the banner container
  setBannerWidth();

  // Update the width of the banner container when the window is resized
  window.addEventListener('resize', () => {
    requestAnimationFrame(setBannerWidth);
  });

  // Start the animation once the browser is ready to draw the next frame
  requestAnimationFrame(startAnimation);

  // Repeat the animation every 6 seconds
  setInterval(startAnimation, 6000);
});
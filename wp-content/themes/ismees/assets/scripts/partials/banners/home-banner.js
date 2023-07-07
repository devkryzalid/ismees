window.onload = function() {
  const bannerImageCtn = document.getElementById('bannerImageCtn');
  let imageWidth;

  // Get the first image
  let image = document.querySelector(".banner-placeholder");
  imageWidth = image.offsetWidth;
  bannerImageCtn.style.width = `${imageWidth}px`;

  // Adjust the width of the banner container on window resize
  window.addEventListener('resize', () => {
    bannerImageCtn.style.width = "";
    imageWidth = image.offsetWidth;
    bannerImageCtn.style.width = `${imageWidth}px`;
  });

  const animationContainer = document.querySelector('.banner-image-ctn');
  const bannerImages = Array.from(animationContainer.querySelectorAll('.banner-img'));
  const colorArray = ['yellow', 'mint', 'blue', 'salmon', 'purple', 'darkGreen'];

  let currentIndex = 0;

  // Function to reset animation classes
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

  // Function to slide in an image and its overlay
  const slideIn = (index) => {
    bannerImages[index].classList.add('slide-up');
    let overlayImages = bannerImages[index].parentNode.querySelectorAll('.overlay-image');
    overlayImages.forEach((overlayImage) => {
      overlayImage.classList.add('fade-in-absolute');
    });
  };

  // Function to slide out an image and its overlay
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

  // Function to change the color class of the animation container
  const changeColor = (index) => {
    const colorIndex = (index + colorArray.length - 1) % colorArray.length;
    const previousColorIndex = (colorIndex - 1 + colorArray.length) % colorArray.length;
    // Add new color class
    animationContainer.classList.add(`-${colorArray[colorIndex]}`);
    // Remove old color class
    animationContainer.classList.remove(`-${colorArray[previousColorIndex]}`);
  };

  // Function to start the animation
  const startAnimation = () => {
    resetAnimationClasses();
    slideIn(currentIndex);
    slideOut(currentIndex);
    currentIndex = (currentIndex + 1) % bannerImages.length;
    setTimeout(() => {
      changeColor(currentIndex);
    }, 600); // Adjust the delay duration as needed
  };

  startAnimation();

  // Repeat the animation every 6 seconds
  setInterval(startAnimation, 6000);
};
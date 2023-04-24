import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    startEvent: 'load',
    offset: 100,
    duration: 600,
    easing: 'ease-out-sine',
    delay: 100,
    once: true
  });
});

// Fade animations:
//   fade
//   fade-up
//   fade-down
//   fade-left
//   fade-right
//   fade-up-right
//   fade-up-left
//   fade-down-right
//   fade-down-left

// Flip animations:
//   flip-up
//   flip-down
//   flip-left
//   flip-right

// Slide animations:
//   slide-up
//   slide-down
//   slide-left
//   slide-right

// Zoom animations:
//   zoom-in
//   zoom-in-up
//   zoom-in-down
//   zoom-in-left
//   zoom-in-right
//   zoom-out
//   zoom-out-up
//   zoom-out-down
//   zoom-out-left
//   zoom-out-right

// Easing functions
//   linear
//   ease
//   ease-in
//   ease-out
//   ease-in-out
//   ease-in-back
//   ease-out-back
//   ease-in-out-back
//   ease-in-sine
//   ease-out-sine
//   ease-in-out-sine
//   ease-in-quad
//   ease-out-quad
//   ease-in-out-quad
//   ease-in-cubic
//   ease-out-cubic
//   ease-in-out-cubic
//   ease-in-quart
//   ease-out-quart
//   ease-in-out-quart

import '../partials/header-reverse';

// Change the header button color
document.addEventListener("DOMContentLoaded", function() {
    console.log('ernio');
    let interventionColor = document.getElementById('interventionColor').innerText;
  
    document.documentElement.style.setProperty('--button-color', interventionColor);
  });
  

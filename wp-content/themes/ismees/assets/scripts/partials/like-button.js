document.addEventListener("DOMContentLoaded", function() {
    var likeButton = document.querySelector('.likebtn_container') || document.querySelector('.likebtn-wrapper'); // select the like button by its class
    let targetContainer = document.querySelector('#like-dislike-ctn'); // select the target container by its id

    if(!targetContainer) {
        likeButton.style.display = "none";
    }
    // Move the like button to the target container
    if(likeButton && targetContainer) {
        targetContainer.appendChild(likeButton);
    }
});
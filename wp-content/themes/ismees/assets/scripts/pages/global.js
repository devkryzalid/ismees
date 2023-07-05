document.addEventListener("DOMContentLoaded", () => {

    // Like/dislike button behavior
    // Move the like button to the target container
    // Delete the like button from the DOM if no target container is found

    let likeButton = document.querySelector('.likebtn_container') || document.querySelector('.likebtn-wrapper');
    let targetContainer = document.querySelector('#like-dislike-ctn');

    if (likeButton && targetContainer) {
        targetContainer.appendChild(likeButton);
    } else if (likeButton) {
        likeButton.parentNode.removeChild(likeButton);
    }
});
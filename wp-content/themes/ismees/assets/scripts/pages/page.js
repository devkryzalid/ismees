document.addEventListener("DOMContentLoaded", () => {

    const url = encodeURIComponent(window.location.href);
    const facebookBtn = document.getElementById('facebook');
    const twitterBtn = document.getElementById('twitter');
    const emailBtn = document.getElementById('email');

    const shareFacebook = () => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');
    }

    const shareTwitter = () => {
        window.open('https://twitter.com/intent/tweet?url=' + url, '_blank');
    }

    const shareEmail = () => {
        window.location.href = 'mailto:?body=' + url;
    }

    facebookBtn.addEventListener('click', shareFacebook);
    twitterBtn.addEventListener('click', shareTwitter);
    emailBtn.addEventListener('click', shareEmail);

});
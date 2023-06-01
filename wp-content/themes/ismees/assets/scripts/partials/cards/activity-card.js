export default class moreLessButton {
    constructor(){
        this.initMoreLessButton();
    } 
  
    initMoreLessButton = () => {
        let activityCards = document.querySelectorAll('.activity-card');

        activityCards.forEach((activityCard) => {
            let readMoreButton = activityCard.querySelector('.read-more');
            let readLessButton = activityCard.querySelector('.read-less');
            let informationsDiv = activityCard.querySelector('.informations');
            let gutenbergDiv = activityCard.querySelector('.gutenberg');
            let activityImage = activityCard.querySelector('.image-ctn');

            if (activityImage) {
                var imageHeight = activityImage.offsetHeight;

                window.addEventListener('resize', function() {
                    activityImage.style.height = "";
                    imageHeight = activityImage.offsetHeight;
                });
            }

            if (readLessButton) {
                readLessButton.style.display = 'none';
            }

            if (readMoreButton && readLessButton && informationsDiv && gutenbergDiv) {
                readMoreButton.addEventListener('click', function() {
                    let gutenbergHeight = gutenbergDiv.scrollHeight;
                    informationsDiv.style.height = `${gutenbergHeight}px`;
                    readLessButton.style.display = 'flex';
                    readMoreButton.style.display = 'none';
                    if (activityImage) {
                        imageHeight = activityImage.offsetHeight;
                        console.log('hey');
                        activityImage.style.height = `${imageHeight}px`;
                    }
                });

                readLessButton.addEventListener('click', function() {
                    readMoreButton.style.display = 'flex';
                    readLessButton.style.display = 'none';
                    informationsDiv.style.height = "0";
                });
            }
        });
    }  
}

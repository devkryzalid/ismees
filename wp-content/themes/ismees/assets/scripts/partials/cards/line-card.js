document.addEventListener("DOMContentLoaded", () => {
    const lineCard = document.querySelectorAll(".line-card");

    lineCard.forEach((card) => {
        card.addEventListener('mouseover', (event) => {
            const cardRect = card.getBoundingClientRect();
            const xPercentage = (event.clientX - cardRect.right) / cardRect.width;
            const image = card.querySelector('.image-ctn');

            image.style.top = event.offsetY + "px";

            const minRight = 35;
            const maxRight = 70;
            
            const right = minRight + (maxRight - minRight) * xPercentage;
            image.style.right = `${right}px`;
        });
    });
});
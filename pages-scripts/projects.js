const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const carouselItems = document.querySelectorAll('.project');
const carouselText = document.querySelectorAll('.project-text');

//tracks the current position of the images and the current x position of the images
let currentIndex = 0; 
let currentPosition = 0;

for (let i = 1; i < 5; i++){
    carouselText[i].style.opacity = '0';
}

previousButton.style.opacity = '0';

//moves the image list to the left, shows the text that correspond with the image, and if the index is before last it will hide the next button if pressed
function carouselNext() {

    currentIndex += 1;
    if (currentIndex == 5) {
        currentIndex = 4;
    } else {
        currentPosition -= 500;
        for(let i = 0; i < 5; i++){
            carouselItems[i].style.transform = `translateX(${currentPosition}px)`;
        }
        carouselText[currentIndex - 1].style.opacity = '0';

        carouselText[currentIndex].style.opacity = '1';
        if (currentIndex == 4) {
            nextButton.style.opacity = '0';
        } else if (currentIndex == 1) {
            previousButton.style.opacity = '1';
        }

    }
    console.log(currentIndex);
}

//moves the image list to the right, shows the text that correspond with the image, and if the index is before first it will hide the previous button if pressed

function carouselPrevious() {
    currentIndex -= 1;
    if (currentIndex == -1) {
        currentIndex = 0;
    } else {
        currentPosition += 500;
        for(let i = 0; i < 5; i++){
            carouselItems[i].style.transform = `translateX(${currentPosition}px)`;
        }
        carouselText[currentIndex + 1].style.opacity = '0';

        carouselText[currentIndex].style.opacity = '1';
        if (currentIndex == 3) {
            nextButton.style.opacity = '1';
        } else if (currentIndex == 0) {
            previousButton.style.opacity = '0';
        }
    }
    console.log(currentIndex);

}


const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const carouselItems = document.querySelectorAll('.project');
const carouselText = document.querySelectorAll('.project-text');

let currentIndex = 0;
let currentPosition = 0;

for (let i = 1; i < 5; i++){
    carouselText[i].style.opacity = '0';
}

previousButton.style.opacity = '0';

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


const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');
const carouselItems = document.querySelectorAll('.project');

let currentIndex = 0;
let currentPosition = 0;

function carouselNext() {
    currentIndex -= 1;
    if (currentIndex == -1) {
        currentIndex = 0;
    } else {
        currentPosition += 500;
        for(let i = 0; i < 5; i++){
            carouselItems[i].style.transform = `translateX(${currentPosition}px)`;
        }
    }
    console.log(currentIndex)
}

function carouselPrevious() {
    currentIndex += 1;
    if (currentIndex == 5) {
        currentIndex = 4;
    } else {
        currentPosition -= 500;
        for(let i = 0; i < 5; i++){
            carouselItems[i].style.transform = `translateX(${currentPosition}px)`;
        }
    }
    console.log(currentIndex);
}
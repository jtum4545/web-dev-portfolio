const openButton = document.querySelectorAll('.button');
const curtainLeft = document.querySelector('.curtain-left');
const curtainRight = document.querySelector('.curtain-right');
const images = document.querySelectorAll('.image');

//adds the current index button as gray for user visibilty
openButton[0].style.backgroundColor = 'gray';


openButton.forEach(button => {
  button.addEventListener('click', () => {
    //adds the open class to the curtains
    curtainLeft.classList.add('open');
    curtainRight.classList.add('open');

    //adds the gray background to the button pressed and resets the others. Very inefficient and low scalability but works 
    if(button.classList.contains("1")) {
        openButton[0].style.backgroundColor = 'gray';
        openButton[1].style.backgroundColor = 'white';
        openButton[2].style.backgroundColor = 'white';
    } else if (button.classList.contains("2")) {
        openButton[0].style.backgroundColor = 'white';
        openButton[1].style.backgroundColor = 'gray';
        openButton[2].style.backgroundColor = 'white';
    } else if (button.classList.contains("3")) {
        openButton[0].style.backgroundColor = 'white';
        openButton[1].style.backgroundColor = 'white';
        openButton[2].style.backgroundColor = 'gray';
    } 

    //This code will only run after 3 seconds
    setTimeout(() => {
        //resets to initial state, where all the images are shown in order
        for(let i = 0; i < 3; i++){
            images[i].style.display = 'block';
        }
        //checks which button is pressed, and hides the images that does not correspond to the index
        if(button.classList.contains("1")) {
            images[1].style.display = 'none';
            images[2].style.display = 'none';
        } else if (button.classList.contains("2")) {
            images[0].style.display = 'none';
            images[2].style.display = 'none';
        } else if (button.classList.contains("3")) {
            images[0].style.display = 'none';
            images[1].style.display = 'none';
        } 
    }, 3000);

    //This code will only run after 3 seconds
    setTimeout(() => {
      //removes the open classes to make the images visible
      curtainLeft.classList.remove('open');
      curtainRight.classList.remove('open');
    }, 3000);
  });
});

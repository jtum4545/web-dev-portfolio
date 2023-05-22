const openButton = document.querySelectorAll('.button');
const curtainLeft = document.querySelector('.curtain-left');
const curtainRight = document.querySelector('.curtain-right');
const images = document.querySelectorAll('.image');

openButton[0].style.backgroundColor = 'gray';

openButton.forEach(button => {
  button.addEventListener('click', () => {
    curtainLeft.classList.add('open');
    curtainRight.classList.add('open');
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
    setTimeout(() => {
        for(let i = 0; i < 3; i++){
            images[i].style.display = 'block';
        }
    
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

  
    setTimeout(() => {
      curtainLeft.classList.remove('open');
      curtainRight.classList.remove('open');
    }, 3000);
  });
});

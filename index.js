const visibleElement = document.querySelectorAll('.section, .section-no-height');
//adds the visible class to what element is currently in the user's viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
        entry.target.classList.remove('visible');
    }
  });
});

//tracks the current viewport
visibleElement.forEach(element => {
    observer.observe(element);
});


const cursor = document.querySelector('.cursor');
let links = document.getElementsByTagName('a');
let buttons = document.getElementsByTagName('button');

document.addEventListener('mousemove', function(e) {
   let userMouseX = e.clientX;
   let userMouseY = e.clientY;
   cursor.style.top = userMouseY + 'px';
   cursor.style.left = userMouseX + 'px';
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseover', function() {
    cursor.classList.add('hover');
  });


  links[i].addEventListener('mouseout', function() {
    cursor.classList.remove('hover');
  });

}

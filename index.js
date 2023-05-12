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
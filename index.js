// Get the trigger element
const visibleElement = document.querySelectorAll('.section, .section-no-height');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
        entry.target.classList.remove('visible');
    }
  });
});

// Start observing the trigger element
visibleElement.forEach(element => {
    observer.observe(element);
});
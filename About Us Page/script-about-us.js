  // Smooth scroll to top function (defined globally)
  function scrollingTOP() {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
  }

  // Wait for the page to finish loading
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scrolling-animation').forEach(section => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, { threshold: 0.2 });

      observer.observe(section);
    });

  // Show or hide the scroll to top button based on scroll position
  document.addEventListener("scroll", function () {
      const scrollToTopBtn = document.getElementById("back-to-top-btn");

      // Check if the button exists in the DOM
      if (scrollToTopBtn) {
          // Using if-else loop to check whether the scrolling position is more than 100px from the top of the page
          if (document.documentElement.scrollTop > 100) {
              scrollToTopBtn.style.display = "block"; // if true, display the button
          } else {
              scrollToTopBtn.style.display = "none"; // if false, hide the button
          }
      }
  });
});

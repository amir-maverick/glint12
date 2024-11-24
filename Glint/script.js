document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let current = 0;

      const increment = target / 100;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.innerText = Math.ceil(current);
          setTimeout(updateCounter, 30); // Control the speed of counting
        } else {
          counter.innerText = target; // Ensure it reaches the target
        }
      };

      updateCounter();
    });
  });
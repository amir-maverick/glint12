const wrapper = document.querySelector('.testimonial-wrapper');
    const testimonials = document.querySelectorAll('.testimonial');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    let currentIndex = 0;

    function updateSlider() {
      const offset = -currentIndex * 100; // Calculate offset based on index
      wrapper.style.transform = `translateX(${offset}%)`;
    }

    // Right arrow logic
    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length; // Increment index and loop back
      updateSlider();
    });

    // Left arrow logic
    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Decrement index and loop back
      updateSlider();
    });
    console.log("Slider script loaded!");
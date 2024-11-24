const dots = document.querySelectorAll(".dot");
    const slideContainer = document.querySelector(".logos");
    const slides = document.querySelectorAll(".logos img");
    const imagesPerView = 6; // Number of visible images
    const imageWidth = slides[0].offsetWidth + 20; // Image width + margin
    const totalImages = slides.length;
    let currentIndex = 0; // Start index of visible images

    // Function to update the slider position
    function updateSlider() {
      const offset = -currentIndex * imageWidth;
      slideContainer.style.transform = `translateX(${offset}px)`;
    }

    // Function to loop images (circular rotation)
    function loopImages() {
      if (currentIndex >= totalImages) {
        // Move the first image to the end when reaching the last
        const firstImage = slideContainer.removeChild(slides[0]);
        slideContainer.appendChild(firstImage);
        currentIndex--; // Adjust index
        updateSlider();
      } else if (currentIndex < 0) {
        // Move the last image to the front when reaching the first
        const lastImage = slideContainer.removeChild(slides[totalImages - 1]);
        slideContainer.insertBefore(lastImage, slides[0]);
        currentIndex++; // Adjust index
        updateSlider();
      }
    }

    // Function to handle dot navigation
    function handleDotClick(index) {
      const offset = index - currentIndex;
      currentIndex += offset;

      if (currentIndex < 0 || currentIndex >= totalImages - imagesPerView + 1) {
        loopImages();
      } else {
        updateSlider();
      }

      dots.forEach((dot) => dot.classList.remove("active"));
      dots[currentIndex % dots.length].classList.add("active");
    }

    // Add event listeners to dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => handleDotClick(index));
    });

    // Initial state
    updateSlider();

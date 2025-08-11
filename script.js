function initSlideshow() {
    const slidesContainer = document.querySelector(".abt-imgs");
    if (!slidesContainer) {
        return; 
    }

    let slideIndex = 0;
    let slides = slidesContainer.querySelectorAll(".slide");
    let dotsContainer = slidesContainer.querySelector(".dots");
    let prevButton = slidesContainer.querySelector(".prev");
    let nextButton = slidesContainer.querySelector(".next");
    let timer;

    dotsContainer.innerHTML = ''; 

    function initDots() {
        slides.forEach((_, i) => {
            let dot = document.createElement("span");
            dot.classList.add("dot");
            dot.addEventListener("click", () => showSlide(i));
            dotsContainer.appendChild(dot);
        });
    }

    function showSlide(index) {
        if (slides.length === 0) return;
        slideIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, i) => {
            slide.classList.toggle("active-slide", i === slideIndex);
        });
        dotsContainer.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === slideIndex);
        });
        resetTimer();
    }

    function nextSlide(n) {
        showSlide(slideIndex + n);
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(() => nextSlide(1), 3000);
    }

    if (slides.length > 0) {
        initDots();
        showSlide(0);
        prevButton.addEventListener("click", () => nextSlide(-1));
        nextButton.addEventListener("click", () => nextSlide(1));
    }
}
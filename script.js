let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots")
let timer;

function initDots() {
    slides.forEach((_,i)=>{
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => showSlide(i));
        dotsContainer.appendChild(dot); 
    });
}

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length;

    slides.forEach((slide,i)=> {
        slide.classList.toggle("active-slide", i===slideIndex);
    });

    document.querySelectorAll(".dot").forEach((dot,i)=> {
        dot.classList.toggle("active",i === slideIndex);
    });

    resetTimer();
}

function nextSlide(n){
    showSlide(slideIndex + n);
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(() => nextSlide(1), 3000);
}


initDots();
showSlide(0);
document.querySelector(".prev").addEventListener("click", () => nextSlide(-1));
document.querySelector(".next").addEventListener("click", () => nextSlide(1));

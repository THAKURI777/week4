const track = document.querySelector(".slider-track");

const previousButton =
    document.querySelector("#previous");

const nextButton =
    document.querySelector("#next");

const dotsContainer =
    document.querySelector("#dots");


const slides =
    document.querySelectorAll(".slider-track img");


let currentIndex = 0;



slides.forEach(function(slide, index) {

    const dot =
        document.createElement("button");

    dot.classList.add("dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", function() {

        currentIndex = index;

        updateSlider();

    });

    dotsContainer.appendChild(dot);

});


const dots =
    document.querySelectorAll(".dot");



function updateSlider() {

    track.style.transform =
        "translateX(-" + (currentIndex * 100) + "%)";


    dots.forEach(function(dot, index) {

        dot.classList.remove("active");

        if (index === currentIndex) {
            dot.classList.add("active");
        }

    });

}


nextButton.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    updateSlider();

});



previousButton.addEventListener("click", function() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    updateSlider();

});
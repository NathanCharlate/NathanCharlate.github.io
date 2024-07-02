const previousButton = document.querySelector("#previous-button");
previousButton.addEventListener("click", handlePreviousClick);

const nextButton = document.querySelector("#next-button");
nextButton.addEventListener("click", handleNextClick);

let position = 0;

const images = document.querySelectorAll(".portfolio-slider-img");

function handlePreviousClick() {
    if (position > 0) {
        position--;
    } else {
        position = images.length - 1;
    }

    const currentImage = document.querySelector(".current");
    currentImage.classList.remove("current");
    images[position].classList.add("current");
}

function handleNextClick() {
    if (position < images.length - 1) {
        position++;
    } else {
        position = 0;
    }

    const currentImage = document.querySelector(".current");
    currentImage.classList.remove("current");
    images[position].classList.add("current");
}

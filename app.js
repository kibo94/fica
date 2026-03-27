const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
const sliderImages = document.querySelectorAll(".hero-content img")
const sliderHeading = document.getElementById("slider-heading")
const images = document.getElementById("images")
const textColors = ["rgba(0, 0, 0, 0.5)", "rgba(189, 192, 13, 0.5)", "rgba(219, 28, 28, 0.5)"]
let slide = 0
let isAnimating = false;

sliderImages[0].style.transform = "translateX(0%)"
sliderImages[1].style.transform = "translateX(-100%)"
sliderImages[2].style.transform = "translateX(100%)"

function populateSelectedCar(i) {
    sliderHeading.style.color = textColors[i]
}

populateSelectedCar(0)

leftArrow.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;
    slide--;
    if (slide == -1) {
        slide = sliderImages.length - 1
    }
    sliderImages.forEach(img => {
        let x = +img.style.transform.split("(")[1].slice(0, img.style.transform.split("(")[1].length - 2)
        x = x + 100;
        if (x == 200) {
            img.style.transform = `translateX(-100%)`;
            img.style.opacity = "0"

        }
        else {

            img.style.transform = `translateX(${x}%)`;
            img.style.opacity = "1"
        }
    })
    populateSelectedCar(slide)
    setTimeout(() => {
        isAnimating = false;
    }, 300)
})

rightArrow.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;
    slide++
    if (slide == sliderImages.length) {
        slide = 0

    }

    sliderImages.forEach(img => {
        let x = +img.style.transform.split("(")[1].slice(0, img.style.transform.split("(")[1].length - 2)
        x = x - 100;

        if (x == -200) {


            img.style.transform = `translateX(100%)`;
            img.style.opacity = "0"
        }
        else {
            img.style.transform = `translateX(${x}%)`;
            img.style.opacity = "1"
        }

    })

    setTimeout(() => {
        isAnimating = false;
    }, 300)
    populateSelectedCar(slide)
})
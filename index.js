const mainContainer = document.querySelector(".component-card");
const thanksContainer = document.querySelector(".thank-you-card");
const submitButton = document.getElementById("submit-rating");
const ratings = document.querySelectorAll(".card-btn");
const actualRating = document.getElementById("rating");

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none";
    thanksContainer.classList.remove("hidden");

})

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML;
    })
})
const shareButton = document.querySelector("button");
const shareImg = document.querySelector(".share-img");
const popup = document.querySelector(".popup")


shareButton.addEventListener("click", (e) => {
  shareButton.classList.toggle("active");
  shareImg.classList.toggle("active");
  popup.classList.toggle("active");
});

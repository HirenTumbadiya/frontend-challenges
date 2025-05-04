const shareBtn = document.querySelector(".share-button");
const tooltip = document.querySelector(".share-tooltip");
const authorInfo = document.querySelector(".author");
const cardFooter = document.querySelector(".card__footer");

shareBtn.addEventListener("click", () => {
  tooltip.classList.toggle("hidden");
  authorInfo.classList.toggle("hidden");
  cardFooter.classList.toggle("hidden");
});

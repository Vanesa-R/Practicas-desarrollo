const backgroundShare = document.querySelector(".share");
const shareBtn = document.getElementById("share__btn");
const tooltip = document.querySelector(".tooltip__share");
const icon = document.querySelector(".image__share")


shareBtn.addEventListener("click", (e) => {
   e.preventDefault();
   tooltip.classList.toggle("--show");
   backgroundShare.classList.toggle("--active");
   icon.classList.toggle("--active");
})
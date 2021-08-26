const menuBtn = document.querySelector(".menu__btn");
const close = document.querySelector(".menu__close");
const menu = document.querySelector(".menu__mobile");

menuBtn.addEventListener("click", () => {
       menuBtn.classList.toggle("--close");
       close.classList.toggle("--open");
       menu.classList.toggle("--active");
})

close.addEventListener("click", () => {
        close.classList.toggle("--open");
        menuBtn.classList.toggle("--close");
        menu.classList.toggle("--active");
})
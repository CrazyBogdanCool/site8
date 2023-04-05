const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
burger.addEventListener("click", function() {
    burger.classList.toggle("_open");
    document.body.classList.toggle("_lock");
    menu.classList.toggle("_open");
})
new Swiper(".swiper-container",{
    navigation: {
        nextEl:".arrow__right",
        prevEl:".arrow__left",
    },
});
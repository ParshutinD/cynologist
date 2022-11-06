let acc = document.querySelectorAll(".faq__button");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("faq__button--open");
    let item = this.nextElementSibling;
    if (item.style.display === "none") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

const burger = document.querySelector(".header__btn");
const burgerMenu = document.querySelector(".header__menu");
const body = document.querySelector(".page-body");

burger.addEventListener("click", function () {
  this.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

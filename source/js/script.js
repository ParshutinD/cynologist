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

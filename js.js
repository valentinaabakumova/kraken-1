const ref = {
  myButEl: document.querySelector(".butt"),
  myPicEl: document.querySelector(".hero-img"),
  myTextEl: document.querySelector(".text"),
};

ref.myButEl.addEventListener("click", () => {
  ref.myPicEl.classList.toggle(".new-size");
  //   ref.myPicEl.style.width = "700px";
  //   ref.myTextEl.style.color = "#090979";
  ref.myTextEl.classList.toggle(".new-color");
});

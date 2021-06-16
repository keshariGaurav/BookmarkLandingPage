const btns = document.querySelector(".tab");
const btn = document.querySelectorAll(".btn");
const list = document.querySelectorAll(".features__component");

const question = document.querySelectorAll(".question");

btns.addEventListener("click", (e) => {
  const id = e.target.dataset.tab;

  
  if (id) {
    const doc = document.getElementById(id);
    btn.forEach((b) => {
      b.classList.remove("btn--active");
    });
    e.target.classList.add("btn--active");
    list.forEach((li) => {
      li.classList.remove("active");
    });
    doc.classList.add("active");
  }
});

question.forEach((title) => {
  const paragraph = title.querySelector(".question__text");
  const open = title.querySelector(".button__open");
  const close = title.querySelector(".button__close");
  console.log(close);

  title.addEventListener("click", (e) => {
    open.classList.toggle("show");
    close.classList.toggle("show");
    paragraph.classList.toggle("show");
  });
});

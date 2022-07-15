"use strict";
const title = document.querySelector(".title");
const wrapper = document.querySelector(".wrapper");

function hexBtn(wrapper, title, count) {
  for (let i = 1; i <= count; i++) {
    const btn = document.createElement("div");
    btn.className = "btn";
    btn.style.height = "100px";
    const color = getRandomColor();
    btn.style.background = color;
    btn.style.border = '2px solid black';
    wrapper.append(btn);
    btn.innerText = color;
  }

  const btns = document.getElementsByClassName("btn");

  function css(element, style) {
    for (const property in style) {
      element.style[property] = style[property];
    }
  }

  css(wrapper, {
    display: "grid",
    "grid-template-columns": "1fr 1fr 1fr 1fr 1fr",
    gap: "10px",
  });

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  for (let i = 0; i <= btns.length; i++) {
    btns[i].addEventListener("click", function () {
      title.innerText = btns[i].innerText;
      document.body.style.background = btns[i].style.background;
    });
  }
}

hexBtn(wrapper,title,8);

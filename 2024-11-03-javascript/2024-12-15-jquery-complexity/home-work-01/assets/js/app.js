"use strict";

(function () {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const paragraphs = document.getElementsByTagName("p");

  Array.from(paragraphs).forEach((paragraph) => {
    paragraph.addEventListener("click", function () {
      setTimeout(() => {
        this.style.backgroundColor = getRandomColor();
      }, 1000);
    });
  });
})();

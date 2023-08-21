let button = document.getElementById("no");
let box = document.querySelector(".box");

function moveButton() {
  let boxRect = box.getBoundingClientRect();
  let boxWidth = boxRect.width - button.offsetWidth;
  let boxHeight = boxRect.height - button.offsetHeight;

  let randomLeft = Math.random() * boxWidth;
  let randomTop = Math.random() * boxHeight;

  button.style.position = "absolute";
  button.style.top = randomTop + "px";
  button.style.left = randomLeft + "px";
}

button.addEventListener("mouseover", moveButton);
button.addEventListener("click", moveButton);

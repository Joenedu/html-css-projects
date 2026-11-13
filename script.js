
const box = document.querySelector(".gesture-box");

let isDragging = false;

let startX = 0;
let startY = 0;

let currentX = 0;
let currentY = 0;

box.addEventListener("pointerdown", (event) => {
  isDragging = true;

  box.setPointerCapture(event.pointerId);

  startX = event.clientX - currentX;
  startY = event.clientY - currentY;

  box.style.cursor = "grabbing";
});

box.addEventListener("pointermove", (event) => {

  if (!isDragging) return;

  currentX = event.clientX - startX;
  currentY = event.clientY - startY;

  box.style.transform =
    `translate(${currentX}px, ${currentY}px)`;

});

box.addEventListener("pointerup", () => {
  isDragging = false;
  box.style.cursor = "grab";
});

box.addEventListener("pointercancel", () => {
  isDragging = false;
  box.style.cursor = "grab";
});

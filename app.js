const canvas = document.getElementById("JScanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;
let painting = false;

ctx.strokeStyle = "##2c2c2c";
ctx.lineWidth = 2.5;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    console.log("creating line in");
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  startPainting();
}

function onMouseUp(event) {
  stopPainting();
}
function handleColorClick(evenr) {
  console.log(event.target.style);
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting());
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

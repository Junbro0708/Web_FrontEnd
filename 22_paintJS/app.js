const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")

canvas.width = 700
canvas.height = 700
ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5

let isPainting = false

function stopPainting(){
  isPainting = false
}

function startPainting(){
  isPainting = true
}

function onMouseMove(event){
  const x = event.offsetX
  const y = event.offsetY
  if(!isPainting){
    ctx.beginPath();
    ctx.moveTo(x, y)
  } else{
    ctx.lineTo(x, y)
    ctx.stroke();
  }
}

function changeColor(event){
  const color = event.target.style.backgroundColor
  ctx.strokeStyle = color
}

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove)
  canvas.addEventListener("mousedown", startPainting)
  canvas.addEventListener("mouseup", stopPainting)
  canvas.addEventListener("mouseleave", stopPainting)
}

Array.from(colors).forEach(color => 
  color.addEventListener("click", changeColor))
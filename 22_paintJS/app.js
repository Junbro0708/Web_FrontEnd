const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")

canvas.width = 700
canvas.height = 700
ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5

let isPainting = false
let isFilling = true

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

function handleRangeChange(event){
  const size = event.target.value
  ctx.lineWidth = size
}

function handleModeClick(){
    if(isFilling){
      isFilling = false
      mode.innerText = "PAINT"
    }else{
      isFilling = true
      mode.innerText = "FILL"
    }
  }

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove)
  canvas.addEventListener("mousedown", startPainting)
  canvas.addEventListener("mouseup", stopPainting)
  canvas.addEventListener("mouseleave", stopPainting)
}

Array.from(colors).forEach(color => 
  color.addEventListener("click", changeColor))

if(range){
  range.addEventListener("input", handleRangeChange)
}

if(mode){
  mode.addEventListener("click", handleModeClick)
}
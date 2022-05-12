const canvas = document.getElementById("jsCanvas")
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")
const range = document.getElementById("jsRange")
const mode = document.getElementById("jsMode")
const save = document.getElementById("jsSave")

const INITIAL_COLOR = "#2c2c2c"

canvas.width = 700
canvas.height = 700

ctx.fillStyle = "white"
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.strokeStyle = INITIAL_COLOR
ctx.fillStyle = INITIAL_COLOR
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
  ctx.fillStyle = color
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

  function handleCanvasClick(){
    if(!isFilling)
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  function handleCM(event){
    event.preventDefault()
  }

  function handleSaveClick(){
    const image = canvas.toDataURL("image/jpeg")
    const link = document.createElement("a")
    link.href = image
    link.download = "image"
    link.click()
  }

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove)
  canvas.addEventListener("mousedown", startPainting)
  canvas.addEventListener("mouseup", stopPainting)
  canvas.addEventListener("mouseleave", stopPainting)
  canvas.addEventListener("click", handleCanvasClick)
  canvas.addEventListener("contextmenu", handleCM)
}

Array.from(colors).forEach(color => 
  color.addEventListener("click", changeColor))

if(range){
  range.addEventListener("input", handleRangeChange)
}

if(mode){
  mode.addEventListener("click", handleModeClick)
}

if(save){
  save.addEventListener("click", handleSaveClick)
}
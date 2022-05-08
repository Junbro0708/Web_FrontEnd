const canvas = document.getElementById("jsCanvas")

let isPainting = false

function stopPainting(){
  isPainting = false
}

function onMouseMove(event){
  const x = event.offsetX
  const y = event.offsetY
  console.log(x, y)
}

function onMouseDown(event){
  isPainting = true
}

function onMouseUp(event){
  stopPainting()
}

if(canvas){
  canvas.addEventListener("mousemove", onMouseMove)
  canvas.addEventListener("mousedown", onMouseDown)
  canvas.addEventListener("mouseup", onMouseUp)
  canvas.addEventListener("mouseleave", stopPainting)
}
const mainEl = document.querySelector("#main");
const qnaEl = document.querySelector("#qna");
const resultEl = document.querySelector("#result");
const statusFadeEl = document.querySelector('.status');
const currentEl = document.querySelector('.current');
const endPoint = qnaList.length;
const select = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

const link = document.location.href;
const inputLink = document.getElementById("current-link")
inputLink.setAttribute("value", link)

const copyBtn = document.querySelector(".copy-link-btn")
copyBtn.addEventListener("click", function(){
  inputLink.select();
  document.execCommand("Copy"); // 웹 표준에서 권장하지 않는 문법
})
// console.log(window.location.origin);
if(document.location.href == "http://127.0.0.1:5500/"){ // 최상위 페이지 주소
  resultEl.style.display = "none";
}

function movePage(pageNum){
  location.href = (document.location.href + "result/" + pageNum + ".html")
}

function calResult() {
  console.log(select);
  let result = select.indexOf(Math.max(...select));
  return result;
}

function setResult(){
  let point = calResult();
  movePage(point);
  // const resultName = document.querySelector('.result-name');
  // resultName.innerHTML = infoList[point].name;

  // const resultDesc = document.querySelector('.result-description');
  // resultDesc.innerHTML = infoList[point].description;
}

function goResult(){
  qnaEl.style.WebkitAnimation = "fadeout 1s";
  qnaEl.style.animation = "fadeout 1s";
  setTimeout(() => {
    resultEl.style.animation = "fadein 1s";
    resultEl.style.WebkitAnimation = "fadein 1s";
    setTimeout(() => {
      qnaEl.style.display = "none";
      // resultEl.style.display = "block";
    }, 450)
    // goNext(qIdx);
  }, 450)
  setResult();
}

function addAnswerBtn(answerText, qIdx, index){
  let a = document.querySelector('.answerBox');
  let answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-4');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fade-in');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function(){
    let children = document.querySelectorAll('.answerList');
    for(let i = 0; i < children.length; ++i){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeout .5s";
      children[i].style.animation = "fadeout .5s";
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[index].type;
      for(let i = 0; i < target.length; ++i){
        select[target[i]] += 1;
      }

      for(let i = 0; i < children.length; ++i){
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  });
}

function goNext(qIdx){
  if(qIdx == endPoint){
    goResult();
    return;
  }
  let qEl = document.querySelector('.qBox');
  qEl.innerHTML = qnaList[qIdx].q;

  for(let i in qnaList[qIdx].a){
    addAnswerBtn(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  const statusEl = document.querySelector('.status-bar');
  currentEl.innerHTML = (qIdx + 1) + " / 12";
  statusEl.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function begin(){
  mainEl.style.WebkitAnimation = "fadeout 1s";
  mainEl.style.animation = "fadeout 1s";
  setTimeout(() => {
    qnaEl.style.animation = "fadein 1s";
    qnaEl.style.WebkitAnimation = "fadein 1s";
    setTimeout(() => {
      mainEl.style.display = "none";
      qnaEl.style.display = "block";
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450)
}
const mainEl = document.querySelector("#main");
const qnaEl = document.querySelector("#qna");
const resultEl = document.querySelector("#result");
const endPoint = qnaList.length;

function goResult(){
  qnaEl.style.WebkitAnimation = "fadeout 1s";
  qnaEl.style.animation = "fadeout 1s";
  setTimeout(() => {
    resultEl.style.animation = "fadein 1s";
    resultEl.style.WebkitAnimation = "fadein 1s";
    setTimeout(() => {
      qnaEl.style.display = "none";
      resultEl.style.display = "block";
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450)
}

function addAnswerBtn(answerText, qIdx){
  let a = document.querySelector('.answerBox');
  let answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
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
    addAnswerBtn(qnaList[qIdx].a[i].answer, qIdx);
  }
  const statusEl = document.querySelector('.status-bar');
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
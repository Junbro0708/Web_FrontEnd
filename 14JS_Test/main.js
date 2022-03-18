let myName = "Junbro";
let email = 'aktm708@naver.com';
let hello_ = `Hello ${myName}?!`;

console.log(myName);
console.log(email);
console.log(hello_);

let user = {
  name: 'Junbro',
  age: 26,
  isValid: true
};
console.log(user.name);
console.log(user.age);

function hello(){
  console.log('Hello~');
}

const junbro = {
  name:'Junbro',
  age: 26,
  getName: function(){
    return this.name;
  }
};
const hisName = junbro.getName();
console.log(hisName);
console.log(junbro.getName());

// -------------------------------- DOM API

// const boxEls = document.querySelectorAll('.box');

// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index+1}`);
//   console.log(index, boxEl);
// });

const boxEl = document.querySelector('.box');
console.log(boxEl.textContent);
boxEl.textContent = 'JUNBRO';
console.log(boxEl.textContent);
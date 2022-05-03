// 전개 연산자  

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits)
console.log(...fruits) // 전개 연산자

function toObject(a, b, ...c){
  return{
    a: a,
    b: b,
    c // 변수와 이름이 같으면 축약형
  }
}
console.log(toObject(...fruits))
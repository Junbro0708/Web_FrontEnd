const user = {
  name: 'Junbro',
  age: 26,
  email: 'aktm708@gmail.com'
}

const {name: junbro, age, email, address = 'Korea'} = user

console.log(`저는 ${junbro}`)
console.log(`저는 ${age}`)
console.log(`사는 나라는 ${address}`)

const fruits = ['Apple', 'Banana', 'Mango']
const [, b, c, d] = fruits
console.log(b, c, d)
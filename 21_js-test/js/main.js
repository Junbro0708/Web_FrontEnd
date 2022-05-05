// import GetType from './GetType'
// import abc from './getRandom'

// console.log(typeof "Hello World!")
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])

// console.log(GetType("Hello World!"))
// console.log(GetType(123))
// console.log(GetType(true))
// console.log(GetType(undefined))
// console.log(GetType(null))
// console.log(GetType({}))
// console.log(GetType([]))

// ---------------------------------

// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 3)

// const a = 2 // = 는 할당 연산자
// a += 1
// console.log(a)

// ---------------------------------

// const a = 1
// const b = "1"
// const c = 3

// console.log(a === b)
// console.log(a !== b)
// console.log(a == b)
// console.log(a != b)

// console.log(a < c)
// console.log(a > c)
// console.log(a <= c)
// console.log(a >= c)

// function isEqule(x, y){
//   return x == y
// }

// console.log(isEqule(a, b))

// ---------------------------------

// const a = 1 < 2

// if(a) {
//   console.log('참')
// }else{
//   console.log('거짓')
// }

// console.log(a ? true : false)
// console.log(abc())

// ---------------------------------

// const a = abc()

// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   default:
//     console.log('rest...')
//     break
// }

// if(a === 0){
//   console.log('a is 0')
// }else if(a === 2){
//   console.log('a is 2')
// }else if(a === 4){
//   console.log('a is 4')
// }else{
//   console.log('rest...')
// }

// ---------------------------------

// const ulEl = document.querySelector('ul')

// for(let i = 0; i < 10; ++i){
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if((i + 1) % 2 === 0){
//     li.addEventListener('click', function(){
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }

// ---------------------------------

// function scope(){
//   if(true){
//     const a = 123
//     console.log(a)
//   }
// }
// scope()

// ---------------------------------

// const a = 1
// const b = '1'

// console.log(a === b)
// console.log(a == b)

// ---------------------------------

// function sum1(){
//   console.log(arguments)
//   return arguments[0] + arguments[1]
// }

// const sum = function (x, y){
//   return x + y
// }

// a = sum1(1, 3)
// console.log(a)
// console.log(sum(4, 12))

// const timer = setInterval(() => {
//   console.log('Junbro')
// }, 1000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearInterval(timer);
// })

// function timeout() {
//   setTimeout(() => {
//     console.log('Junbroo')
//   }, 2000)
// }
// timeout()

// ---------------------------------

// function user(first, last){
//   this.firstName = first
//   this.lastName = last
// }
// user.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }

// class user{
//   constructor(first, last){
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// const junbro = new user('Junbro', 'Park')
// const amy = new user('Amy', 'Park')
// const neo = new user('Neo', 'Park')
// console.log(junbro.getFullName()) 
// console.log(amy) 
// console.log(neo) 

//--------------------

// const result = 'Hello World'.indexOf('Wo')
// console.log(result)

// const str = '0123'
// console.log(str.length)
// console.log(str.indexOf('2'))
// console.log(str.slice(0, 2))

// const pi = 3.14159265358979
// console.log(pi)

// const str1 = pi.toFixed(2) //
// console.log(str1)
// console.log(typeof str1)
// console.log(typeof parseInt(str1))
// console.log(typeof parseFloat(str1)) 

//--------------------

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers)
// console.log(fruits[2])

//--------------------

// const userAge = {
//   name: 'JunBro',
//   age: 26
// }

// const userEmail = {
//   name: 'JunBro',
//   email: 'aktm708@gmail.com'
// }

// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(userEmail)

//--------------------

import _ from 'lodash'
import { user } from './getRandom'

const userA = [
  { userId: '1', name: 'Junbro'},
  { userId: '2', name: 'Heropy'}
]

const userB = [
  { userId: '1', name: 'Junbro'},
  { userId: '3', name: 'Amy'}
]

const userC = userA.concat(userB)
console.log('concat', userC)
console.log('uniq', _.uniqBy(userC, 'userId'))

const userD = _.unionBy(userA, userB, 'userId')
console.log('union', userD)

const users = [
  { userId: '1', name: 'Junbro'},
  { userId: '2', name: 'Yong'},
  { userId: '3', name: 'Park'},
  { userId: '4', name: 'Amy'},
  { userId: '5 ', name: 'Kim'},
]

const foundUser = _.find(users, {name: 'Amy'})
const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name: 'Amy'})
console.log(users)
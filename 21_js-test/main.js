// import GetType from './GetType'
import abc from './getRandom'

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

const a = abc()

switch (a) {
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...')
    break
}
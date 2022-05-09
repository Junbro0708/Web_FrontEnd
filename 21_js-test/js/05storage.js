const user = {
  name: 'Junbro',
  age: 26,
  emails: [
    'aktm708@gmail.com',
    'qkrwns708@gmail.com'
  ]
}

// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))
import _ from 'lodash'

const user = {
  name: 'Junbro',
  age: 26,
  emails: ['aktm708@gmail.com']
}

const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 25
console.log('user', user)
console.log('copyUser', copyUser)

console.log('--------')

user.emails.push('aktm708@naver.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)
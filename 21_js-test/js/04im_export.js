import _ from 'lodash'
import getType from './GetType'
import { rando, user as junbro } from './getRandom'
// import * as R from './getRandom' // 한번에 가져오기

console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))
console.log(rando(), rando())
console.log(junbro)
// console.log(R)
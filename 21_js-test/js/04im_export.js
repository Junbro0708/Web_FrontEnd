import _ from 'lodash'
import getType from './GetType'
import { rando } from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))
console.log(rando(), rando())
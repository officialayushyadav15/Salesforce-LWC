import div,{PI, multi} from './util.js'

console.log(PI)
console.log(multi(1,3))
console.log(div(1,3))

// to import everything from a js file we can use
import * as util from './util.js'
console.log(util.PI)
console.log(util.multi(1,3))

//we cant export default by importing while library

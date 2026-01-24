/*Datatypes in js*/

var yx = 10 // limit is +- (253-1)
console.log(typeof yx)

//big integer (if we append a number with n then it is big integer)

var y = 10n
console.log(typeof y)

//string

var name = 'Ayush'
console.log(typeof name)


// boolean without quotes if in quotes then it becomes string
var isname = true
console.log(typeof isname)

//undefined

var z
console.log(typeof z)

//objects

var obj = {}
console.log(typeof obj)

var arr = []
console.log(typeof arr)

//symbol

var sym = Symbol("id")
console.log(typeof sym)


//null

var x1 = 10
x1 = null
//type of null is null
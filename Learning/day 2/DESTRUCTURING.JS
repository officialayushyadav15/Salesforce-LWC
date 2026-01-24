//array destructuring

var array_destructuring = ["Ayush","Yadav"]
var a7 = array_destructuring[0]
var a8 = array_destructuring[1]

console.log(array_destructuring)
console.log(a7)
console.log(a8)

//instead of thst two lines we can do same thing using destructuring

let [a0,a9] = array_destructuring
console.log(a9)
console.log(a0)

//object dwestructuring

var dataofuser = {nameofuser:"Ayush", Ageofuser:21, date:"25/01/2026"}
var {nameofuser,Ageofuser,date} = dataofuser
console.log(dataofuser)
console.log(nameofuser)
console.log(Ageofuser)
console.log(date)


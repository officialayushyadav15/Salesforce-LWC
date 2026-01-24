//spread operator

//Array

var ar = ["a","b"]
console.log(ar)
console.log(ar[0])

ar.push('ayush')
console.log(ar)


//objectworks in key value pair (i.e. like dictionary in python)

var obj = {"name":"Ayush", "Age":21}
console.log(obj)
console.log(obj.name)
console.log(obj["name"])
obj.from = "Rewari"

console.log(obj)

//1 Expanding string

let abcdef = "First type is expanding list whse syntax is [... variable] this will create a list of all character in that variable"
let char = [...abcdef]
console.log(abcdef)
console.log(char)

// 2 Combining feature

let arr1 = ["Ayush"]
let arr2 = ["Yadav"]
let arr3 = [...arr1,...arr2]
console.log(arr1)
console.log(arr2)
console.log(arr3)

//3 adding vales to array

let arr4 = [...arr3,"21"]

console.log(arr4)

//4 Combining Objects (common properties get over ridden by latest)
let obj1 = {name:"Ayush", Age:21, date:"25/01/2026"}
let obj2 = {name:"Ayush", Age:22}
let obj3 = {...obj1,...obj2}
console.log(obj1)
console.log(obj2)
console.log(obj3)

//shallow copy only works at one level not at 2 level i.e. nested it wont owk 
var array = ["x","y","z"]
array.push("a")

console.log(array)

var copy = array //here what will be happen it will act as pointer i.e. it will refer to 

copy.push("copy")
console.log(array)
console.log(copy)

var shallow  = [...array]
shallow.push("shallow")
console.log(array)
console.log(shallow)

//nested copy here again similar to pointer
var arr12 = [{name:"Ayush"},{name:"Learning LWC"}]
var arrobj1 = [...arr12]
console.log(arr12)
arrobj1[1].name = "Salesforce"
console.log(arr12)
console.log(arrobj1)

// hack to use shallow copy in nested copy
var updated = JSON.parse(JSON.stringify(arr12))
console.log(arr12)
updated[1].name = "UPDATED NESTED COPY"
console.log(arr12)
console.log(updated)
//string interpolation

var name1 = "Sales"
var name2 = "force"
console.log(name1+name2)
var name122 = "Ayush Yadav"
var ageofuser1 = 21
var str_ing = "my name is "+name122+" my age is "+ageofuser1
console.log(str_ing)

var q=2
var w=3
var sum = "Sum of "+q+" and "+w+" is "+q+w
console.log(sum)

// now we will use interpolation

console.log(`Using string interpolation  my name is ${name122} my age is ${ageofuser1}`)
console.log(`Using string interpolation Sum of ${q} and ${w} is ${q+w}`)

//generally used in creating dynamic links for eg:

var record = 123456789369258147
console.log(`https://salesforce.com/${record}`)
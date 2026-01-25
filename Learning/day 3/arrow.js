// normal function

function abc(){
    console.log("Normal function")
}
abc()

// arrow function

const abcdef = () => console.log("Arrow function") 
abcdef()

// if we want ot do certain data manipulations the we will use curley braces else we wont use them

const sum = (a,b) => {
    let sum = a+b
    console.log(sum)
}
sum(2,3)

// if we have reurn statement then we wont use braces and return statement so the statement will be
var array = [1,2,3,4,5,6,7,8,9,0]
let newa = array.map((item) => item*2)
console.log(newa)

//when object has a function then we call it method
// if we dont have a nested method in a object so it forgets the outrer context so due to this we use arrow method to keep track of data and give good result

let objecto = {
    name1:"Ayush",
    last:"Yadav",
    age:21,
    getname:function(){
        console.log(this.name1)
        function full(){
            console.log(this.name1)
            console.log(this.last)
            console.log(`My full name is ${this.name1} ${this.last}`)
        }
        full()
    }
}
objecto.getname()

let objecto2 = {
    name1:"Ayush",
    last:"Yadav",
    age:21,
    getname:function(){
        console.log(this.name1)
        const full = () => {
            console.log(this.name1)
            console.log(this.last)
            console.log(`My full name is ${this.name1} ${this.last}`)
        }
        full()
    }
}
objecto2.getname()
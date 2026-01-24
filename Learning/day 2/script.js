console.log("Testing") /*Used to print messages in javascript*/

/*var keyword to declare variable: It can be updated and redeclared*/

var c = "Ayush"
console.log(c)
c= "Ayush is learning LWC"
console.log(c)

var c= "Redeclaring variable"
console.log(c)

/*Var support local and global decleration scope but not block level scope block level means anything inside {} if we are declaring var in block scopethen it gets tagged to windows automatically we dont use var in lwc*/

var test = "If I am not declaring var keywors in function then it points to a window property as in javascript everything points to a window property since everything is assigned to windows so i can call any variable with window"
console.log(test)
/*Everything is window so if we print window it will show us all alerts and everything happening on that window*/
console.log(window)

test = "this i am calling test variable with window function"
console.log(window.test)

if(true){
    var block = "declard in block and can be accessed using window scope as i am being assigned to window scope"
}
console.log(block)

function abf(){
    var ab = "Using var decleration to declare variable in function can only bve accessed in function not outside function"
    console.log(ab)
}
abf()



/*let keyword to declare variable: It can be updated but not redeclared*/

let a= "test let variable decleration with name as a"

console.log(a)

a= "updating value of a"
console.log(a)

/*can only be defined in function scope or block level scope, it cannot be accessed using window function i.e. cannot be accessed globaly like if i try calling it outside function will pop error*/

function abe(){
    let abd = "Using let decleration to declare variable in function can only be accesed in a function"
    console.log(abd)
}
abe()

/*const keyword to declare variable: It cannot be updated and redeclared*/

const t = "variable decleration using const keyord cant be redeclared or reassigned"
console.log(t)

/*const support block level and function level*/

function test(){
    const x= "declaring variable with name x"
    console.log(x)
}

const x= "declaring variable x outside function with same name and is possible"
console.log(x)

if(true){
    const x= "declaring variable x inside a block with same name and is possible"
    console.log(x)
}

console.log(x)

var e = "block scope meaning variable declared in block cannot be reassigned outside block"
console.log(e)




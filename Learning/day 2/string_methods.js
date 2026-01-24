var stringmethods = "Hello my name is Ayush Yadav and I am learning LWC"
// includes - tell use wheather a string contains character or not

var includes_method = stringmethods.includes("Ayush")
console.log(includes_method)

// index of - position of first occurence of specified value in string

let index = stringmethods.indexOf("Ayush")
console.log(index)

// starts with - specified string begin with certain character

let start = stringmethods.startsWith("Hello")
console.log(start)

let start1 = stringmethods.startsWith("Ayush")
console.log(start1)

//slice - extract part of string

var news = stringmethods.slice(0,11)
console.log(news)

//tolower - convert to lower

console.log(stringmethods.toLowerCase())

//toupper - convert to upper

console.log(stringmethods.toUpperCase())

//trim() - remove white spaces from both sides

let trim_str = "                  working on salesforce                "
console.log(trim_str)
console.log(trim_str.trim())
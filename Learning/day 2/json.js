// JSON - IT IS LIGHT WAY TO STORE AND TRANSPORT DATA
//Json  stand for javascript object notetation

let obj_json = {name:"Ayush Yadav",age:21,learning:"LWC"}

//object.keys() - to get all keys in array format

console.log(Object.keys(obj_json))

//object.values() - to get all values in array format

console.log(Object.values(obj_json))

//json.stringify - used to convert object in string

console.log(JSON.stringify(obj_json))
json_string = JSON.stringify(obj_json)

//Json.parse reverse string to obj

console.log(JSON.parse(json_string))
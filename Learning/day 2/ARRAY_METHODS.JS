var array_methods_test = [1,2,3,4,5,6,7,8,9,0]

/*Syntax:
arr.methodname(function(currentItem, index, actualarray){

})
*/

//map - used to transform values in array always return an array

let updated_array = array_methods_test.map(function(currentItem, index, actualarray){
    console.log(`current item is ${currentItem} on index ${index} and array is ${actualarray}`)
    return currentItem*2
})

console.log(updated_array)

//filter - return filtered data and returna array
let filter_arr = array_methods_test.filter(function(currentItem, index, actualarray){
    return currentItem>6

})

console.log(filter_arr)

//every() - check if all element are passing the criteria if all pass then true else false

let true_arr = array_methods_test.every(function(currentItem, index, actualarray){
    return currentItem>=0

})

console.log(true_arr)

let false_arr = array_methods_test.every(function(currentItem, index, actualarray){
    return currentItem>6

})

console.log(false_arr)

//some() - check if some element are passing the criteria if some pass then true else false

let true_arr1 = array_methods_test.some(function(currentItem, index, actualarray){
    return currentItem>=8

})

console.log(true_arr1)

let false_arr1 = array_methods_test.some(function(currentItem, index, actualarray){
    return currentItem>22

})

console.log(false_arr1)

//sort() - used to sort array (if we have character the compare first character and sort and if first same then will see until we finf next different character in both strings and will compare)

array_methods_char = ["Papaya","Apple","Appla"]

console.log(array_methods_char.sort())

// sort in ascending of numbers

let sortedvalasc = array_methods_test.sort(function(a,b){
    return a-b
})
console.log(sortedvalasc)
let sortedvaldsc = array_methods_test.sort(function(a,b){
    return b-a
})

console.log(sortedvaldsc)

//reduce - to reduce value
/*Syntax:
array,reduce(function(total, currentvalue,index,array){

}, initialvalue)*/

let sum_array_test = array_methods_test.reduce(function(total, currentItem){
    return total+currentItem
},15)

console.log(sum_array_test)

// foreach() - same as map but map return array but foreach doesnt return anything

array_methods_test.forEach(function(currentItem){
    console.log(currentItem)
})
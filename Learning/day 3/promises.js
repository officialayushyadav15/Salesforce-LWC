/* syntax:
new Promise(function(resolved,rejected){
    return resolved("Success")
})
Here resolved is used when the function doesnt give error else we use rejected to return value if we think it will give error
*/

function checkif (data){
    return new Promise(function(resolved,rejected){
        if (data === true){
            return resolved("Success")
        }
        else{
            return rejected("Unsuccess")
        }
    
})
}

console.log(checkif(true))  // this will just print the function so in order to see value as output then we will use then function as explained below


// now if we want to check what value are we getting from promise function then we use then function

checkif(true).then(function(result){
    console.log(result)
}).catch(function(error){
    console.error(error)
})

/* checkif().then(function(result){
    console.log(result)
}).catch(function(error){
    console.error(error)
})*/

// following is a realtime example with service call, we use fetch method to call a service, server call is always a promise call, we will use then function to catch that response and print the result in first fetch api first then always return data stream so we convert datastram into json using method json and then we call it again to fetch all data

// fetch('https://github.com/officialayushyadav15').then(function(result){
//     return result.json()
// }).then(function(response){
//     consol.log(response)
// })


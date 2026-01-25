// set time out

let timerid = window.setTimeout(function(){
    console.log("Set Timeout after 5 sec")
},5000)
console.log(timerid)
//if we want to clear timout then we will set clearTimeout(TIMER ID) where timer id is id f set timeout function

//set interval - used when we need to repeat task at a interval

let intervalid = window.setInterval(function(){
    console.log("Hello")
},1000)
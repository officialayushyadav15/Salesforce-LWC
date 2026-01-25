function firstfunction(){
    console.log("You pressed first button")
}

//now if i want to call a function using event listner we will follow following process

function secondbutton(){
    console.log("You pressed second button")

}

let element = document.querySelector(".Nameofbtn")
element.addEventListener("click",secondbutton)

document.addEventListener("mousemove",handler)

function handler(){
    document.querySelector("div").innerHTML = Math.random()
}// this function will keep on generating random numbers

function removehandler(){
    document.removeEventListener("mousemove",handler) //this function will pause the number generation
}

document.addEventListener("Hello",function(data){
    console.log("Hello funmction called by ", data.detail)
    console.log("Hello funmction called by ", data.detail.name)
})

function thisiscustommethod(){
    let event = new CustomEvent("Hello",{
        detail:{name:"Ayush"}// thisstores details of event
    })
    document.dispatchEvent(event)// this is used to dispatch that event
}


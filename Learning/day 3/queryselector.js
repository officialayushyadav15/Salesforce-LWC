let element = document.querySelector('div')
console.log(element)
console.log(element.innerHTML)
element.style.color = "blue" // like ths we can define css in javascript
let elementall  = document.querySelectorAll('div')
console.log(elementall)
// queryselectorall should be converted to array to apply features as it returns all data with that id so we cvonvert it into array and apply functionalities
// in lwc we will replace document by this.template, i.e. the command will be
//let elementall  = this.template.querySelectorAll('div')
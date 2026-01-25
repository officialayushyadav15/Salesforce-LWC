// here are the reusable methods writtens which will be imported and exported

export const PI = 3.14

export function multi(a,b){
    return (a*b)
}

// if we want to export all methods together in a line then we can write 
// export {PI,multi}

// to export with alias we can use export{PI as p}

//we can just have one default export in a js firl and if it is default then iy can be exported without keeping it in curly braces while exporting

export default function div(a,b){
    return (a/b)
}
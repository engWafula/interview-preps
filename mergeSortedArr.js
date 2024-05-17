const merge =(arr1,arr2)=>{
    return  [...arr1,...arr2].sort((a,b)=>a-b)
}

console.log(merge([1,2,3,4],[7,6,5]))
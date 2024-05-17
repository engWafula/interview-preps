const even = (arr)=>{
    const final = []
    for(let i of arr){
        if(i%2==0){
             final.push(i)
        }
    }
    return final
}

console.log(even([1,2,3,5,7,9,4]))
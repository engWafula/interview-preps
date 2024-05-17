const duplicates = (arr)=>{
   const final = []

   for(let i of arr){
    if(!final.includes(i)){
        final.push(i)
    }
   }

   return final
}


console.log(duplicates([1,2,3,3,3,4,5,6,"waf","wafula"]))
const memoise = (func)=>{
  const cache = {}

   return (...args)=>{
    const key = JSON.stringify(args)
    if(cache[key]){
      console.log("AM FROM THE CACHE")
      return cache[key]
    }else{
      console.log("AM NOT FROM THE CACHE")
      const result = func(...args)
      cache[key] = result
      return result
    }
   }
}


function square(n) {
  return n*n
  }

const memo = memoise(square)
console.log(memo(4))
console.log(memo(4))
console.log(memo(4))





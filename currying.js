const add = (a,b,c)=>{
    return a+b+c;
}

console.log(add(1,2,3))


//with currying

const addCurr = (a)=>(b)=>(c)=>a+b+c


console.log(addCurr(2)(2)(6),"AM CURR")
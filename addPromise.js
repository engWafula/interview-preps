const addPromise=async(promise1,promise2)=>{
    return Promise.all([promise1,promise2]).then(values=>{
        return values.reduce((acc,val)=>acc+val,0)
    })
}




const vals = addPromise(Promise.resolve(2), Promise.resolve(2)).then(console.log); 

console.log(vals)
const p = new Promise((resolve,reject)=>{
    resolve("Successfully")
    reject("Failed")
})


p.then((res)=>{
  console.log(res)
}).catch((err)=>{
    console.log(err)
})
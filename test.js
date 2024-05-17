const promise = new Promise((resolve,reject)=>{
    resolve("Am the promise")
})

const test =()=>{
    console.log("What is your name")

    setTimeout(()=>{
      console.log("Settime out in this")
    },0)
    

    promise.then(data=>{
        console.log(data)
    })

}



test()
const fs = require("fs")
const os = require("os")
const eventEmitter = require("events")
const cluster = require('cluster');

const textToWrite = "Am the best at what I do knklmklnnjn"
fs.writeFile("fst.txt",textToWrite,(err)=>{
    if(err){
        console.log("FAILED")
    }
    console.log("WROTE")
})

fs.readFile("fs.txt",(err,data)=>{
    if(err){
        return
    }
    console.log("files contents",data)
})

fs.unlink("fst.txt",(err)=>{})
fs.mkdir("images",(err)=>{

})
fs.rmdir("images",(err)=>{

})

const myEmitter = new eventEmitter()

myEmitter.on("stop",()=>{
    console.log("Stop occured")
})
myEmitter.emit("stop")
console.log(os.type())
console.log(os.userInfo())
console.log(os.totalmem())
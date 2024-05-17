// create a function which stores inside a secrete word which cannot be chnaged or accessed from the outside

const someFunc = () =>{
    const secret = "some secret....."
    return ()=>secret
}

const getScrete = someFunc()
// console.log(getScrete())


//how do you clone an object 

let obj = {a:1,b:2}

const newObject = {...obj, text:"am good"}

// console.log(newObject)


//count vowels inside a string


//beginner approach
const countVowels = (str)=>{
 const vowels = ["a","e","i","o","u"]
 let count = 0
 for(let char of str.toLowerCase()){
  if(vowels.includes(char)){
    count++
  }
 }
 return count
}



//addavanced approach


const findVols = (str)=>{
    const vowels = ["a","e","i","o","u"]
 return str.toLowerCase().split("").reduce((acc,char)=>vowels.includes(char)?acc+1:acc,0)
}

console.log(findVols("Alluuuan"))


//reverse each word in a sentence

const reverseSentence = (sentence) =>{
    return sentence.split(" ").reverse().join(" ")

}
console.log(reverseSentence("I love programming"))


// function that takes in a string and return the most commonly occuring string
//beginer approach
const mostCommonString = (strings)=>{
   const common = {}
   let maxEntry;
   let maxValue = 0;
   strings.forEach(str => {
    if(common[str]===undefined){
        common[str] = 1
     }else{
         common[str]++
     }
   });

   for(let i in common){
    if(common[i]>maxValue){
        maxEntry = i
        maxValue = common[i]
    }
   }

   return maxEntry
}

console.log(mostCommonString(["a","b","c","a"]))
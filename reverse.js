const reverse = (str) =>{
    let reversed = ""
    for(let char of str){
     reversed = char + reversed
    }
    return reversed
}

const reverseNum = (number)=>{
    let reversed = ""
    for(let num of number.toString()){
        reversed = num + reversed
    }
    return parseInt(reversed)>0 ? parseInt(reversed) : parseInt(reversed) * -1
}

const planedrome = (str)=>{
    let reversed = ""
    for(let char of str){
     reversed = char + reversed
    }
    return reversed.toLocaleLowerCase() ===str.toLocaleLowerCase()
}
const maxChar = ( str)=>{
 const charMap = {}
}
console.log(reverse("Interview, Happy"))
console.log(reverseNum(-6355))
console.log(planedrome("Madam"))
console.log(maxChar("adaamm"))
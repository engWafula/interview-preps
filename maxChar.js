function maxChar(str){
    const charMap = {}
     let macChar = ""
     let max = 0
     for(let char of str){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
     }

for(let char in charMap){
    if(charMap[char]>max){
        max = charMap[char]
        macChar = char
    }
}

return macChar
}

console.log(maxChar("wafula allan isaac"))
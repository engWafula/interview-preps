const maxStr =(str)=>{
   const StrMap = {}
   let maxStr = ""
   let max = 0
   for(let s of str.split(" ")){
    if(StrMap[s]){
      StrMap[s]++
    }else{
      StrMap[s] = 1
    }
   }
   for(let strr in StrMap){
    if(StrMap[strr]>max){
      max = StrMap[strr] 
      maxStr = strr
    }
   }
   return maxStr
}

console.log(maxStr("Wafula allan isaac allan"))
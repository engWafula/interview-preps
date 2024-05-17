const prime = (num)=>{
    if(num<=1){
        return false
    }

    for(let i=2;i<= Math.sqrt(num);i++){
        if(i%2===0){
            return false
        }
    }

    return true
}

console.log(prime(3))
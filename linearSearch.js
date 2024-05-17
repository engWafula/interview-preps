const Linear = (arr,num)=>{
    for(let i=0;i<=arr.length;i++){
       if(arr[i]===num){
        return i
       }
       
    }
    return -1
}

console.log(Linear([91,20,9,400,5,6000],6))
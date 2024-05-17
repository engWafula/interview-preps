const binarySearch = (arr,num)=>{
let low = 0;
let high = arr.length-1

while(low<=high){
  const  midVal = Math.floor((low+high)/2)
   let mid = arr[midVal]

    if(num>mid){
        low = midVal+1
    }else if(num<mid){
        high = midVal-1
    }else{
        return midVal
    }
}

return -1
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100],90))
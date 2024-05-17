// const reverseArr = (arr)=>{
// for(let i of arr){
//   if(arr[arr.length-1]){
//     arr[0]=arr[arr.length-1]
//   } else{
//     arr[i] = arr[i+1]
//   }                 
// }
// return arr
// }

// console.log(reverseArr([1,2,3,4]))

//k=3

const rotate = (nums,k) => {

     let n = nums.length;

     function reverse(start,end){
        while(start<end){
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
            }
            }
            reverse(0,n-1)
            reverse(0,k-1)
            reverse(k,n-1)
        
     
    return nums
}


console.log(rotate([1,2,3,4,5,6,7],1))



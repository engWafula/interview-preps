
const flatten = (arr,flattenedArr)=>{
    for(let i = 0;i<arr.length;i++){
        if(typeof arr[i] ==="number"){
            flattenedArr.push(arr[i])
        }else{
            flatten(arr[i],flattenedArr)
        }
    }


    return flattenedArr
}


console.log(flatten([1,2,3,3,[4,[5,6]],7],[]))
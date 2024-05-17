const group =(input)=>{
    const output = {}
    input.forEach(data => {
          if(output[data.key]){
           output[data.key].push(data)
          }else{
            output[data.key] = [data]
          }
    });


    return output
}




let input = [{
    key:"sample1",
    data:"data1"
},{
    key:"sample1",
    data:"data1"
},{
    key:"sample2",
    data:"data2"
},{
    key:"sample2",
    data:"data2"
},{
    key:"sample2",
    data:"data2"
}
]

console.log(group(input))
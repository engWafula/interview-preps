const polishNotation = (tokens)=>{
   const stack = []
   for(let tok of tokens){
       if(!isNaN(parseFloat(tok))){
        console.log("dndjdd",tok)
        stack.push(parseFloat(tok) )
       }else{
        const num1 = stack.pop()
        const num2 = stack.pop()
        console.log(num1,num2)
        if(tok == "+"){
            stack.push(num1 + num2)
        }else if(tok == "*"){
            stack.push(num1 * num2)
        }
       }
   }

   return stack.pop()
}


const tokens = ["2","1","+","3","*"]
console.log(polishNotation(tokens))

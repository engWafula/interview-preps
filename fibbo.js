const Fibo = (num) =>{
   if(num<2){
    return num
   }else{
    return Fibo(num-1)+Fibo(num-2)
   }
}


console.log(Fibo(4))
function ReverseString(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; 

    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args); 
        if (typeof result === 'string') {
            return result.split('').reverse().join(''); 
        }
        return result;
    };

    return descriptor;
}



class Message{
    message:string
    constructor(message:string){
        this.message = message
    }
    
   @ReverseString
    getReversed(){
        return this.message
    }
}



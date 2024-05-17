class Overloading{

    add(num1: number, num2: number): number;
    
    add(num1: number, num2: number, num3: string): string;

    add(num1:number,num2:number,num3?:string):number|string{
        if(typeof num3 === "string"){
            return num3
        }else{
            return num1+num2
        }

    }
}

const data = new Overloading()
console.log(data.add(5, 10)); 
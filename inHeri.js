class Animal{
    constructor(){
        this.type = "unkonwn"
        this.sound = "unknown"
    }

    makeSound(){
        console.log(this.sound)
    }
}


class Dog extends Animal{
     constructor(){
        super()
        this.type = "dog"
        this.sound = "woof"
     }

     fetch(){
        console.log("Fetching the ball")
     }
}


const myDog = new Dog()
myDog.makeSound()
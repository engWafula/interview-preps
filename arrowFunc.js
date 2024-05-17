class Person{
    constructor(){
         this.name = "Wafula"
    }

    sayHello(){
        setTimeout(function(){
            console.log(this.name)
        }.bind(this),1000)
    }
}

const p = new Person()
p.sayHello()
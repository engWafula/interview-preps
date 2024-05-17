const Stack = require("./stack")

class Queue{
    constructor(){
        this.stack1 = new Stack()
        this.stack2  = new Stack()
    }

    add(val){
        this.stack1.push(val)
    }

    remove(){
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop())
        }

        const record = this.stack2.pop()

        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop())
        }   
       return record
    }

    peek(){
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop())
        }

        const record = this.stack2.peek()

        while(this.stack2.peek()){
            this.stack1.push(this.stack2.pop())
        }   
       return record
    }
}

const q  = new Queue()

q.add(1)
q.add(2)
q.add(3)

console.log(q.peek())
console.log(q.remove())
console.log(q.peek())

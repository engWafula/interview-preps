class Stack{
    constructor(){
      this.list = []
    }

    push(val){
      this.list.push(val)
    }

    pop(){
     const val =   this.list.pop()
     return val
    }

    peek(){
        return this.list[this.list.length-1]
    }
}

// const s = new Stack()
// s.push(1)
// s.push(2)
// s.push(4)
// console.log(s.list,"Original list")
// console.log(s.peek(),"Val on top os the stack")
// s.pop()
// console.log(s.list,"New list")

module.exports = Stack

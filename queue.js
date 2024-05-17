class Queue{
    constructor(){
      this.list = []
    }

    add(val){
      this.list.unshift(val)
    }

    remove(){
     const val =   this.list.pop()
     return val
    }

    peek(){
        return this.list[this.list.length-1]
    }
}

const s = new Queue()
s.add(1)
s.add(2)
s.add(4)
console.log(s.list,"Original list")
console.log(s.peek(),"Val on top os the queue")
s.remove()
console.log(s.list,"New list")

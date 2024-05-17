function Person(){
   this.name = "Wafula"
}
Person.prototype.sayHello = function(){
    console.log("hello")
}


function Student(){
   Person.call(this)
    this.studentId =12345
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student


const student = new Student();
student.sayHello();

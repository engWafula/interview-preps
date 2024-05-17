// Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Adding a method to the prototype
  Animal.prototype.sayName = function() {
    console.log(`My name is ${this.name}`);
  };
  
  // Child constructor function
  function Dog(name, breed) {
    this.breed = breed;
  }
  
  // Inheriting from the parent prototype
  Dog.prototype = new Animal();
  Dog.prototype.constructor = Dog;
  
  
  // Creating an instance of Dog
  const myDog = new Dog('Buddy', 'Labrador');
  myDog.sayName(); // Output: My name is Buddy
  myDog.bark();    // Output: Woof!
  
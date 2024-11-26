// Parent Class
class Animal {
    speak() {
      console.log("Animal makes a noise.");
    }
  }
  
  // Child Class
  class Dog extends Animal {
    bark() {
      console.log("Dog barks.");
    }
  }
  
  // Test
  let myDog = new Dog();
  myDog.speak(); // Animal makes a noise. (inherited method)
  myDog.bark();  // Dog barks. (Dog's own method)

  // Parent class Person
class Person {
    greet() {
      console.log("Hello");
    }
  }
  
  // Child class Employee extending Person
  class Employee extends Person {
    constructor(company) {
      super(); // Call the parent class constructor
      this.company = company; // New property specific to Employee
    }
  
    // Overriding the greet method
    greet() {
      console.log(`Hello, I work at ${this.company}`);
    }
  }
  
  // Test the overridden method
  let emp = new Employee("Tech Corp");
  emp.greet();  // Output: Hello, I work at Tech Corp
  
  
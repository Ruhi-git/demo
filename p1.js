let architect = {
    name: 'Joe',
    age: 34,
    occupation: 'Architect',
  
    setName: function (newName) {
      this.name = newName;
    },
  
    setAge: function (newAge) {
      this.age = newAge;
    },
  
    getName: function () {
      return this.name;
    },
  
    getAge: function () {
      return this.age;
    },
  };
  console.log(architect.name); // "Joe"
// or
console.log(architect.getName()); // "Joe"

// ...

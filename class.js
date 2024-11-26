class Architect {
  #name;
  #age;
  #occupation = 'architect'; // default value of "architect" for occupation

  constructor(setName = '', setAge = 0) {
    this.#name = setName;
    this.#age = setAge;
  }

  #privateMethod() {
    console.log("I'm a private method");
  }

  set name(newName) {
    this.#name = newName;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

let architect1 = new Architect('Joe', 34);
console.log(architect1.name); // Joe
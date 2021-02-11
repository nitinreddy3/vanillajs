class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

console.log(Student)

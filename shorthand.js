// Create a class Person

const Person = ({ name, age, gender }) => {
  var _name = name;
  var _age = age;
  var _gender = gender;

  return {
    getName: () => _name,
    getAge: () => _age,
    getGender: () => _gender,

    setName: (newName) => _name = newName,
    setAge: (newAge) => _age = newAge,
    setAge: (newGender) => _gender = newGender,

  }
}

const p1 = Person({ name: 'Jiya', age: 2, gender: 'Female' })

console.log(p1._name)
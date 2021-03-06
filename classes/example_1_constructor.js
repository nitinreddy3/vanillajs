function User(name) {
  _name = name;
}

User.prototype.getName = function () {
  return this._name;
}

User.prototype.setName = function (name) {
  this._name = name;
}

const user1 = new User("Nitin")
console.log(user1.getName())

user1.setName("Jiya")
console.log(user1.getName())
console.log(user1._name)

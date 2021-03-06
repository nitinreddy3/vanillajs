// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   getUserInfo() {
//     return this.name;
//   }
// }

// const user1 = new User("Nitin")

// console.log(user1.getUserInfo())

function makeClass(name) {
  return class {
    getUserInfo() {
      return name;
    }
  }
}

let User = makeClass("Hello");

console.log(new User().getUserInfo())
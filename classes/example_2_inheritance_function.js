function Animal(name, speed) {
  this.name = name;
  this.speed = speed;
}

Animal.prototype.getDetails = function () {
  return `${this.name} runs at ${this.speed}km/hr`
}

function Rabbit(name, speed, food) {
  Animal.call(this, name, speed)
  this.food = food;
}

Rabbit.prototype = Animal.prototype;

Rabbit.prototype.eats = function () {
  return `${this.name} eats ${this.food}`
}

var rabbit1 = new Rabbit("Bunny", 10, 'grass')

var rabbit2 = new Rabbit("Sunny", 30, 'leafs')
console.log(rabbit1.eats())
console.log(rabbit1.getDetails())

console.log(rabbit2.eats())
console.log(rabbit2.getDetails())
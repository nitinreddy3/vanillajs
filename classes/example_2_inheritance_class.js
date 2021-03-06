class Animal {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  getDetails() {
    return `${this.name} runs at ${this.speed}km/hr`
  }
}

class Rabbit extends Animal {
  constructor(name, speed, food) {
    super(name, speed);
    this.food = food;
  }

  getDetails() {
    return `${this.name} runs at ${this.speed}km/hr after eating ${this.food}`
  }

  eats() {
    return `${this.name} eats ${this.food}`
  }
}


var rabbit1 = new Rabbit("Bunny", 10, 'grass')

var rabbit2 = new Rabbit("Sunny", 30, 'leafs')
console.log(rabbit1.eats())
console.log(rabbit1.getDetails())

console.log(rabbit2.eats())
console.log(rabbit2.getDetails())
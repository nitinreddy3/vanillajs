function Animal() { }

Animal.prototype = {

}


function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
const sum = a => a + 1;

const mult = b => b * 2;

const result = [sum, mult]

let num = 2;

result.forEach(func => num = func(num))

console.log(num)
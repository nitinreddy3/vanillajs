const divide = (x, y) => x / y

const secondArgNoZero = func => (...args) => {
  if (args[1] === 0) {
    console.log('Error: dividing by zero')
    return null
  }
  return func(...args)
}

const divideSafe = secondArgNoZero(divide)

console.log(divideSafe(7, 10))

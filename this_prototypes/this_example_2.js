function foo(num) {
  console.log(`Foo: ${num}`)
  this.count++;
}

foo.count = 0;

for (let i = 0; i < 10; i++) {
  if (i > 5) {
    foo.call(foo, i)
  }
}

console.log(`Foo count: ${foo.count}`)
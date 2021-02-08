function foo(num) {
  console.log(`Foo: ${num}`)
  foo.count++;
}

foo.count = 0;

var i = 0;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i)
  }
}

console.log(`Foo count: ${foo.count}`)
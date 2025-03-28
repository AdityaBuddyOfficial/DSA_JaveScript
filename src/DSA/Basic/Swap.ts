// swap using extra variable

let a = 10;
let b = 20;

let c = a;
a = b;
b = c;
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);

// swap without extra variable

a = a + b;
b = a - b;
a = a - b;
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);

// swap using destructing

[a, b] = [b, a];
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);

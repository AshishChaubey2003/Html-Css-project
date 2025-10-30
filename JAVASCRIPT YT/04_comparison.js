console.log(2 > 1);

console.log("2" > 1);
console.log ("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check

console.log("2 " === 2);

const id = Symbol('123')
const anotherId = new_symbol("123")
console.log(id === anotherId);

const bigNumber = 25436476366n;

console.log(typeof bigNumber);
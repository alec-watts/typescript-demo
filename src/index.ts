let age: number = 10;

if (age < 50) {
  age += 10
  console.log('old')
}

let sales: number[] = [];

let total: number = 0;
let word = 'hello';
let car; // type any
car = 1
car = 'BMW'

function render(document: any) {
  console.log(document);
}

// Tuple
let user: [number, string] = [1, 'Steve'];
// Tuple will automatically infer the type and show you the right functions
let stringToNum = user[0].toString();
console.log(stringToNum);
let blank = user[1].toLowerCase();
console.log(blank);
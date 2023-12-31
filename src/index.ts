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

// Enums
// If you declare enum with const, the transpiler will not generate more optimized code
const enum Size { Small = 1, Medium, Large}

console.log(Size.Small, Size.Medium, Size.Large);

let mySize = Size.Medium;
console.log(mySize);

// Turn on noUnusedParameters in tsconfig.json
// Turn on noImplicitReturns in tsconfig.json to avoid branches with undefined return
function calcululateTax(income: number, taxYear = 2022): number {
  // Turn on noUnusedLocals in tsconfig.json
  // let x;
  if (taxYear < 2022) {
    return income * 1.3;
  } 
  return income * 1.1;
}

let first = calcululateTax(100, 2021);
let second = calcululateTax(100);

console.log(first, second);

// Objects
type Employee = {
  id: number,
  name?: string
  retire: (date: Date) => void
}

let employee: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  }
}


// Unions
const kgsToLbs = (weight: number | string) => {
  if (typeof weight ===  'number')
    return weight / 2.2;
  else
    return parseInt(weight) / 2.2;
}
console.log(kgsToLbs(10));
console.log(kgsToLbs('10lbs'));


// Intersection
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable;

let widget: UIWidget = {
  drag: () => {
    console.log('dragging');
  },
  resize: () => {
    console.log('resizing');
  }
}

widget.drag();
widget.resize();


// Literal (exact, specific) types
type Quantity = 'one' | 'two' | 'three';
let quantity: Quantity = 'one';

type OddNumberUnderTen = 1 | 3 | 5 | 7 | 9;
let oddNumber: OddNumberUnderTen = 1;


// Nullable types
const greet = (name: string | null | undefined) => {
  if (name)
    console.log(`Hello ${name.toUpperCase()}`);
  else
    console.log(`Hola!`);
}

greet('Steve');
greet(null);
greet(undefined);


// Optional chaining
type Customer = {
  birthDay?: Date,
}

const getCustomer = (id: number): Customer | undefined => {
  return id === 0 ? undefined : { birthDay: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthDay?.getFullYear());

// Optional elements access operator
// check if customers is null or undefined, if not, access the first element, then access the birthDay property
// customers?.[0].birthDay

// Optional call operator
let log: any = null;
log?.('Hello');


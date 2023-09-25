"use strict";
let age = 10;
if (age < 50) {
    age += 10;
    console.log('old');
}
let sales = [];
let total = 0;
let word = 'hello';
let car;
car = 1;
car = 'BMW';
function render(document) {
    console.log(document);
}
let user = [1, 'Steve'];
let stringToNum = user[0].toString();
console.log(stringToNum);
let blank = user[1].toLowerCase();
console.log(blank);
console.log(1, 2, 3);
let mySize = 2;
console.log(mySize);
function calcululateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.3;
    }
    return income * 1.1;
}
let first = calcululateTax(100, 2021);
let second = calcululateTax(100);
console.log(first, second);
//# sourceMappingURL=index.js.map
"use strict";
var _a;
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
let employee = {
    id: 1,
    retire: (date) => {
        console.log(date);
    }
};
const kgsToLbs = (weight) => {
    if (typeof weight === 'number')
        return weight / 2.2;
    else
        return parseInt(weight) / 2.2;
};
console.log(kgsToLbs(10));
console.log(kgsToLbs('10lbs'));
let widget = {
    drag: () => {
        console.log('dragging');
    },
    resize: () => {
        console.log('resizing');
    }
};
widget.drag();
widget.resize();
let quantity = 'one';
let oddNumber = 1;
const greet = (name) => {
    if (name)
        console.log(`Hello ${name.toUpperCase()}`);
    else
        console.log(`Hola!`);
};
greet('Steve');
greet(null);
greet(undefined);
const getCustomer = (id) => {
    return id === 0 ? undefined : { birthDay: new Date() };
};
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('Hello');
//# sourceMappingURL=index.js.map
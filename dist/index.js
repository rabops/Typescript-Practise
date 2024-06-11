"use strict";
const myName = 'rabsun';
// List
const favMovies = [];
favMovies.push("Interstellar");
console.log(favMovies);
// tuples
const user = [1, "Rabsun"];
console.log(user[1]);
let mysize = 2 /* Size.Medium */;
console.log(mysize);
// Function
const calculateTax = (income, taxyear = 2022) => {
    if (taxyear > 2021)
        return income * 2;
    return income * 1.2;
};
console.log(calculateTax(1000));
// Object
let employee = {
    id: 1,
    name: 'Rabsun',
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee.retire);
// Union Type
function poundtokg(weight) {
    if (typeof weight == 'number')
        return weight * 1.2;
    else
        return parseInt(weight);
}
console.log(poundtokg(10));
console.log(poundtokg('10kg'));
let textBox = {
    drag: () => { console.log('hello'); },
    resize: () => { }
};
let lemons = 50;
let banana = "kg";
// Nullable Types
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('ola');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map
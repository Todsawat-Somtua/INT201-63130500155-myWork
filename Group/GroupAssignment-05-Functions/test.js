import {greeting, min, operator} from './func.js'

let name = greeting('benz','mod','spy');
console.log(name('Hi'))

let number = [10,40,50];
let tryNumber = [100,90,70,1000,1,22,0.5]
console.log(min(number));
console.log(min(tryNumber));

console.log(operator(number,min))
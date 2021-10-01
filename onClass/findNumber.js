// Find the 3 numbers
function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

const number1 = randomNumber(); /* assigned 1st number */
const number2 = randomNumber(); /* assigned 2nd number */
const number3 = randomNumber(); /* assigned 3rd number */

/* assigned numbers to array for using in the future */
let numbers = [number1, number2, number3];

/* appear what numbers you have */
console.log(`Three number is : ${numbers}`);

/* function for finding a summary of three numbers */
function findSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

/* function for finding a minimum of three numbers */
function findMin(numbers){
    return Math.min(...numbers)
}

/* function for finding a maximum of three numbers */
function findMax(numbers){
    return Math.max(...numbers)
}

/* menu function */
var menu = 2;
switch (menu){
    case 1 :console.log(`Summary is ${findSum(numbers)}`);
        break;
    case 2 :console.log(`Minimum is ${findMin(numbers)}`);
        break;
    case 3 :console.log(`Maxinum is ${findMax(numbers)}`);
        break;
    default :console.log('1-3')
}

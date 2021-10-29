//High Order Function & Destructuring

export function operator(array,fn){
    return fn(array);
}

export function average(arrNumber){
    let sum = 0;
    sum = arrNumber.reduce((previous, current) => previous + current);
    return sum/arrNumber.length;
}
let number = [10,30,50];
console.log(average(number))

export function min(arNumber){
    return Math.min(...arNumber)
}

export function max(array){
    return Math.max(...array);
}

//default & Rest parameter & Closure
export function greeting( name = 'guest', ...friend) {
    function sayHi(message) {
        return `${message} ${name},${friend}`
    }
    return sayHi;
}
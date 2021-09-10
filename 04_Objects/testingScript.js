//#0 variable with single value
let productC = "Coke";
let productP = "Pepsi";
let price1 = 15;
let price2 = 13;

//#1 array set of multiple values
let product = ["Coke", "Pepsi"];
let price = [15, 13];

//#2 array of objects
let products = [
    {product:"Coke", price: 15},
    {product:"Pepsi", price: 13}
];

//#3 object with array value { propertyKey1: propertyValue1, propertyKey2: propertyValue2}
let product2 = {
    products: ["Coke", "Pepsi"],
    price: [15, 13]
};

//console.log(products);
console.log(product2);
let car = [
{   carId:'h001',
    carName:'Honda City e:HEV',
    color:'Blue',
    price:'839,000'
},
{   carId:'h002',
    carName:'Honda Civic 2021',
    color:'Red',
    price:'964,000'
},
{   carId:'h003',
    carName:'Honda Jazz',
    color:'Black',
    price:'555,000'
},
{   carId:'h004',
    carName:'Honda Accord',
    color:'White',
    price:'1,475,000'
}]

const divCarsEle = document.querySelector('#container')
console.log(divCarsEle)

const divCarEle = document.createElement('div');
for (let index = 0; index < car.length; index++) {
    divCarEle.setAttribute(id, car[i].carId);
    divCarEle.setAttribute(id, car[i].carName);
    divCarEle.setAttribute(id, car[i].color);
    divCarEle.setAttribute(id, car[i].price);
};
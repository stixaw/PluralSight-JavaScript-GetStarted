// let textMessage;
// textMessage = "Why?";

// let length = textMessage.length;

// let amount = 123;
// let text = '123';

// amount = amount.toString();

// text = Number.parseInt(text);

// showMessage(amount + ' - ' + text);
// showMessage(typeof(amount) + ' - ' + typeof(text));

// let person = {
//     firstName: "Angel",
//     lastName: "Nottelling",

// };

// message = `Hello ${person.firstName} ${person.lastName}`;

// showMessage(message);

//=====================
// Conditions and Looping

// let a = 5
// let b = a + 2

// if(a === b ) {
//     showMessage('true')  
// }
// else{
//     showMessage('false')
// }

// let vin = 1 === "1";

// switch(vin){

//     case true:
//         showMessage("on");
//         break;
//     case false:
//         showMessage("off")
//         break;
// }

// (vin) ? showMessage("true"): showMessage("false")

// for (let i=0; i<4; i++){
//     console.log(i)
// }

// let count = 0;

// while(count < 4){
//     console.log(count)
//     count++
// }


// do{
//     showMessage(`Sale ${count}`)
//     console.log(count)
//     count++
// }
// while(count < 8)

//======================
//Functions

function my_Function(message) {
    showMessage(message)

}

// my_Function("A FUNCTION")

//Function Expresssion

const fn = function my_Function(message) {
    showMessage(message)

}

// fn("This is an expression");

// Function return
// function salaryReduction(perc, x) {
//     let result = perc/100 * x;
//     result = x - result
//     return result;
// }

// showMessage(salaryReduction(7.5, 85900));

//Scope of Function
// results is defined in the block of code for the function and is not available 
// console.log(result);

// setting the result by calling the function to declare it.
// const result = salaryReduction(7.5, 85900);
// showMessage(result);

// global function

// let result;

// function salaryReduction(perc, x) {
//     result = perc/100 * x;
//     result = x - result
//     return result;
// }
// salaryReduction(7.5, 85800)
// showMessage(result);

//Using functions to change web pages

// showMessage(salaryReduction(7.5, 29.99).toFixed(2));
// changePercentage(7.5)

//Objects

let car = {
    doors: 4,
    color: 'red',
    make: 'CR-V',
    manufacturer: 'Honda'
}

car.make = 'HR-V'

// showMessage(car.make)
// changePercentage(car.color)

// Symbols
// instantiating the symbol class
// custom information that we don't want everyone to use and see
// HR software keep salary confidential
// code to access my symbol need to access it in the car
let mySymbol = Symbol();

car = {
    doors: 4,
    color: 'red',
    make: 'CR-V',
    manufacturer: 'Honda',
    [mySymbol]: 'hidden'
}

// showMessage(car.mySymbol)

// Methods in Objects
car = {
    doors: 4,
    color: 'red',
    make: 'CR-V',
    manufacturer: 'Honda',
    [mySymbol]: 'hidden',
    showInfo: function(){
        showMessage(this.manufacturer);
    }
}
// car.showInfo();

// Passing Object to function
car = {
    doors: 4,
    color: 'red',
    make: 'CR-V',
    manufacturer: 'Honda',
    showInfo: function() {
        console.log("In show info")
    }
}

function changeColor(car, color) {
    car.color = color;
}

// changeColor(car, 'purple')

// showMessage(car.color)

// Styling DOM elements

changeElementColor('message', 'purple')

// Get Click event 
getClick('review-btn')

// let values = ['a', 'b', 'c'];

//access an element
// let element1 = values[0];
// console.log(element1); //result = a

// add to end of array
// values.push('d');
// console.log(values); //result = ['a', 'b', 'c', 'd']

//add to front of array
// values.unshift('z');

//looping through and array
// values.forEach(function(item, index, array) {
//     console.log(item, index)
// })
//results z 0, a 1, b 2, c 3, d 4

//changing an element
// values[0] = 'aa';
// console.log(values[0]); //result aa

// slice create new array from original array
// values = ['a', 'b', 'c', 'd', 'e'];
// const newValues = values.slice(1, 4);
// console.log(newValues); // result ['b', 'c', 'd']
// console.log(values); // result ['a', 'b', 'c', 'd', 'e']

// splice removes from original array
// values = ['a', 'b', 'c', 'd', 'e'];
// const removed = values.splice(2, 1);
// console.log(removed); //result c
// console.log(values); // result ['a', 'b', 'd', 'e']

//splice add element in index defined to original array
// values = ['a', 'b', 'c', 'd', 'e'];
// values.splice(2, 0, 'zz');
// console.log(values); //results ['a', 'b', 'zz', 'c', 'd', 'e'];

// const containers = document.getElementsByClassName('container'); //HTML Collection very much like an array
// containers[2].classList.add('d-none')
// console.log(containers.length)

//Hoisting
// productId = 456; // this is a reference to an undeclared variable
// console.log(productId);

// var productId = 123; //this allows the productID above to be used without declaring it properly

// functions get hoisted directly to the top

// 'use strict';

// productId = 1234;
// console.log(productId)
//this is being declared on an object called window

function foo() {
    return "bar"
}
console.log(foo())

for(let i=0; i <= 5; i++){
    console.log(i)
}
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


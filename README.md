- You will need to have Node installed to start this environment. If you are not sure if you have Node installed run `node -v` in your terminal. If you do not see a version number output, install Node before moving on.
- Install light-server locally and save it to your development environment by running `npm install lite-server --save-dev` in your terminal.
- Run `npm run start` in your terminal to start the server.
- Your browser will open at `localhost:3000`.


#### Adding JavaScript to HTML
```html
<script src="./filename.js"></script>
```

#### Formatting code using whitespace

use white space to make it easier to read to those looking at the code

#### Using DevTools Console to debug

Errors will show up in the console and will tell you the file and line

#### Case Sensitivy

JavaScript is case sensitive

#### Comments:

```javascript
// Single Line Comment
```

```javascript
/* multiple 
line 
comments
*/ 
```
------------------------------------------------
## Module 4
### Variables and Constants

##### What is a variable?

data is important to any program we write.  The data can be stored in a variable in the computer memory.

we reference that data by the variable (address in memory)

##### Declaring Variables

the use of = declare a variable
examples: 
```let message = "a message";```

```const num1 = 2;```

```let discount = true;```

keywords: 
let or const

true or false are boolean values and javascript knows about them so they are not a string.

##### Naming Variables

###### rules for names:
* starts with one of these:  _, letter
* is not a keyword: let, const, true
* can't start a variable name with an number
* can't have spaces
* can't use variable that is not declared, it is normally undefined.

examples:
account, account_99, accountNumber (camel case), _accountNumber

##### Common Errors uing Variables

red squiggly lines show errors :)
uncaught SyntaxError: Invalid or unexpected token 
no 

##### Changing Variable Values

variables are mutable by creating a statement with the new value
let price;
price = 99;
price = 49.99

##### Constants

constants do not change.
```const price = 40;```

if you try to change a constant you will get an error:
Uncaught TypeError: Assignment to constant variable

When setting a constant it must be declared to a variable
error:
Uncaught SyntaxError: Missing Initializer in const declaration

##### The var Keyword (not best practise) DO NOT USE IT
--------------------------------------------------------
## Module 5
#### Types and Operators

##### Numbers

```
let price = 20.99;
price = price + 1;
price = price - 1;

price = 12;
price = price * 3;
price = price / 3;

price = price % 5;  //modulus

price += 5;

price -= 4;

price *= 4;

price /= 2;

price++;  //incraments

price--; //decraments

++price; 

--price;
```

##### Operator Precedence

* before / before  % before + before -
evaluated left to right
parenthesis (grouping) before * before / before  % before + before -

source mdn operator precedance:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


##### Number Precision

javacript has number precision issues with floating decimals

```let price = 1.1 + 1.3;```
results in  2.4000000000000004 which is not what we expected

##### Negative Numbers

``` let amount = 20 - (-2);```
the result is 22 put the negative number in parenthesis to make it clear the intention of the negative number

##### Strings

text in single quotes '' or double quotes "" or backtick ``

##### Manipulating Strings

backtick allows for string interpalation:
``` let string = `${variablename}` ```

escape symbol is the \ allows for double quotes in a string

so to have double quotes "Hello \"World\""
turns out to be 
Hello "World"

mdn:
https://developer.mozilla.org/en-US/docs/Web/Javascript/Reference/Global_Objects/String

escape notation:
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\v vertical tab
\t tab
\b backspace
\f form feed

concatination adds two string into one:

"this is a string" + " that takes two and becomes 1"

###### Methods in the string class
also the class string has many methods that can be applied to the string

example:
``` message = message.toUpperCase();```

``` message = message.substring(0, 2); ```

###### properties:
length
example:

message = message.length;

##### Converting Strings and Numbers

string to a number:
```
let amount = 123;
amount = amount.toString();

let text = '123';
let number = Number.parseInt(text)
```
NaN = not a number

number to a string:

##### Boolean Values

true false yes no

to flip it: (not operator)
!true  results in false
!false results in true

##### null and undefined

```
let saved;
console.log(saved)
```
results in undefined because we have not initialized the variable

to wipe out saved:
```
saved = null
console.log(saved)
```
results in null 

##### Objects

Objects are declared using {}

person has a firstname and lastname
within the Object we have properties which are types of variables storing the data for that property.

```
let person = {
    firstName: "Angel",
    lastName: "Nottelling",

}

let person = {
    firstName: "Angel",
    lastName: "Nottelling",

};

message = `Hello ${person.firstName} ${person.lastName}`;
```

##### Symbol use symbols to hide an object???

-----------------------------------------------------------
## Module 6
### Program Flow

javascript will flow top to bottom if written that way.

#### Conditionals

Comparison operators are used to test the conditions inside our conditional statements.

* ===  equal
* !==  not equal
* <  greater than
* >  lesser than
* <=  greater than or equal to
* >=  lesser than or equal to

Logical operators: AND, OR and NOT
If you want to test multiple conditions without writing nested if...else statements, logical operators can help you. When used in conditions, the first two do the following:

&& — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
|| — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

! - not

#### Truthy or Falsy

###### falsy
false
0
''
""
null
undefined
NaN

###### truthy
everything not false is true
every number not 0 is true
"0" true every not empty string

#### if ... else
Let's look at by far the most common type of conditional statement you'll use in JavaScript

codeblock is between the paranthesis

```
if (condition) code to run if condition is true
else run some other code instead
```

#### Comparing === and ==

===  and !== identically equal type equality

``` 1 === "1"  results in false ```

javascript will try to convert types so string 1 become number 1

``` 1 == "1" results in true ```

#### Switch statements
 switch statements are your friend — they take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it.

 ```
 switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;
    
  // include as many cases as you like

  default:
    actually, just run this code
}
```

#### The Ternary Operator
The ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false — this can be useful in some situations, and can take up a lot less code than an if...else block if you simply have two choices that are chosen between via a true/false condition. 

```( condition ) ? if condition is true run this code : false run this code instead```

#### Block Scope Using let

variables declared within a block is only available in that block of code
block is code existing between { }

example: 
``` if (true){
    const value = 'yes';
    showMessage(value);
}
console.log(value);  // becomes value is undefined
```

global variable exist outside of block and can be used by all blocks

example: 

```
const value = 'yes';

if (true){

    showMessage(value);
}
console.log(value);  // results in true
```

#### Looping with for()

for loop is a way to loop through a block of code while a condition is defined for a set number of loops and is still true:
```
for (let i = 0; i < 5; i++){
    console.log(i);
};
//results 0 1 2 3 4

```
must be careful to not make an infinate loop
have to stop the service and restart and fix the infitnate loop first!

example:
```
for (let i=0; i < 5; i--);
```

#### Looping with while()

while loops loop while the condition is true as well.

```
let count = 5;

while(count > 0) {
    console.log(count);
    count--;
};
//results 5 4 3 2 1
```

#### Looping with do ... while()

```
let count = 0;
do{
    showMessage(`Sale ${count}`);
    console.log(count);
    count++;
}
while(count < 8);
```
-------------------------------------------
## Module 7
### Functions
Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.  A Function is a block of code which is named.

you want your code to be reusable in a function.

#### Function Basics

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly brackets, {...}.

example:
```
function my_Function() {
   console.log("my function");
};

calling a function
my_Function("A FUNCTION");
```

#### Function Expressions
While the function declaration above is syntactically a statement, functions can also be created by a function expression.

Such a function can be anonymous; it does not have to have a name.

example:
```
let fn = function expression() {
    showMessage("expressions");
}

calling the expression
fn();
```

#### Passing Information to Functions
Calling the function actually performs the specified actions with the indicated parameters

example:
```
function squared(x) {
    return x * x;
};

calling:
squared(5);
```

#### Function Return Values

example:
```
function squared(x) {
    const result = x * x;
    return result;
};

calling:
squared(5);
returns: 25
```

#### Function Scope
variables in the body of a function will only be available inside that function

if a variable is set outside of the function and is return from the function its available to the next block of code

#### Using Functions to modify Web Pages

a function can feed results to a web page by creating data for a variable held in a textContent 

-------------------------------------------
## Module 8
### Objects and the DOM

#### Object Properties

variables attached to an object

example:
```
let car = {
    doors: 4,
    color: 'red',
    make: 'CR-V'
    manufacturer: 'Honda'
}
```

changing properties in Object
```
car.color = 'blue'

car['make'] = 'HR-V'
```

#### Object Methods

functions attached to an object
example:
```
let car = {
    doors: 4,
    color: 'red',
    make: 'CR-V'
    manufacturer: 'Honda'
    showInfo: function() {
        console.log("In show info")
    }
}
```

#### Passing Objectes to Functions

Very different to pass an object to a function
when you pass an object that function has access to all its properties and methods

example not using object:
```
let message = "Hello";
function changeMessage(message){
    message = "Hi";
}

changeMessage(message); this only changes the parameter message because it doesn't return the variable
showMessage(message);
```

example with Object:
```
let car = {
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

changeColor(car, 'purple')

showMessage(car.color)
```

#### Standard Built-in Objects

The term "global objects" (or standard built-in objects) here is not to be confused with the global object. Here, "global objects" refer to objects in the global scope.

The global object itself can be accessed using the this operator in the global scope. In fact, the global scope consists of the properties of the global object, including inherited properties, if any.

examples:
Date
Math


#### The Document Object Model (DOM)
The Dom:
The DOM is a document model loaded in the browser and representing the document as a node tree, where each node represents part of the document (e.g. an element, text string, or comment).

The DOM is one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every node in the document. Nodes can be created, moved and changed. Event listeners can be added to nodes and triggered on occurrence of a given event.

DOM was not originally specified—it came about when browsers began implementing JavaScript. 

Usage in code:

document.getElementById('id') returns an object on the DOM that has a property


#### Styling DOM Elements

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

Styleing with javascript code
HTMLElement.style


#### Detecting Button Clicks

HTMLElement.click()

Find element button
its an anchor tag <a>
handle click in javascript instead of href 

example of function:
```
function getClick(id){
    const button = document.getElementById(id);
    button.addEventListener('click', function(){
        showMessage('CLICKED')
    })
}
```

####  Showing and Hiding Elements

we can use classes to hide or show an element

example:
```
function getClick(id){
    const button = document.getElementById(id);
    button.addEventListener('click', function(){
        const review = document.getElementById('review');
        if (review.classList.contains('d-none')){
            review.classList.remove('d-none');
            button.textContent="CLOSE REVIEW";
        }
        else{
            review.classList.add('d-none');
            button.textContent="SEE REVIEW"
        }
    })
}
```

--------------------------------------------
## Module 9
### Arrays

An array is an ordered collection of data (either primitive or object depending upon the language). Arrays are used to store multiple values in a single variable. 
Each item in an array has a number attached to it, called a numeric index, that allows you to access it. 0 based index

#### Creating and Initializing Arrays
[] = array
array has 4 elements
```let myArray = [1,2,3,4];```

``` let values = Array.of(1,2,3);```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

#### Accesssing Array Items

Using Methods
```
let values = ['a', 'b', 'c'];

//access an element
let element1 = values[0];
console.log(element1); //result = a

Changing an element:
values[0] = 'aa';
console.log(values[0]) //result aa

```
#### Manipulating Arrays

```
// add to end of array
values.push('d');
console.log(values); //result = ['a', 'b', 'c', 'd']

//remove element from end of array
const last = values.pop() //result = ['a', 'b', 'c']
console.log(last) //result = d

//add to front of array
values.unshift('z');  //result = ['z', 'a', 'b', 'c']

// remove element from front of array
const first = values.shift(); //result = ['a', 'b', 'c']
console.log(first) result z
```

#### slice() and splice()

* slice() creates a new array
* splice(index, deleteCount)
* splice(index, deleteCount, newItems)

slice create new array from original array
```
values = ['a', 'b', 'c', 'd', 'e'];
const newValues = values.slice(1, 4);
console.log(newValues); // result ['b', 'c', 'd']
console.log(values); // result ['a', 'b', 'c', 'd', 'e']
```

// splice remove items in an array
```
values = ['a', 'b', 'c', 'd', 'e'];
const removed = values.splice(2, 1);
console.log(removed); //result c
console.log(values) // result ['a', 'b', 'd', 'e']
```

// splice to add item in array
```
values = ['a', 'b', 'c', 'd', 'e'];
values.splice(2, 0, 'zz');
console.log(values); //results ['a', 'b', 'zz', 'c', 'd', 'e'];
```

#### Array Searching and Looping

Looping
```
let values = ['a', 'b', 'c'];
//looping through and array
values.forEach(function(item, index, array) {
    console.log(item, index)
})
//results a 0, b 1, c 2
```

Searching
find an index of an item:
```
let values = ['a', 'b', 'c'];
let pos = values.indexOf('a');
//result = 0
```

Filter
loops through the array and compares the item in the element that matches the item we are looking for..
```
let values = ['a', 'b', 'c'];
const set = values.filter(function(item) {
    return item > b
})
console.log(set) //result = c
```

Find
look through to find first time that matches criteria
```
let values = ['a', 'b', 'bbb', 'c'];
const found = values.filterfind(function(item) {
    return item.length > 1
})
console.log(found) //result = bbb
```

#### Arrays in the DOM

Arrays in DOM when created are HTMLCollections

Can find elements and add them to an array and manipulate the items
```
const containers = document.getElementsByClassName('container'); //HTML Collection very much like an array
containers[2].classList.add('d-none')
console.log(containers.length)
```

-----------------------------------------------
## Module 10
### Scope and Hoisting
The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

#### Global Scope
he following code is valid due to the variable being declared outside the function, making it global:
```
let x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);

```
polluting the global scope is when there are too many variables at the global level

best practise
create an object to contain the variables:

```
const app = {
    productId: 12345,
    userName: 'Joe',
    orderNumber: 789
};
```

#### Function Scope
A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.

```
function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // Causes error
```

#### var and Hoisting

var allows for Hoisting

Hoisting:
a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

```
productId = 456;
console.log(productId);

var productId = 123;
```

#### Undeclared Variables and Strict Mode
```
'use strict';

productId = 1234;
console.log(productId)
```

## Strategy Pattern:
```javascript
const dogs = [
  {
    name: 'Milo',
    shouldBeGroomed: true,
    groom: () => {
      console.log('BZZZZ')
    }
  },
  {
    name: 'Tinkerbell',
    shouldBeGroomed: false,
    groom: () => {
      console.log('Simple wash and brush')
    }
  },
  {
    name: 'Lynus',
    shouldBeGroomed: false,
    groom: () => {
      console.log('Simple wash and brush')
    }
  }
]
const groomAllDogsThatNeedIt = dogs => {
  if (dogs) {
    // dogs.forEach(dog => {
    //   if (dog.shouldBeGroomed) dog.groom()
    // })
    dogs.find(dog => dog.shouldBeGroomed).groom()
  }
}
groomAllDogsThatNeedIt(dogs)
```
Determine strategy for what is being called
Open/Closed Principles
"software entities should be open for extension, but closed for modification". that is, such an entity can allow its behaviour to be extended without modifying its source code


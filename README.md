- You will need to have Node installed to start this environment. If you are not sure if you have Node installed run `node -v` in your terminal. If you do not see a version number output, install Node before moving on.
- Install light-server locally and save it to your development environment by running `npm install lite-server --save-dev` in your terminal.
- Run `npm run start` in your terminal to start the server.
- Your browser will open at `localhost:3000`.


#### Adding JavaScript to HTML
```
<script src="./filename.js"></script>
```

#### Formatting code using whitespace

use white space to make it easier to read to those looking at the code

#### Using DevTools Console to debug

Errors will show up in the console and will tell you the file and line

#### Case Sensitivy

JavaScript is case sensitive

#### Comments:

```// Single Line Comment```

```
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
    showMessage(value)
}
console.log(value)  // becomes value is undefined
```

global variable exist outside of block and can be used by all blocks

example: 

```
const value = 'yes';

if (true){

    showMessage(value)
}
console.log(value)  // results in true
```

#### Looping with for()

for loop is a way to loop through a block of code while a condition is defined for a set number of loops and is still true:
```
for (let i = 0; i < 5; i++){
    console.log(i)
}
//results 0 1 2 3 4

```
must be careful to not make an infinate loop
have to stop the service and restart and fix the infitnate loop first!

example:
```
for (let i=0; i < 5; i--)
```

#### Looping with while()

while loops loop while the condition is true as well.

```
count = 0;

while(count !== 5) {
    console.log(count)
    count++
}
//results 0 1 2 3 4
```

#### Looping with do ... while()

```
do{
    showMessage(`Sale ${count}`)
    console.log(count)
    count++
}
while(count < 8)
```
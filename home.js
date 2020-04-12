let textMessage;
textMessage = "Why?";

let length = textMessage.length;

let amount = 123;
let text = '123';

amount = amount.toString();

text = Number.parseInt(text);

showMessage(amount + ' - ' + text);
showMessage(typeof(amount) + ' - ' + typeof(text));

let person = {
    firstName: "Angel",
    lastName: "Nottelling",

};

message = `Hello ${person.firstName} ${person.lastName}`;

showMessage(person.firstName);
showMessage(person.lastName);
showMessage(message);


let a = 5
let b = a + 2

if(a === b ) {
    showMessage('true')  
}
else{
    showMessage('false')
}

let vin = 1 === "1";

switch(vin){

    case true:
        showMessage("on");
        break;
    case false:
        showMessage("off")
        break;
}

(vin) ? showMessage("true"): showMessage("false")

// for (let i=0; i<4; i++){
//     console.log(i)
// }

let count = 0;

// while(count < 4){
//     console.log(count)
//     count++
// }


do{
    showMessage(`Sale ${count}`)
    console.log(count)
    count++
}
while(count < 8)
const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const OtherNumber = 23.8955
console.log(OtherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//************************************************** Maths**********************************************

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4 ,8, 9,3));
console.log(Math.max(15 ,5,8,3));

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max -min + 1))+ min)

//****************************************************Date--->object***************************************** ***/

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDatestring());
console.log(myDate.toLocalString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025 , 9, 27)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-09-2025");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = new Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday: "long",
    timeZone: ""
})










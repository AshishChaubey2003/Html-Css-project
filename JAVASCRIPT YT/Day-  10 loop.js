// const prompt = require("prompt-sync")({ sigint: true });
// let sum = 0;
// let n = prompt("Enter the value of n :"); // in the place of let we use var because when we write console.log(i) it do not show  thats why we usse var let is block level element.
// n = Number.parseInt(n);
// for (let i = 0; i < 500; i++) {
//     sum +=(i + 1)

// }
// console.log("sum of first" + n + "natural number is " +  sum);

// const prompt = require("prompt-sync")({ sigint: true });
// let num = prompt("Enter the number:");
// num = Number.parseInt(num);
// let fact = 1 ;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
  
// }
// console.log(`Factorial of ${num} is: ${fact}`);

// **************************FOR IN LOOP***************************************
let obj ={
    dholu :90,
    bholu : 45,
    chutki : 65,
    jaggu : 75,
    kalia : 23
}
for (let a in obj){
    console.log("Marks of" + a + "are" + obj[a])

}

// for of loop
for (let b of "Ashish"){ // also for array does not support object 
    console.log(b)
}

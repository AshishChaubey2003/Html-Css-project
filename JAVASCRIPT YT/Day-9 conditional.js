// let a = prompt("Hey waht is your age?")
// a = number.parseInt(a)
// console.log(typeof a)
// if (a<0){
//     alert("This is invalid age");
// }
// else if(a<9){
//     alert("you are the kid ")
// }
// else if(a<18 && a>=9){
//     alert("you aare the kid yo  can  not even driving")
// }

// else{
//     alert("This is an valid age");
// }
// console.log("Done")

// Ternary  operator
// console.log("you can drive", a<18? "not drive": "drive")

// 3.
// const prompt = require("prompt-sync")({ sigint: true });

// let age = parseInt(prompt("What is your age? "));

// if (age < 0) {
//   console.log("❌ Invalid age!");
// } else if (age < 9) {
//   console.log("👶 You are a kid.");
// } else if (age < 18) {
//   console.log("🚫 You are a kid, you cannot drive.");
// } else {
//   console.log("✅ Valid age!");
// }

// console.log("Done!");

// Switch case question
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// const prompt = require("prompt-sync")({ sigint: true });

// let umar = prompt("What is your age?");
// switch (umar) {
//   case "12":
//     console.log("Your umar is 12");
//     break;
//   case "13":
//     console.log("your age is 13 ");
//     break;
// }
const prompt = require("prompt-sync")({ sigint: true });
let num = prompt("Enter the number?");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("your number is divisible by 2 amd  3");
} else {
  console.log("yor number is not divisible by  2 and 3");
}

let age = 19
let a = age > 18? "you can drive": "you cannnot drive"
console.log(a)

//  2.question
// const expr = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//      Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

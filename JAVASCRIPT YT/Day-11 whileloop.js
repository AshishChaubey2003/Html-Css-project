const prompt = require("prompt-sync")({ sigint: true });
// let n = prompt("Enter a number: ")
// n= Number.parseInt(n)

// let i = 0;
// while(i<n){
//     console.log(i)
//     i++;
// }

// do while
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// let i = 0;
// do {
//     console.log(i)
//     i++;
// }while (i < n)

// wap  tp  print  the marks of a  student in an obaject using for loop

let marks = {
    ashish:90,
    jagga_daku:64,
    phulan_devi:35,
    sarita_devi:33
} 
for (let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of"+ Object.keys(marks)[i] +  "  are " +  marks[Object.keys(marks)[i]])
}

// for in 
for (let key in marks){
    console.log(key)

}

// 3
let cn = 4
let i
while (i != cn){
    console.log("Try again");
    i = prompt("Enter the number")

}
console.log ("you have entered a correct number")

// Finding the means
const mean = (a , b, c)=>{
    return (a + b + c)/4 

}
console.log(4 ,8, 6)
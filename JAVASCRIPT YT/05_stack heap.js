// stack(Primitive) ,Heap (Non-Primitive)

let myname ="ashish"
let anothername = myname
anothername = "rahul"

console.log(myname);
console.log(anothername);

let  userone  = {
    email: "sashishchaubey1234@gmail.com",
    upi: "user@ybl"

}

let usertwo = userone

usertwo.email= "google@"

console.log(userone.email);
console.log(usertwo.email);

//-----------------------string------------------

const name = "ashish"
const repoCount = 50
//console.log(name + repoCount + "value");
console.log(`Hellow my name is ${name} and my repo count is $ {repoCount}`);

const gameName =new string ('ashish')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameNme.leeght);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 ,4)
console.log(newString);

const anotherString = gameName.slice(-4 ,4)
console.log(anotherString);

const newStringOne = "    ashish   "
console.log(newStringOne.trim());


const url = 'https://ashish.com/ashish%20chaubey'
console.log(url.replace('%20','-'))

console.log (url.includes('ashish'))

console.log(gameName.split('-'));
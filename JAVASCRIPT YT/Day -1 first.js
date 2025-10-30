// console.log("Hello World");
const accoundtId = 123456;
let accountEmail = "sashishchaubey@gmail.com";
var accountPassword = "sashi@123";
accountCity = "Bangalore";
let accountState; // we can declare a variable without assigning a value

// accountId = 456; // we cannot change the value of const variable
accountEmail = "sashish@"; // we can change the value of let variable
accountPassword = "sashi@456"; // we can change the value of var variable
accountCity = "Mumbai"; // we can change the value of var variable

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
console.table([accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because of its function scope and block scope issues.
*/

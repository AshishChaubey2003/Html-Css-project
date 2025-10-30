var:- can  be change it can  not be fix.
--> var can not be used because it  does not  know about the scope {}.
it can not used that time.
it can be change anywhere this is means globally.
let:- it is also can be change
const:- it can  not  be change it fix.
console.table:-The console.table() method in JavaScript provides a way to display tabular data in the browser's developer console or Node.js environment
# scope:-
Scope defines the visibility or accessibility of a variable.
# types of scope
1. Global Scope
2. Local Scope

# Global Scope
1. The variable declared in global scope can be accessed anywhere in the program.
2. Global scope has the highest accessibility.
3. Variable declared with var goes in Global scope.
# Local Scope
1. Local/block scope/function scope
2. The variable declared in local scope can be accessed in that block only i.e. we can not access the variable from outside.
3. JS engine creates local scope for functions and blocks.
4.
Function's Local Scope
- Local scope created for function is refered as function scope.
- Variable's declared in function's scope can not be accessed from outside.


Block's Local Scope
- Local scope created for block is refered as block scope.
- Variable's declared in block scope can not be accessed from outside.
- But only variables declared with var are accessible from outside of block.

Note: Variables declared with let and const are also locally scoped.
Firefox represent it as - Block scope.
Chrome represent it as - Script scope.

1. Block scope-->Before ES6, JavaScript variables could only have Global Scope or Function Scope.

-->ES6 introduced two important new JavaScript keywords: let and const.
# Lexical scope in js:-
lexical enviroment is created when lexical context is created.
-->Lexical scope defines the accessibility of variables and functions depending on their location in the source code.
# block:- block is wrapping multiple statement

# Global Execution Context
1. When we give JS code to the browser, JS Engine will allocate (create) a global memory block for the execution of JavaScript code, called Global Execution Context.
2. Here, we have a window variable which have reference of Global Execution Context.
# Window Variable
1. Window variable or window object -> everything is object in js.
2. Window is a global variable which store the reference of Global Execution Context
3. Window object is also known as Global Object because it is available anywhere in the program.
4. Window object have pre-defined state and behaviour.
5. Variable declared with var always goes to global scope and can be accessible by window object.
6. Any variable created in global scope will be addes in Window object implicitly by JS Engine.
7. in case of chrome- window object.
#  JavaScript Code Run In Two Phases
1. Variable phase
2. Execution phase
#Variable Phase
1. In variable phase, JS Engine will check the complete JS Code and it will search for variable declaration statement.
2. If variable is declared then JS Engine allocate (provide) memory for them.
3. Variable declared with var will be initialized storing "undefined" at the time of memory block creation.
Variable declared with let and const will remain uninitialized (empty) at the time of memory block creation.
# Execution Phase
 In Execution phase, JS Engine will execute the instruction line-by-line.



# Var
1. Variable declared with var goes to global scope.
2. We can redeclare variable with same name in same scope.
3. We can update the value of variable.
4. We can declare variable without initialization.
5. Variable declared with var , can be hoisted.
6. Variable declared inside block , will go to global scope.
7. Variable declared inside function , will not go to global scope. It will be accessible inside function only.
# let
1. Variable declared with let is block scoped.
2. We cannot redeclare variable with same name in same scope.
3. We can update the value of variable.
4. We can declare variable using let without initialization. But js engine will keep that memory block uninitialized (empty) untill js engine reads declaration statement in execution phase.
5. Because let variable is uninitialized (empty) in variable phase , it belongs to Temporal Dead Zone.
6. The variable declared using let does not belongs to global scope , we cannot access them with the help of window variable.
7. The variable declared using let is hoisted and belongs to temporal deadzone. Therefore it cannot be used before initialization (because at that moment it is uninitialized - TDZ) .
8. Variable declared inside function will be accessible inside function only.
# Const
1. Variable declared with const is block scope.
2. We cannot redeclare variable with same name in same scope.
3. The value of variable can not be modified.
4. We can not declare const without initialization.
5. The variable declared using const is hoisted and belongs to temporal deadzone. Therefore it cannot be used before initialization (because at that moment it is uninitialized - TDZ) .
6. The variable declared using const inside block ,does not belongs to global scope we cannot use them with the help of window.
7. Variable declared inside function will be accessible inside function only.



# primitive datatype (stack nnssbbu)

7 types
1. string
2. number
3. bool
4. null
5. undefined
6. symbol
7. BigInt

# Reference type or Non- primitive type:-typeof is always object.
Always store in heap memorey
1. Arraay
2. object
3. Function

javascript is dynamicaly type language
example = const score =100
const scorevalue= 100.3
const isloggedin = false
const outsidetemp = null

# Difference b/w Primitive and Non-Primitive Dt

primitive dt:- give only carbon copy stack
1. Primitive Data types are predefined
2. Primitive Data types will have certain values.
3. Size depends on the type of data structure.
4. Examples are numbers and strings.
5. It can start with a lowercase.	

Non-primitive dt:- gives reference for that .
1. Non-Primitive data types are created by the programmer
2. Non-Primitive data types can be NULL.
3. Size is not fixed
4. Examples are Array and Linked List.
5. It can start with uppercase.

# Number
console.log(Math.floor(Math.random() * (max -min + 1)))

Array:-the array object , as with arrays in other programming language enablies storing a collection of multiple item under a single variable name and has members for performing common array operation.

In JavaScript, an array is an ordered list of values. Each value, known as an element, is assigned a numeric position in the array called its index. The indexing starts at 0, so the first element is at position 0, the second at position 1, and so on.

array methods:-
.push(6)
 pop()
 unshift(0)
 shift()


# Functions
1. Function is object.
2. Function is a block of instruction which is used to perform a specific task.
3. A function get executed only when it is called.
4. The main advantage of function is we can achieve code reusability.
5. To call a function we need its reference and ().
6. Name of function is variable which holds the reference of function object.
7. Creating a function using function keyword supports function hoisting.
8. Therefore we can also call a function before function declaration.
9. When we try to log function name the entire function defination is printed.
10. The scope within function block is known as local scope.
11. Any member with local scope cannot be used outside the function block.
12. A parameter of function will have local scope.
13. Variable written inside function even using var have local scope.
14. Inside a function we can use the members of global scope.
15. In javascript 'this' is a property of every function.(every function will have 'this' Keyword except arrow function)
# Parameter
1. The variables declared in the function defination is known as parameters.
2. The parameters have local scope (can be used only inside function body).
3. Parameters are used to hold the values passed by caller (or calling statement).
# Arguments
1. The values passed in the method call statement is known as arguments.
2. Note : An argument can be a literal, variable or an expression which gives a results.
# Return Keyword
1. It is a keyword used as control transfer statement in a function.
2. Return will stop the execution of the function and transfer control along with data to the caller.
# Ways To Create Functions
1. Function declaration statement : Create using function keyword
1. 
Syntax :


function func_variable(parameters) {    
  //statements
}
func_variable()  
2. 
Example : Create a function 'greet' which should print a message "Good Morning" when it is called.


function func_variable(parameters) {    
  //statements
}
func_variable()  
3. 
Function can be Hoisted.


//Here, we are accessing function before it's declaration statement.


greet();
function greet() {
  console.log("Good Morning");
}


output : Good Morning
4. Function does not belongs to temporal dead zone.
2. Function as expression / expression function
1. Function which is passed to an variable as a value is called as first class function.
2. Function can not be Hoisted because it is object is created in execution phase.
3. Function does not belongs to temporal dead zone
# Functional Programming
1. Functional Programming is a programming technique where we pass a function along with a value to another function.
2. In this approach, we generate Generic Function. Here function task is not predefined. It perform multiple task not only single task
3. The Function which accept another function as a parameter or return a function is known as 'Higher Order Function'.
4. The Function which is passed to another function or the function which is returned by another function is known as 'Callback Function'.
# Types Of Functions
1. Function decalaration statement : Using function keyword
2. Function as expression / expression function
3. Immediate Invoke Function (IIF)
1. when a function is called as soon as it's object is created is known as Immediate Invoke Function.
2. We have to write the function inside the paranthesis to group it. [using Group operator -> (function code) ].
3. The function is not visible(available) outside the scope.
4. After grouping it, we have to use paranthesis to call this function.
5. Immediate Invoke Function execute only once.
4. Arrow Function
1. The main function of arrow function is to reduce the function syntax.
2. Arrow Function is introduced in ES6.
3. If we have only single parameter, it is not necessary to use paranthesis for paramenter.
4. If function have single statement, then block (curly braces) is optional.
5. It does not have its own 'this' property.
6. Implicit return :- If there is only one statement and If block is not created then JS Engine will return that statement automatically.
7. Explicit return :- If block is created and function is not returning any value, JS Engine will return undefined. To return a value Explicitly from block, we have to use return keyword.If block is created then we have to use return keyword to return value otherwise JS Engine will return undefined.
5. Higher Order Function
1. The Function which accept another function as a parameter or return a function is known as 'Higher Order Function'.
6. Callback Function
1. The Function which is passed to another function or the function which is returned by another function is known as 'Callback Function'.
# Nested Function
1. The function inside another function is called as nested function.
2. 
Example :


function outer(){
      function inner(){
      }
      return inner
}
3. The outer function is known as parent and the inner function is known as child.
4. The inner function is local to outer function, it cannot be accessed from outside.
5. 
To use inner function outside, the outer function must return the reference of inner function.


function outer(){
      function inner(){
      }
      return inner
}

We can now call inner function from outside as follows:

1st Way:




let fun=outer();
fun();   // -----> inner() is called

2nd Way:


outer()();   // -----> inner() is called


# Dynamic typed language- (javascript)
variable are change during the run time are called dynamic typed language.

# static typed- 
variable are change during the compile time .

# variable-
-->It is the container that used to store the data.
-->typeof change during the run time.

Rules for choosing variable name
-->Letters , digits,underscore & $ sign  allowed.
-->Must begin with a $, _ or letter
-->Javascript reserved words cannot be used as variable name
-->Ashish and ashish are different variable (case sensitive)

# Expressions & conditionals
A fragment of code that produces a value is called an expression . Every value written literally is an expression for exp: 77 or "Harry"

1. Arithematic operator
2. Assignment operator
3. comparison operator
 a. === equal value and type
 b. == equal to
 c. ? = ternary operator
4. Logical operator 
a. &&
b. or
c. Not
6. Bitwise operator 
# conditional statement
1. if
2. if ,else
3. if..else,if ...else statement

# Loops
1. For loop --> A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is
2. For In loop -->The for...in statement iterates a specified variable over all the enumerable properties of an object. 
# exxample:-
for (variable in object)
  statement
3. For of Loop--> The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
4. while loop // condition check after block Run
5. Do while  // block run condition check 

# switchcase statement
1. continue
2. Break

1. While Loop:
-->The while loop repeatedly executes a block of code as long as the specified condition is true.
-->The condition is checked before entering the loop.
The condition is evaluated.
-->If condition is true, the loop body is executed.
-->Repeat steps 1 and 2 until condition becomes false.

2. Do-While Loop:
-->The do-while loop is similar to the while loop, but the condition is checked after the execution of the block of code.
-->This ensures that the code inside the loop is executed at least once, even if the condition is initially false.

1. The loop body is executed at least once.
2. Then, the condition is evaluated.
3. If condition is true, repeat steps 1 and 2.
4. Stop when condition becomes false.

# String
strings are used to store and manipulate text string can be created using the
------> followinng syntax:<-------
let name = "Ashish" --> create  a string.
name.lenght --> This property parts lenght of the string.
-->can be also created using single quotes also.

# Template literals/String interpolation:-
Template literals use backticks instead of  quotes to define a string.
let name = `ashish`

# escape sequence:-
we can use \" inside the string with double quotes

# Arrays:-
It is the collection of some item.
Arrays are variable which can hold moree then one value.
Array sre the muutable datatype.

# Hoisting
Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope before the code runs. This allows you to use them before they are actually declared in your code.
1. The ability of  js engine to access a variable before its declaration statement is known as hoisting.
2. variable declared wit var, let,const support hoisting.
 or 
Hoisting is js behaviour of moving declarations to the top of their scope during the compilation phase,before code execution.
# Temporal dead zone(Tdz):-
1. It is the time frame between variable declaration and variable initialization in this time frame we can not access a variable.
2. variable declared with let and  const belong to temporal dead zone (tdz).

# closure:-



# interview questions-

1. What is equality in JavaScript ?
JavaScript has both strict and type–converting comparisons:

Strict comparison (e.g., ===) checks for value equality without allowing coercion

Abstract comparison (e.g. ==) checks for value equality with coercion allowed

2. What is typeof operator?
JavaScript provides a typeof operator that can examine a value and tell you what type it is:

3. Explain is Scope in JavaScript?
In JavaScript, each function gets its own scope. The scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function's scoped variables.

A variable name has to be unique within the same scope. A scope can be nested inside another scope. If one scope is nested inside another, code inside the innermost scope can access variables from either scope.

4. Explain arrays in JavaScript?
An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions.

5. What is the object type?
The object type refers to a compound value where you can set properties (named locations) that each holds their own values of any type.

6. Explain what a callback function is and provide a simple example
A callback the function is a function that is passed to another function as an argument and is executed after some operation has been completed.

# Topic  Function Interview Questions
Basic Concepts:
1. What is a JavaScript function?
A reusable block of code designed to perform a specific task.
2. Name at least three types of functions in JavaScript.
Named functions (function declarations), anonymous functions (function expressions), and arrow functions.
3. Explain the difference between a function declaration and a function expression.
Function declarations are hoisted, while function expressions are not. Function declarations are defined with the function keyword followed by a name, while function expressions are assigned to a variable.
3. What are arrow functions? How do they differ from regular functions?
A concise syntax for writing functions. Key differences include lexical this binding and not having their own arguments object.
4. What is the purpose of the return statement in a function?
To specify the value a function sends back to the caller and to terminate function execution.
5. Can a JavaScript function return multiple values? If so, how?
Not directly, but you can return an array or an object containing multiple values. 
# Advanced Concepts:
What are closures? Provide an example of their use.
1. Closures allow a function to retain access to its lexical scope, even when executed outside that scope. Common uses include data privacy and creating factory functions.
2. Explain function hoisting in JavaScript.
Function declarations are moved to the top of their scope during compilation, making them accessible before their declaration in the code.
3. What is a Higher-Order Function (HOF)? Give an example.
A function that takes one or more functions as arguments or returns a function. Examples include map, filter, and reduce.
4. What is a callback function? Why are they used?
A function passed as an argument to another function, to be executed later. Used extensively in asynchronous operations and event handling.
5. What is the this keyword in JavaScript functions? How does its value change?
this refers to the context in which a function is executed. Its value depends on how the function is called (e.g., method call, standalone function, arrow function).
6. Explain the call(), apply(), and bind() methods. When would you use each?
Methods used to control the this context of a function. call() and apply() invoke the function immediately, while bind() returns a new function with the bound this context.
7. What are generator functions?
Functions that can be paused and resumed, returning a sequence of values using the yield keyword.
8. Does JavaScript support function overloading? Explain.
No, JavaScript does not support traditional function overloading. If multiple functions have the same name, the last one defined overwrites the previous ones. Overloading can be simulated by checking the number or types of arguments within a single function. 
9. What is recursion? How can it be used in functions?
A function that calls itself. Used for problems that can be broken down into smaller, self-similar subproblems.

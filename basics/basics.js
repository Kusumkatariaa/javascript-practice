// Basic Console Usage

// 1. Create two variables: one storing your full name and another storing your favorite hobby. Print:
// "My name is and ".

let fullName = "John Doe";
let favoriteHobby = "painting";

console.log(`My name is ${fullName} and my favorite hobby is ${favoriteHobby}.`);

// -----------------------------------------------------------------------------------------------------------

// 2. Perform the arithmetic calculation 45 * 2 - 10 and print the result.
let result = 45 * 2 - 10;
console.log(result);

// -----------------------------------------------------------------------------------------------------------

// 3. Retrieve and print the current year using JavaScript’s Date object.

let currentYear = new Date().getFullYear();
console.log(currentYear);

// -----------------------------------------------------------------------------------------------------------

// 4. Store your first name and last name separately and print your full name.

let firstName = "Kusum";
let lastName = "Kataria";
let fullName2 = `${firstName} ${lastName}`;

console.log(fullName2);

// -----------------------------------------------------------------------------------------------------------

// 5. Create a variable, print it, update it, and print again.
let myVar = 10;
console.log(myVar);

myVar = 20;
console.log(myVar);

// 6. Print a custom error message using console.error().

console.error("This is a custom error message.");

// -----------------------------------------------------------------------------------------------------------

// 7. Store a number and print its square.
let number = 5;
let square = number * number;

console.log(`The square of ${number} is ${square}.`);

// -----------------------------------------------------------------------------------------------------------

// 8. Create a boolean variable and print it.

let isJavaScriptFun = true;
console.log(isJavaScriptFun);

// 9. Store your age and print whether it is greater than 18.
let age = 17;
let isAdult = age > 18;
console.log(`Is age greater than 18 ? ${isAdult}`);

// -----------------------------------------------------------------------------------------------------------

// 10. Divide 100 by 0 and print the result.

let divisionResult = 100 / 0;
console.log(divisionResult);

// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------

// Variables & Data Types

// 11. Create a variable using let and print it.

let myVariable = "Hello, World!";
console.log(myVariable);

// -----------------------------------------------------------------------------------------------------------

// 12. Declare a constant PI = 3.14 and print it.

const PI = 3.14;
console.log(PI);

// -----------------------------------------------------------------------------------------------------------

// 13. Create a variable, update it, and print again.

let myVariable2 = "Initial Value";
console.log(myVariable2);

myVariable2 = "Updated Value";
console.log(myVariable2);

// -----------------------------------------------------------------------------------------------------------

// 14. Print typeof null.

console.log(typeof null);

// -----------------------------------------------------------------------------------------------------------

// 15. Store "25" in a variable and print its type.

let stringNumber = "25";
console.log(typeof (stringNumber));

// -----------------------------------------------------------------------------------------------------------

// 16. Create a boolean and print its type.

let isSunny = false;
console.log(typeof isSunny);


// -----------------------------------------------------------------------------------------------------------

// 17. Create a string, number, and boolean. Print all together.

let myString = "Hello";
let myNumber = 42;
let myBoolean = true;

console.log(myString, myNumber, myBoolean);

// -----------------------------------------------------------------------------------------------------------

// 18. Declare a variable without value and print its type.

let variableWithoutValue;
console.log(typeof variableWithoutValue);

// -----------------------------------------------------------------------------------------------------------

// 19. Create a variable with undefined and print its type.

let undefinedVariable;
console.log(typeof undefinedVariable);


// -----------------------------------------------------------------------------------------------------------

// 20. Create an array using const.
// - Print it
// - Try reassigning (observe error)
// - Push a new value and print updated array.
const myArray = [1, 2, 3];
console.log(myArray);

// myArray = [4, 5, 6]; // This will cause an error

myArray.push(4);
console.log(myArray);
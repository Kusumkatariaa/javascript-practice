// Loops

// 1. Print numbers from 1 to 50 using for.

for (let i = 1; i <= 50; i++) {
    console.log(i);
}

// -----------------------------------------------------------------------------------------------------------
// 2. Using while, calculate sum from 1 to 10.
let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;
    num++;
}

console.log(sum);

// -----------------------------------------------------------------------------------------------------------
// 3. Use for...of to print each character of "JavaScript".
let str = "JavaScript";

for (let char of str) {
    console.log(char);
}


// -----------------------------------------------------------------------------------------------------------
// 4. Print odd numbers from 1–20 using continue.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// -----------------------------------------------------------------------------------------------------------
// 5. Use do...while to print 5 to 1.
let count = 5;
do {
    console.log(count);
    count--;
} while (count >= 1);

// -----------------------------------------------------------------------------------------------------------
// 6. Calculate factorial of 5.
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}

console.log(`Factorial of 5 is ${factorial}.`);

// -----------------------------------------------------------------------------------------------------------
// 7. Print numbers from 1–100 divisible by 5 using while.

let num2 = 1;
while (num2 <= 100) {
    if (num2 % 5 === 0) {
        console.log(num2);
    }
    num2++;
}

// -----------------------------------------------------------------------------------------------------------
// 8. Create object {name, age} and print keys using for...in.
let person = {
    name: "Kusum",
    age: 24
};

for (let value in person) {
    console.log(person[value]);
}


// More Loop Basics
// 41. Sum from 1 to 100.
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    sum1 += i;
}
console.log(sum1);

// 42. Print table of 5.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 43. Count even numbers between 1–50.
let count1 = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count1++;
    }
}
console.log(count);

// 44. Print 10 to 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 45. Sum of even numbers from 1–20.
let sum3 = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sum3 += i;
    }
}
console.log(sum3);

// 46. Print squares from 1–10.
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}

// 47. Count characters in "JavaScript".
let str1 = "JavaScript";
console.log(str.length);

// 48. Find largest in [3,7,2,9,5].
let arr = [3, 7, 2, 9, 5];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);               
// 49. Print pattern:
// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}           
// 50. Find sum of array:
// [10, 20, 30, 40]
let arr1 = [10, 20, 30, 40];
let sum4 = 0;               
for (let i = 0; i < arr1.length; i++) {
    sum4 += arr1[i];
}
console.log(sum4);  
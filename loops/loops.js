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
    age: 25
};

for (let value in person) {
    console.log(person[value]);
}



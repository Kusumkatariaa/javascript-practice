// 1. Write a function that prints "Hello World".
function greet() {
    console.log("Hello World");
}

greet();

// 2.  Write a function that adds two numbers and returns the result.

function addition(n1, n2) {
    let result = n1 + n2;
    console.log(result);
}
addition(5, 10);

// 3.  Write a function that takes a name as a parameter and prints it.
function printName(name) {
    console.log(name);
}

printName("Kusum");

// 4.  Create a function that returns the square of a number.

function square(num) {
    return num * num;
}

console.log(square(4));

// 5.  Write a function that checks if a number is even.
function isEvenOdd(n) {
    if (n % 2 === 0) {
        console.log("Even")
    } else {
        console.log("Odd");
    }
}
isEvenOdd(4);

// 6.  Create a function that returns the last character of a string.
function lastChar(str) {
    return str.charAt(str.length - 1);
}

console.log(lastChar("Namste"));

// 7.  Write a function that returns the first element of an array.

function firstChar(str) {
    return str.charAt(str[0]);
}
console.log(firstChar("Namste"));

// 8.  Write a function that returns the last element of an array.
function lastElemOfArray(arr) {
    return arr[arr.length - 1];
}
console.log(lastElemOfArray([1, 2, 3, 4, 5]));

// 9.  Write a function that prints all elements of an array.

function allElemOfArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}
allElemOfArray([2, 4, 6, 8, 10]);
// 10. Write a function that returns the length of an array.
function lengthOfArray(arr) {
    return arr.length;
}
console.log(lengthOfArray([1, 2, 3, 4]));

// 11. Write a function declaration that multiplies two numbers.
function multiply(n1, n2) {
    return n1 * n2;
}

console.log(multiply(5, 10));

// 12. Write a function expression that subtracts two numbers.
let subtract = function (n1, n2) {
    return n1 - n2;
}

console.log(subtract(10, 5));

// 13. Write an arrow function that converts a string to uppercase.

let strUpperCase = (str) => {
    return str.toUpperCase();
}
console.log(strUpperCase("uppercase"));

// 14. Write an arrow function that calculates a number's cube.

let cube = (n) => {
    return n * n * n;
}
console.log(cube(3));

// 15. Create a function that joins two strings and returns the result.

function concatenation(str1, str2) {
    let result = str1 + str2;
    return result;
}

console.log(concatenation("Hello, ", "World!"));

// 16. Write a function that takes two parameters and returns which one is
//     bigger.
function biggerNum(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log(biggerNum(10, 20));

// 17. Write a function that takes three parameters and returns the
//     smallest number.
function smallestNum(n1, n2, n3) {
    if (n1 <= n2 && n1 <= n3) {
        return n1;
    } else if (n2 <= n1 && n2 <= n3) {
        return n2;
    } else {
        return n3;
    }
}
console.log(smallestNum(10, 5, 15));

// 18. Write a function that prints any message five times (using a
//     parameter).
function printMessage(msg) {
    for (let i = 0; i < 5; i++) {
        console.log(msg);
    }
}
printMessage("Hello!");

// 19. Write a function that takes an array and returns only even numbers.

function evenNum(arr) {
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr;
}

console.log(evenNum([1, 2, 3, 4, 5, 6]));
// 20. Write a function that takes an array and returns only odd numbers.
function oddNum(arr) {
    let oddArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddArr.push(arr[i]);
        }
    }
    return oddArr;
}

console.log(oddNum([1, 2, 3, 4, 5, 6]));
// 21. Write a function that removes the first element of an array (using
//     shift).
function shift(arr) {
    arr.shift();
    return arr;
}
console.log(shift([1, 2, 3, 4, 5]));
// 22. Write a function that adds a value to the start of an array (using
//     unshift).
function unshift(arr, value) {
    arr.unshift(value);
    return arr;
}
console.log(unshift([1, 2, 3, 4], 0));
// 23. Write a function that removes the last element of an array (using
//     pop).
function pop(arr) {
    arr.pop();
    return arr
}
console.log(pop([1, 2, 3, 4, 5]));
// 24. Write a function that adds a value to the end of an array (using
//     push).
function push(arr, val) {
    arr.push(val);
    return arr
}
console.log(push([1, 2, 3, 4, 5], 6));

// 25. Write a function that uses splice to remove 2 items from index 1.
function splicea(arr) {
    arr.splice(1, 2);
    return arr;
}
console.log(splicea([1, 2, 3, 4, 5]));
// 26. Write a function that checks if a string contains the letter "a".


// 27. Write a function that counts vowels in a string.
// 28. Write a function that reverses a string.
// 29. Write a function that checks if a string is empty.
// 30. Write a function that returns how many spaces are in a string.
// 31. Write a function that returns the sum of all numbers in an array.
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfArray([1, 8, 3, 4, 5]));


function sumOfAllNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfAllNumbers([1, 8, 3, 4, 5]));

// 32. Write a function that returns the biggest number from an array.

function biggestNum(arr) {
    let biggest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}

console.log(biggestNum([1, 8, 3, 4, 5]));
// 33. Write a function that returns the smallest number from an array.
function smallestNum(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestNum([1, 8, 3, 4, 5]));

// 34. Write a function that doubles each number in an array.
function doubleNum(arr) {
    let doubleArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubleArr.push(arr[i] * 2);
    }
    return doubleArr;
}
console.log(doubleNum([1, 2, 3, 4, 5]));

// 35. Write a function that removes duplicate items from an array.
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3]));

// 34. Write a function that doubles each number in an array.
function doubleNum(arr) {
    let doubleArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubleArr.push(arr[i] * 2);
    }
    return doubleArr;
}
console.log(doubleNum([1, 2, 3, 4, 5]));
// 35. Write a function that removes duplicate items from an array.
// 36. Write a function that takes an array and returns only positive
//     numbers.
// 37. Write a function that checks if a number is divisible by 10.
// 38. Write a function that prints the index of each item in an array.
// 39. Write a function that returns the middle element of an array.
// 40. Write a function that removes 1 element from the middle of an array
//     using splice.
// # JavaScript Practice – Arrays & Objects

// ---


// 1. Write a function that uses `forEach()` to calculate the total sum of an array.

function calculateSum(arr) {
    let total = 0;

    arr.forEach(function (num) {
        total += num;
    });

    return total;
}

console.log(calculateSum([1, 2, 3, 4, 5]));

//---------------------------------------------------------------------------------------------------------

// 2. Write a function that uses `map()` to return a new array where each number is squared.
function mapArr() {
    let arr = [1, 2, 3, 4, 5];
    let arr2 = arr.map(function (elem) {
        return elem * elem;
    });
    return arr2
}

console.log(mapArr());

//---------------------------------------------------------------------------------------------------------

// 3. Write a function that uses `filter()` to return only numbers greater than 50.

function filterArr() {
    let arr = [10, 30, 50, 70, 90];
    let arr2 = arr.filter(function (num) {
        return num > 50;
    });
    return arr2
}
console.log(filterArr());

//---------------------------------------------------------------------------------------------------------

// 4. Write a function that checks whether two values are strictly equal using `===`.
function isEqual(a, b) {
    return a === b ? true : false;
}
console.log(isEqual(10, "10"));

//---------------------------------------------------------------------------------------------------------

// 5. Write a function that demonstrates array mutability by modifying the original array using `push()`.
function mutableArr(arr) {
    arr.push(5);
    return arr;
}
let myArr = [1, 2, 3, 4];
console.log(mutableArr(myArr));
console.log(myArr);

//---------------------------------------------------------------------------------------------------------

// 6. Write a function that removes the last element immutably (without modifying original array).
function imMutableArr() {
    let arr = [1, 2, 3, 4, 5];
    let newArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(imMutableArr());

//---------------------------------------------------------------------------------------------------------

// 7. Write a function that sorts numbers in ascending order using a proper compare function.

function sortAscending(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

console.log(sortAscending([10, 2, 5, 1]));



//---------------------------------------------------------------------------------------------------------

// 8. Write a function that sorts strings alphabetically.
function sortStrings(arr) {
    arr.sort();
    return arr;
}
console.log(sortStrings(["greece", "bali", "india", "australia", "france"]))

//---------------------------------------------------------------------------------------------------------

// 9. Write a function that reverses an array without using `reverse()`.
function reverseArr(arr) {
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(reverseArr([1, 2, 3, 4]));



// 10. Write a function that merges two arrays using `concat()` and returns the result.

function concatArr() {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    let result = arr1.concat(arr2);

    return result;
}
console.log(concatArr());

//---------------------------------------------------------------------------------------------------------

// 11. Write a function that merges two arrays and removes duplicate values.

function mergeAndRemoveDuplicates(arr1, arr2) {
    let merged = arr1.concat(arr2);
    let unique = [];

    for (let i = 0; i < merged.length; i++) {
        if (unique.indexOf(merged[i]) === -1) {
            unique.push(merged[i]);
        }
    }

    return unique;
}
console.log(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4]));

//---------------------------------------------------------------------------------------------------------

// 12. Write a function that manually checks whether a value exists in an array (without using `includes()`).

function valueExists(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

console.log(valueExists([10, 20, 30], 20));
console.log(valueExists([10, 20, 30], 50));

//---------------------------------------------------------------------------------------------------------

// 13. Write a function that uses `includes()` to check if an array contains a specific value.
function containsValue(arr, value) {
    return arr.includes(value);
}

console.log(containsValue([1, 2, 3, 4, 5], 3));


//---------------------------------------------------------------------------------------------------------

// 14. Write a function that filters strings starting with "A" using `startsWith()`.
function filterA(arr) {
    return arr.filter(function (item) {
        return item.startsWith("A");
    });
}

console.log(filterA(["Apple", "Banana", "Avocado", "Mango"]));

//---------------------------------------------------------------------------------------------------------

// 15. Write a function that uses `find()` to return the first number greater than 100.
function findGreater(arr) {
    return arr.find(function (num) {
        return num > 100;
    });
}
console.log(findGreater([50, 120, 80, 200]));

//---------------------------------------------------------------------------------------------------------

// 16. Create an object and write a function that returns all its keys using a loop.
function getKeys(obj) {
    let keys = [];

    for (let key in obj) {
        keys.push(key);
    }

    return keys;
}
let obj1 = { name: "Kusum", age: 24, city: "Delhi" };
console.log(getKeys(obj1));

//---------------------------------------------------------------------------------------------------------

// 17. Write a function that adds a new property to an object immutably.
function addProperty(obj) {
    let newObj = Object.assign({}, obj);
    newObj.age = 25;
    return newObj;
}

let person = { name: "Kusum" };

let updatedPerson = addProperty(person);

console.log(person);
console.log(updatedPerson);

//---------------------------------------------------------------------------------------------------------

// 18. Write a function that updates a property in an object.
function updateProperty(obj) {
    obj.name = "Updated Name";
    return obj;
}
let obj2 = { name: "Kusum", age: 24 };
console.log(updateProperty(obj2));

//---------------------------------------------------------------------------------------------------------

// 19. Write a function that checks whether a specific key exists inside an object.
function keyExists(obj, key) {
    return key in obj;
}

let obj3 = { name: "Kusum", age: 24 };
console.log(keyExists(obj3, "age"));   // true
console.log(keyExists(obj3, "city"));  // false

//---------------------------------------------------------------------------------------------------------

// 20. Write a function that converts an object into an array of key-value pairs.
function objectToArray(obj) {
    return Object.entries(obj);
}
let obj4 = { name: "Kusum", age: 24 };
console.log(objectToArray(obj4));

//---------------------------------------------------------------------------------------------------------

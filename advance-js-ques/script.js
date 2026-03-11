// <!-- # JavaScript Practice Questions

// ## Fetch API

// **1.** Write a fetch request that gets data from `https://jsonplaceholder.typicode.com/users` and logs the data.

let res = fetch("https://jsonplaceholder.typicode.com/users")
res.then((data) => data.json()).then((val) => console.log(val));

// **2.** Fetch data from an API and convert the response using `res.json()`.

// res.then((data) => data.json()).then((val) => console.log(val));

// **3.** Write a fetch request that logs the **response object** before converting it to JSON.

// res
//     .then((val) => {
//         console.log(val);
//         return val.json();
//     })
//     .then((data) => console.log(data));

// **4.** Fetch data and log `"Data loaded"` after the JSON is received.

// res
//     .then((val) => val.json())
//     .then((data) => {
//         console.log(data);
//         console.log("Data Loaded");
//     });

// **5.** Fetch users and print the **total number of users returned**.

// res
//     .then((val) => val.json())
//     .then((data) => {
//         console.log(data.length);
//     });

// **6.** Write a fetch request that handles errors using `.catch()`.

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


// ---

// ## Promises (.then / .catch)

// **7.** Create a Promise that resolves with `"Hello"` and print it using `.then()`.
let resolveProm = new Promise((res) => {
    res('"Hello"');
});
resolveProm.then(res => console.log(res));

// **8.** Create a Promise that rejects with `"Something went wrong"` and handle it using `.catch()`.
let rejectProm = new Promise((resolve, reject) => {
    reject('"Something went wrong"');
});
rejectProm.then(msg => console.log(msg)).catch(error => console.log(error));

// **9.** Write a Promise chain with **two `.then()` blocks**.
const prom = new Promise((resolve) => {
    resolve(2);
});
prom.then(num => num * 2).then(result => console.log(result));


// **10.** Create a Promise that resolves after **2 seconds** using `setTimeout`.

let newPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data received after 2 seconds");
    }, 2000);
});

newPromise.then(data => console.log(data));


// **11.** Write a Promise chain that prints `"Step 1"` then `"Step 2"`.
Promise.resolve()
    .then(() => console.log("Step 1"))
    .then(() => console.log("Step 2"));
// ---

// ## Async / Await

// **12.** Convert the following code into `async/await`: `fetch(url).then(res => res.json()).then(data => console.log(data))`

// **13.** Write an async function that fetches data and logs it.

// **14.** Write an async function that fetches data and stores it in a variable.

// **15.** Write an async function that waits for a Promise that resolves after **1 second**.

// **16.** Write an async function that fetches data and prints `"Finished fetching"` after the data is received.

// ---

// ## Error Handling

// **17.** Write a `try/catch` block that handles an error from `JSON.parse()`.

// **18.** Create a function that throws an error `"Invalid input"`.

// **19.** Write a `try/catch` example that prints `"Error occurred"` in the catch block.

// **20.** Write a `try/catch/finally` example where the finally block prints `"Always runs"`.

// **21.** Use `try/catch` inside an async function.

// ---

// ## ES Modules

// **22.** Create a file `utils.js` that exports a variable `name = "JavaScript"` using **named export**.
//   Or
// **23.** Import the `name` variable in another file and log it.
  import { name } from "./utils.js";
    console.log(name);
// **24.** Create a **default export** function `add(a, b)` that returns the sum.
//  Or
// **25.** Import the default exported `add` function in another file and use it. -->

import sum from "./utils.js";
console.log(sum(2, 4));
// # DOM Homework Tasks KODEX

// ## Task 1: Text Change on Button Click
// **Create:**
// - One paragraph  
// - One button  

// **When button is clicked:**
// - If paragraph text is `Hello`, change it to `Welcome`
// - If paragraph text is `Welcome`, change it to `Hello`

var para = document.querySelector('.paragraph');
var clickBtn = document.querySelector('.click-btn');


clickBtn.addEventListener("click", function () {
    if (para.textContent == "Hello") {
        para.textContent = "Welcome";
    } else
        para.textContent = "Hello";

});


// ---------------------------------------------------------------------------------------------------------------

// ## Task 2: Change Box Color on Click
// **Create:**
// - One square box  
// - One button  

// **When button is clicked:**
// - First click → box becomes red  
// - Second click → box becomes green  
// - Third click → box becomes blue  
// - Fourth click → box becomes red again  

var box = document.querySelector(".box");
var btn = document.querySelector(".click");

var colors = ["red", "green", "blue"];
var index = 0;

btn.addEventListener("click", function () {
    box.style.background = colors[index];
    index++;

    if (index === colors.length) {
        index = 0;
    }
});


// This cycle should continue.

// ---------------------------------------------------------------------------------------------------------------

// ## Task 3: Show and Hide a Box
// **Create:**
// - One button  
// - One box with text inside it  

// **When button is clicked:**
// - If box is visible → hide the box  
// - If box is hidden → show the box again  

// The box should not be deleted, only hidden.

let textBox = document.querySelector(".box_contains_text");
let textBtn = document.querySelector(".click_me");

textBtn.addEventListener('click', function () {
    if (textBox.style.display == 'none') {
        textBox.style.display = 'flex';
    } else {
        textBox.style.display = 'none';
    }
});


// ---------------------------------------------------------------------------------------------------------------

// ## Task 4: Rotate a Box Using Buttons
// **Create:**
// - One square box  
// - Two buttons: **Rotate Left** and **Rotate Right**

// **When:**
// - Rotate Right is clicked → box rotates 45 degrees to the right  
// - Rotate Left is clicked → box rotates 45 degrees to the left  

// Rotation should keep adding up with every click.
let squareBox = document.querySelector(".square-box");
let rotateRight = document.querySelector(".rotate-right");
let rotateLeft = document.querySelector(".rotate-left");

let rotateAngle = 0;

rotateRight.addEventListener('click', function () {
    rotateAngle += 45;
    squareBox.style.transform = `rotate(${rotateAngle}deg)`;
});
rotateLeft.addEventListener('click', function () {
    rotateAngle -= 45;
    squareBox.style.transform = `rotate(${rotateAngle}deg)`;
});


// ---------------------------------------------------------------------------------------------------------------

// ## Task 5: Number Increase and Decrease
// **Create:**
// - A number shown on screen (start from 0)  
// - Two buttons: `+` and `-`

// **When:**
// - `+` button is clicked → number increases by 1  
// - `-` button is clicked → number decreases by 1  

// Number should never go below 0.

// ---
let number = document.querySelector('.number')
let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');

let num = 0;

plus.addEventListener('click', function () {
    num++;
    number.textContent = num;
    console.log(num);
});

minus.addEventListener('click', function () {
    if (num > 0) {
        num--;
        number.textContent = num;
        console.log(num);
    }
});

// ---------------------------------------------------------------------------------------------------------------



// ## Task 6: Light and Dark Background
// **Create:**
// - One button named **Change Mode**

// **When button is clicked:**
// - First click → page background becomes dark and text becomes white  
// - Second click → page background becomes white and text becomes black  

// This should repeat on every click.

// > Use JavaScript only.

let chnageModeBtn = document.querySelector(".mode-change-btn");
let pageMain = document.querySelector("body");
let flag1 = true
chnageModeBtn.addEventListener('click', function () {
    if (flag1 == true) {
        pageMain.style.background = "black";
        pageMain.style.color = "#fff";
        flag1 = false;
    } else {
        pageMain.style.background = "";
        pageMain.style.color = "";
        flag1 = true;
    }
});


// ---------------------------------------------------------------------------------------------------------------

// ## Task 7: Show Input Text on Screen
// **Create:**
// - One input box  
// - One paragraph  

// **When user types in the input:**
// - The same text should appear inside the paragraph immediately


let userInput = document.querySelector(".user-input");
let outputText = document.querySelector(".output-text");

userInput.addEventListener("input", function () {
    outputText.textContent = userInput.value;
});


// ------------------------------------------------------------------------------------------------------------

// ## Task 8: Change Color on Mouse Hover
// **Create:**
// - One box  

// **When:**
// - Mouse goes inside the box → box color changes  
// - Mouse goes outside the box → box color goes back to original  

// Use JavaScript events, not CSS hover.

var mainBox = document.querySelector(".main_box");

mainBox.addEventListener('mouseover', function () {
    mainBox.style.background = 'pink';
    mainBox.style.transition = '.4s all ease';
});

mainBox.addEventListener('mouseout', function () {
    mainBox.style.background = '';
});


// ------------------------------------------------------------------------------------------------------------

// ## Task 9: Button Works Only Once
// **Create:**
// - One button  
// - One paragraph  

// **When button is clicked:**
// - Show message: `Button Clicked`  
// - Button should stop working after that

let showText = document.querySelector('.show-text');
let newButton = document.querySelector('#show-btn')
let flag = true;

newButton.addEventListener('click', function () {
    showText.textContent = "Button Clicked";
    newButton.disabled = true;
});


// ------------------------------------------------------------------------------------------------------------

// ## Task 10: Traffic Light
// **Create:**
// - Three circles or boxes: red, yellow, green  
// - Three buttons: **Stop**, **Ready**, **Go** 

let stopBtn = document.getElementById('stop');
let readyBtn = document.getElementById('ready');
let goBtn = document.getElementById('go');

let stopCircle = document.getElementById('red');
let readyCircle = document.getElementById('yellow');
let goCircle = document.getElementById('green');

function turnOff() {
    stopCircle.style.background = 'transparent';
    readyCircle.style.background = 'transparent';
    goCircle.style.background = 'transparent';
}
stopBtn.addEventListener('click', function () {
    turnOff();
    stopCircle.style.background = 'red';
});
readyBtn.addEventListener('click', function () {
    turnOff();
    readyCircle.style.background = 'yellow';
});
goBtn.addEventListener('click', function () {
    turnOff();
    goCircle.style.background = 'green';
});

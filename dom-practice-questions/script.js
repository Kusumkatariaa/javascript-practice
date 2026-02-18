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


// ------------------------------------------------------------------------------------------------------------------

// # Intermediate Level DOM + Math Practice Tasks


// ## 1. Dice Game

// Create two dice images dynamically using `document.createElement()`. Use
// `Math.random()` to generate numbers (1--6). Display both dice results
// and show the winner based on the higher number. Render everything
// dynamically using `append()` or `appendChild()`.

let rollDiceBtn = document.querySelector(".rollDice");
let gameBox = document.querySelector(".game-container");

let diceImages = ["https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png",
    "https://upload.wikimedia.org/wikipedia/commons/1/18/Dice-2.png",
    "https://upload.wikimedia.org/wikipedia/commons/7/70/Dice-3.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Dice-4.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6c/Dice-5.png",
    "https://upload.wikimedia.org/wikipedia/commons/5/5c/Dice-6.png"]



rollDiceBtn.addEventListener('click', function () {
    gameBox.innerHTML = "";

    let randomNum1 = Math.floor(Math.random() * diceImages.length);
    let randomNum2 = Math.floor(Math.random() * diceImages.length);
    console.log(randomNum1, randomNum2);

    let dice1 = document.createElement("img");
    dice1.src = diceImages[randomNum1];

    let dice2 = document.createElement("img");
    dice2.src = diceImages[randomNum2];
    gameBox.appendChild(dice1);
    gameBox.appendChild(dice2);

    let winnerText = document.createElement('div');
    winnerText.setAttribute('class', "win-text");

    gameBox.appendChild(winnerText);

    if (randomNum1 > randomNum2) {
        winnerText.textContent = "Player 1 Wins"
    } else if (randomNum2 > randomNum1) {
        winnerText.textContent = "Player 2 Wins"
    } else {
        winnerText.textContent = "Match Draw"
    }


});




// ------------------------------------------------------------------------------------------------------------------

// ## 2. Random Color Card Generator

// Create a card on button click. Generate a random RGB background color
// using `Math.floor()` and `Math.random()`. Set a random width and height.
// Assign a unique `data-id` using `setAttribute()`.



let generateBtn = document.querySelector(".generate-btn");
let container = document.querySelector(".card-container");

let cardCount = 0;

generateBtn.addEventListener("click", function () {

    // Create card element
    let card = document.createElement("div");
    card.classList.add("card");

    // Generate random RGB color
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Generate random width & height
    let randomWidth = Math.floor(Math.random() * 150) + 100;  // 100–250px
    let randomHeight = Math.floor(Math.random() * 150) + 100;

    card.style.width = randomWidth + "px";
    card.style.height = randomHeight + "px";

    // Assign unique data-id
    cardCount++;
    card.setAttribute("data-id", cardCount);

    // Optional: show id inside card
    card.textContent = `ID: ${cardCount}`;

    // Append card to container
    container.appendChild(card);
});





// ------------------------------------------------------------------------------------------------------------------

// ## 3. Lottery System

// Take user input (1--50). Generate a random number using `Math.ceil()`.
// If the number matches user input, display "You Won" otherwise "Try
// Again". Update result dynamically in the DOM.










// ------------------------------------------------------------------------------------------------------------------

// ## 4. Dynamic Image Gallery

// Store image URLs in an array. On button click, pick a random image using
// `Math.floor()`. Create an `<img>` element dynamically and append it to a
// container. Use `getAttribute("src")` to print the image source in
// console.











// ------------------------------------------------------------------------------------------------------------------

// ## 5. Progress Bar Simulator

// Create a progress bar dynamically. On button click, increase progress
// randomly between 10--30%. Update the width style property dynamically.
// Stop progress at 100%.












// ------------------------------------------------------------------------------------------------------------------

// ## 6. Random Box Remover

// Create 5 boxes dynamically. Assign each box a unique `data-id` using
// `setAttribute()`. On click of a box, remove only that specific box. Use
// `getAttribute()` to identify which box was clicked.











// ------------------------------------------------------------------------------------------------------------------

// ## 7. Mini Gambling UI

// Generate 3 random numbers between 1--9. Display all numbers dynamically.
// If all three numbers are the same, show "Jackpot". Otherwise display









// ------------------------------------------------------------------------------------------------------------------

// ## IPL WINNER PREDICTION

let teamLogo = document.querySelector(".logo");
let teamName = document.querySelector(".team_name");
let predictionBtn = document.querySelector(".prediction-btn");
let mainBox2 = document.querySelector(".ipl-winner")

let teams = [
    {
        name: "Royal Challengers Bengaluru", logo: "https://media.fortuneindia.com/fortune-india/2025-11-06/6incrk23/RCB.jpg?w=640&auto=format,compress&q=80"
    },
    {
        name: "Chennai Super Kings", logo: "https://i.pinimg.com/736x/ea/40/fd/ea40fd13fa7d46618c5567146f07ba41.jpg"
    },
    {
        name: "Kolkata Knight Riders", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/960px-Kolkata_Knight_Riders_Logo.svg.png"
    },
    {
        name: "Punjab Kings", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/250px-Punjab_Kings_Logo.svg.png"
    },
    {
        name: "Mumbai Indians", logo: "https://i.pinimg.com/736x/e8/87/a8/e887a81959a66337b7ccc7835c38470e.jpg"
    }
]
mainBox2.style.display = "none";
predictionBtn.addEventListener('click', function () {
    mainBox2.style.display = "block";
    let randomTeam = Math.floor(Math.random() * teams.length);
    console.log(randomTeam, teams[randomTeam])
    teamName.textContent = teams[randomTeam].name;
    teamLogo.src = teams[randomTeam].logo;
});



// ------------------------------------------------------------------------------------------------------------------

// ## Showing random images on button click 

let imgArr = ["https://i.pinimg.com/736x/38/33/90/3833900cee9e69c78a98e5d9e0ff0988.jpg",
    "https://i.pinimg.com/736x/a5/ad/20/a5ad200ca202b684bfdbe7a65294743f.jpg",
    "https://i.pinimg.com/736x/dd/88/75/dd8875593d43d76167365052e6dfd879.jpg",
    "https://i.pinimg.com/1200x/0e/39/1f/0e391f1b15dfd12d94ba08a0dbfa400b.jpg",
    "https://i.pinimg.com/736x/1a/3b/ac/1a3bac79d633d391c50d085d4b6edf2d.jpg"]

let clickButtton = document.querySelector(".click-me");
let imageBox = document.querySelector(".img_box img")

clickButtton.addEventListener('click', function () {
    let randomIndex = Math.floor(Math.random() * imgArr.length);
    imageBox.src = imgArr[randomIndex];
    imageBox.style.width = "250px";
    imageBox.style.height = "250px";
    imageBox.style.objectFit = "cover";
    imageBox.style.objectPosition = "center";

});






// ------------------------------------------------------------------------------------------------------------------

/* 
(Too) many ways to use a callback

What is a callback? */

// 1. Let's start simple
const button = document.querySelector("button");

button.addEventListener("click", buttonClicked);

function buttonClicked() {
  console.log("hi");
}

// 2. We can do it without creating a variable for the button

document.querySelector("button").addEventListener("click", buttonClicked);

function buttonClicked() {
  console.log("hi");
}

// 3. We can define the function directly in the callback

const button = document.querySelector("button");

button.addEventListener("click", function buttonClicked() {
  console.log("hi");
});

// 4.  used like that, we don't need the name

const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("hi");
});

// 5. And since "ES6" we can use arrow functions

const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("hi");
});

"use strict";

//We are listening for mouseover events to remove and replace DOM elements.
//Will need to dynamically add a transition class as elements are added and removed
//Create a function that adds a random color to each balloon div. Use CSS classes for this.
//Create a reset button to return to init state

//Select elements
const balloonGrid = document.querySelector(".balloon-grid");
const balloonNodes = document.querySelectorAll(".balloon");
const resetButton = document.querySelector(".reset-bar > button");
const balloons = createColoredArray(balloonNodes);
const popSound = new Audio(
  "Pop-trimmed.wav"
);

//Write an equation that takes all of the balloons' nodes, converts it to an array, gives each an id, and returns an object from it
function createColoredArray(nodeList) {
  const balloonArray = Array.from(balloonNodes);

  for (let i = 0; i < balloonArray.length; i++) {
    balloonArray[i].setAttribute("id", `balloon-${i + 1}`);

    setBalloonColor(balloonArray[i]);
  }

  return balloonArray;
}

function setBalloonColor(element) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const currentBalloon = element;

  if (randomNumber <= 33) {
    currentBalloon.style.backgroundColor = "green";
  } else if (randomNumber < 67) {
    currentBalloon.style.backgroundColor = "red";
  } else {
    currentBalloon.style.backgroundColor = "yellow";
  }
}

//Event Listeners
balloons.forEach((balloon) =>
  balloon.addEventListener("click", () => {
    console.log(balloon.id);

    balloon.classList.add("balloon-popped"); //Removes element
    //Include a pop sound effect
    
    (async function playSound() {

    'use strict';
    popSound.play();

    })();
  })
);

resetButton.addEventListener('click', () => {
  balloons.forEach(balloon => balloon.classList.remove("balloon-popped"));

  createColoredArray(balloonNodes)
})
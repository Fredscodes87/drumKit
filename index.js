document
  .querySelectorAll(".drum")
  .forEach((drum) => drum.addEventListener("click", handleClick));

document.addEventListener("keydown", function (event) {
  //console.log(event.key);
  makeSound(event.key);
});
function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(key);
  }
}

var audio = new Audio("sounds/tom-1.mp3");
audio.play();

// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function add(num1, num2) {
//   return num1 + num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }
// function divide(num1, num2) {
//   if (num1 === 0 || num2 === 0) {
//     return "Warning dividing by 0";
//   } else {
//     return num1 / num2;
//   }
// }

// function calc(num1, num2, operator) {
//   return operator(num1, num2);
// }

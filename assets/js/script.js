const myFormEvent = document.getElementById("myformEvent");
let i = 0;
let count = 0;
let testIfWin = [];
let word;
const draws = [
  "gallows",
  "head",
  "body",
  "rightHarm",
  "leftHarm",
  "rightLeg",
  "leftLeg",
  "rightFoot",
  "leftFoot",
  "dead",
];

rand();
const _handleSubmit = async (e) => {
  e.preventDefault();
  const userChoice = document
    .getElementById("playerProposition")
    .value.toUpperCase();
  if (testIfWin.includes(userChoice)) {
    alert("Already there !");
  } else {
    check(userChoice);
    myFormEvent.reset();
  }
};

function rand() {
  let rand = Math.floor(Math.random() * words.length);
  word = words[rand]
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();

  for (i = 0; i < word.length; i++) {
    let newLetter = document.createElement("div");
    newLetter.setAttribute("id", "newLetter");
    let letterId = word[i] + i;
    newLetter.innerHTML = `<h2 id="${letterId}" class="border-bottom border-dark">${word[i]}</h2>`;
    document.getElementById("computerWord").appendChild(newLetter);
  }
}

function check(letter) {
  let win = false;
  for (i = 0; i < word.length; i++) {
    if (letter == word[i]) {
      win = true;
      let gg = document.getElementById(letter + i);
      gg.style.textIndent = "0px";
      testIfWin.push(letter);
    }
  }
  win == true ? winTest() : lose(count, letter);
}
function lose(x, letter) {
  draw(draws[count]);
  count++;
  let tryLeft = 10 - count;
  if (count == 10) {
    alert("You lose, the word was " + word);
    let youLose = document.createElement("p");
    youLose.classList.add("text-danger");
    youLose.innerHTML = `YOU LOSE !`;
    document.getElementById("winOrLose").appendChild(youLose);
    let input = document.getElementById("playerProposition");
    input.setAttribute("disabled", true);
  } else {
    let wrongLetter = document.createElement("div");
    wrongLetter.classList.add("text-center", "text-danger");
    wrongLetter.innerHTML = `<p>${letter}</p>`;
    document.getElementById("wrongLetter").appendChild(wrongLetter);
    alert(tryLeft + " more try");
  }
}
function winTest() {
  if (testIfWin.length == word.length) {
    alert("You win !");
    let youWin = document.createElement("p");
    youWin.classList.add("text-success");
    youWin.innerHTML = `YOU WIN !`;
    document.getElementById("winOrLose").appendChild(youWin);
    let input = document.getElementById("playerProposition");
    input.setAttribute("disabled", true);
    count = 0;
    testIfWin = 0;
  }
}
function restart() {
  location.reload();
}
function draw(part) {
  const canvas = document.getElementById("hangman");
  const context = canvas.getContext("2d");

  switch (part) {
    case "gallows":
      context.strokeStyle = "#444";
      context.lineWidth = 10;
      context.beginPath();
      context.moveTo(175, 225);
      context.lineTo(5, 225);
      context.moveTo(30, 225);
      context.lineTo(30, 5);
      context.lineTo(100, 5);
      context.lineTo(100, 25);
      context.moveTo(30, 50);
      context.lineTo(60, 5);
      context.stroke();
      break;

    case "head":
      context.lineWidth = 5;
      context.beginPath();
      context.arc(100, 50, 25, 0, Math.PI * 2, true);
      context.closePath();
      context.stroke();
      break;

    case "body":
      context.beginPath();
      context.moveTo(100, 75);
      context.lineTo(100, 140);
      context.stroke();
      break;

    case "rightHarm":
      context.beginPath();
      context.moveTo(100, 85);
      context.lineTo(60, 100);
      context.stroke();
      break;

    case "leftHarm":
      context.beginPath();
      context.moveTo(100, 85);
      context.lineTo(140, 100);
      context.stroke();
      break;

    case "rightLeg":
      context.beginPath();
      context.moveTo(100, 140);
      context.lineTo(80, 190);
      context.stroke();
      break;

    case "rightFoot":
      context.beginPath();
      context.moveTo(82, 190);
      context.lineTo(70, 185);
      context.stroke();
      break;

    case "leftLeg":
      context.beginPath();
      context.moveTo(100, 140);
      context.lineTo(125, 190);
      context.stroke();
      break;

    case "leftFoot":
      context.beginPath();
      context.moveTo(122, 190);
      context.lineTo(135, 185);
      context.stroke();
      break;

    case "dead":
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(85, 37);
      context.lineTo(95, 45);
      context.moveTo(95, 37);
      context.lineTo(85, 45);
      context.moveTo(104, 37);
      context.lineTo(114, 45);
      context.moveTo(114, 37);
      context.lineTo(104, 45);
      context.stroke();
      break;
  }
}

myFormEvent.addEventListener("submit", _handleSubmit);

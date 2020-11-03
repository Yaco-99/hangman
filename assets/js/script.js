const myFormEvent = document.getElementById("myformEvent"),
  playerProposition = document.getElementById("playerProposition"),
  draws = [
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

let i = 0,
  count = 0,
  testIfWin = [],
  word,
  wrongLetterArray = [];

console.log(word);
rand();
const _handleSubmit = async (e) => {
  e.preventDefault();
  const userChoice = playerProposition.value.toUpperCase();
  if (testIfWin.includes(userChoice) || wrongLetterArray.includes(userChoice)) {
    alert("Already picked !");
    return;
  } else {
    check(userChoice);
    myFormEvent.reset();
    return;
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
    winOrLose("danger", "LOSE");
  } else {
    wrongLetterArray.push(letter);
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
    winOrLose("success", "WIN");
  }
}

function winOrLose(color, winLose) {
  let message = document.createElement("p");
  message.classList.add(`text-${color}`);
  message.innerHTML = `YOU ${winLose} !`;
  document.getElementById("winOrLose").appendChild(message);
  playerProposition.setAttribute("disabled", true);
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

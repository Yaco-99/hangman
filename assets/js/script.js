//var words = require("an-array-of-french-words");
const words = [
  "a",
  "a-t-elle",
  "a-t-il",
  "a-t-on",
  "abaissa",
  "abaissable",
  "abaissables",
  "abaissai",
  "abaissaient",
  "abaissais",
  "abaissait",
  "abaissant",
  "abaissante",
  "abaissantes",
  "abaissants",
  "abaissas",
  "abaissasse",
  "abaissassent",
  "abaissasses",
  "abaissassiez",
  "abaissassions",
  "abaisse",
  "abaisse-langue",
  "abaissement",
  "abaissements",
  "abaissent",
  "abaisser",
  "abaissera",
  "abaisserai",
  "abaisseraient",
  "abaisserais",
  "abaisserait",
  "abaisseras",
  "abaisserez",
  "abaisseriez",
  "abaisserions",
  "abaisserons",
  "abaisseront",
  "abaisses",
  "abaisseur",
  "abaisseurs",
  "abaissez",
  "abaissiez",
  "abaissions",
  "abaissons",
  "abaissâmes",
  "abaissât",
  "abaissâtes",
  "abaissèrent",
  "abaissé",
  "abaissée",
  "abaissées",
  "abaissés",
  "abajoue",
  "abajoues",
  "abandon",
  "abandonna",
  "abandonnai",
  "abandonnaient",
  "abandonnais",
  "abandonnait",
  "abandonnant",
  "abandonnas",
  "abandonnasse",
  "abandonnassent",
  "abandonnasses",
  "abandonnassiez",
  "abandonnassions",
  "abandonnataire",
  "abandonnataires",
  "abandonne",
  "abandonnent",
  "abandonner",
  "abandonnera",
  "abandonnerai",
];

const myFormEvent = document.getElementById("myformEvent");
let i = 0;
let count = 0;
let testIfWin = [];
let word;

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
  console.log(word);
}

function check(letter) {
  let win = false;
  for (i = 0; i < word.length; i++) {
    if (letter == word[i]) {
      win = true;
      let gg = document.getElementById(letter + i);
      gg.style.textIndent = "0px";
      testIfWin.push(letter);
      console.log(testIfWin);
    }
  }
  win == true ? winTest() : lose(count, letter);
}
function lose(x, letter) {
  count++;
  let tryLeft = 10 - count;
  if (count == 10) {
    alert("You lose");
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
    let input = document.getElementById("playerProposition");
    input.setAttribute("disabled", true);
    count = 0;
    testIfWin = 0;
  }
}
function restart() {
  location.reload();
}

myFormEvent.addEventListener("submit", _handleSubmit);

/*----- constants -----*/
const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*----- app's state (variables) -----*/
let winner;
// Set default board to empty
let board = ["", "", "", "", "", "", "", "", ""];
// Set first player to X
let turn = "X";

/*----- cached element references -----*/
const msg = document.querySelector("span");
const squares = document.querySelector(".grid-container");
const cell = document.querySelectorAll("cell");

/*----- event listeners -----*/
squares.addEventListener("click", handleClick);
document.querySelector("button").addEventListener("click", initialize);

/*----- functions -----*/
function handleClick(e) {
  // Get pre-set index from clicked element
  let clickSq = e.target;
  let sqIdx = parseInt(clickSq.getAttribute("cellIdx"));
  if (board[sqIdx] !== "") {
    return;
  }
  board[sqIdx] = turn;
  clickSq.innerHTML = turn;
  turn = turn === "X" ? "O" : "X";
  winner = getWinner();
}

function getWinner() {}
function render() {}
function initialize() {
  cell.forEach(function (cell) {
    cell.innerHTML = "";
  });
  document.turn = "X";
  winner = null;
}

handleClick;

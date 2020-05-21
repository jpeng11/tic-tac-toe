const color = {
  "1": "blue",
  "-1": "green",
  null: "white",
};

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

let turn, winner, tie;

const startGame = () => {
  let h1El = document.querySelector("span");
  h1El.textContent = "Please Lorem Ipsum is simply dummy";
  this.turn = "1";
  this.tie = false;
  this.winner = null;
};

var cell1 = document.querySelector(".cell1");
cell1.addEventListener("click", function () {
  cell1.innerHTML = "<img src='image/x.jpg'>";
});
var cell2 = document.querySelector(".cell2");
cell2.addEventListener("click", function () {
  cell2.innerHTML = "<img src='image/o.png'>";
});

const game = () => {
  startGame();
  return;
};

game();

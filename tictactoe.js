const winningMoves = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

let board = [
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"}
]

/*
Create 2 Variables

  - Player X Wins
  - Player O Wins

Save these 2 vairable in localStorage and JSON to Stringify it

*/

const boardDisplay = document.getElementById("game-board")
let gameActive = true;
let playerX = [];
let playerO = [];


function checkWin(list) {
  winningMoves.forEach(function (array){
    if (list[array[0]].cell === "X" && list[array[1]].cell === "X" && list[array[2]].cell === "X") {
      alert("Player X Won")
      gameActive = false;
    } if (list[array[0]].cell === "O" && list[array[1]].cell === "O" && list[array[2]].cell === "O") {
      alert("Player O Won")
      gameActive = false;
    }
  })
  
}

function buttonClicked(cellClicked){
  if (gameActive) {
    if (playerX.length === playerO.length && board[cellClicked].cell === "-") {
      playerX.push(cellClicked);
      board[cellClicked].cell = "X";
    } else if (playerX.length > playerO.length && board[cellClicked].cell === "-"){
      playerO.push(cellClicked)
      board[cellClicked].cell = "O";
    } else {
      alert("That Spot is Taken")
    }
    renderMoves();
    checkWin(board);
  }
}

function renderMoves() {
  boardDisplay.innerHTML = "";
  Object.entries(board).forEach(function (key, value){
    const newCell = document.createElement("button");
    newCell.innerText = key[1].cell;
    newCell.setAttribute("onclick", `buttonClicked(${value})`);
    boardDisplay.appendChild(newCell);

  })
}

function reset(){
  gameActive = true;
  playerX = [];
  playerO = [];

  board = [
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"},
  {"cell" : "-"}
]
  renderMoves()
}



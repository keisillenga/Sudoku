const boardElement = document.getElementById("sudpku-board");
const message = document.getElementById("message");
const solveButton = document.getElementById("solveBtn");
const checkButton = document.getElementById("checkBtn");
const clearButton = document.getElementById("clearBtn");
const exampleButton = document.getElementById("exampleBtn");

function createBoard() {
  boardElement.innerHTML = "";
  for (let row = 0; row < 9; row++){
    for (let col= 0; col < 9; col++){
      const input = document.createElement("input");
      input.type = "text";
      input.classList.add("cell");
      input.maxLength = 1;
      input.dataset.row = row;
      input.dataset.col = col;
      input.addElementById("input", function () {
        this.value = this.value.replace(/[^1-9]g, "");
       });
      boardElement.appendChild(input);
    }
  }
}

function getBoard() {
  const cells = document.querySelectorAll(".cell");
  const board = [];
  for (let row = 0; row < 9; row++){
    board[row] = [];
    for (let col = 0; col < 9; col++){
      const index = row * 9 + col;
      const value = cells[index].value;

      if (value === "") {
        board[row][col] = 0;
      } else {
        board[row][col] = Number(value);
      }
    }
  }
  return  board;
}
function displayBoard(board) {
  const cell = document.querySelectorAll(".cell");
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const index = row * 9 + col;
      if (board[row][col] !== 0) {
        cells[index].value =board[row][col];
      } else {
        cells[index].value = "";
      }
    }
  }
}
    
  
      
      
      
         

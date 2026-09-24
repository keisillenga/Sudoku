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
      
      
      
         

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
      
      
         

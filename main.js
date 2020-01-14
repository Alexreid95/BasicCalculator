//Variables
let previousOutputDisplay = document.querySelector(".previous-output");
let currentOutputDisplay = document.querySelector(".current-output");
let previousValue, currentValue, operation;

//Resets calculator
function clear() {
  previousValue = "0";
  currentValue = "0";
  operation = "";
  updateDisplay();
}

//Updates the screen display
function updateDisplay() {
  previousOutputDisplay.innerText = previousValue;
  currentOutputDisplay.innerText = currentValue;
}

//Initialises calculator
function initCalculator() {
  clear();
}

//Appends the value of the button
function insertNumber(value) {
  if (value == "." && currentValue.slice(-1) == ".") { return; }
  (currentValue === "0") ? currentValue = value.toString(): currentValue += value;
  operation = "";
  updateDisplay();
}

//Selects operation, if operation is already selected, update to new one
function chooseOperator(operator) {
  (operation === "") ? currentValue: currentValue = currentValue.slice(0, -1);
  operation = operator;
  currentValue += operation;
  updateDisplay();
}

//Deletes previous appended element
function back() {
  (currentValue.length === 1) ? currentValue = "0": currentValue = currentValue.slice(0, -1);
  operation = "";
  updateDisplay();
}

//Computes currentValue and adds value to previousValue
function compute() {
  previousValue = eval(currentValue);
  currentValue = "0";
  updateDisplay();
}

//Running functions
initCalculator();

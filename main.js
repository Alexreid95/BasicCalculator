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
  if (currentValue === "0") {
    currentValue = value.toString();
  } else {
    currentValue += value;
  }
  operation = "";
  updateDisplay();
}

//Selects operation, if operation is already selected, update to new one
function chooseOperator(operator) {
  if (operation === "") {
    operation = operator;
    currentValue += operation;
  } else {
    currentValue = currentValue.slice(0, -1);
    operation = operator;
    currentValue += operation;
  }
  updateDisplay();
}

//Deletes previous appended element
function back() {
  if (currentValue.length === 1) {
    currentValue = "0";
  } else {
    currentValue = currentValue.slice(0, -1);
  }
  operation = "";
  updateDisplay();
}

//Running functions
initCalculator();
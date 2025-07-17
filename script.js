const display = document.querySelector(".calculation");
const buttons = document.querySelectorAll(".btn");

let operatorsList = ["+", "-", "*", "/"];
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let decimaClicked = false;
let num1 = "";
let num2 = "";
let operator;
let inNum1 = true;
let resultShown = false;

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

function isOperator(buttonValue) {
  return operatorsList.includes(buttonValue);
}

function isNumber(buttonValue) {
  return digits.includes(buttonValue);
}

function isDecimal(buttonValue) {
  return buttonValue === ".";
}

function isEqualButton(buttonValue) {
  return buttonValue === "=";
}

function isClearButton(buttonValue) {
  return buttonValue === "Clear";
}

function isBackspace(buttonValue) {
  return buttonValue === "backspace" || buttonValue === "Backspace";
}

function showInDisplay(value) {
  display.textContent = value;
}

function operate(operand1, operator, operand2) {
  switch (operator) {
    case "+":
      result = add(operand1, operand2);
      break;
    case "-":
      result = subtract(operand1, operand2);
      break;
    case "*":
      result = multiply(operand1, operand2);
      break;
    case "/":
      result = divide(operand1, operand2);
      break;
  }
  if (Number.isInteger(result)) {
    return result;
  } else {
    return (result = result.toFixed(2));
  }
}

function clearDisplay() {
  display.textContent = "";
}

function changeOperand() {
  inNum1 = inNum1 ? false : true;
}

function resetValues() {
  decimaClicked = false;
  num1 = "";
  num2 = "";
  operator = "";
  inNum1 = true;
  resultShown = false;
}

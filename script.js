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

function handleCalc(e, inputValue) {
  let buttonPressed = inputValue;

  if (isNumber(buttonPressed) || (!decimaClicked && isDecimal(buttonPressed))) {
    if (isDecimal(buttonPressed)) {
      decimaClicked = true;
    }
    if (inNum1) {
      if (resultShown) {
        num1 = buttonPressed;
        showInDisplay(num1);
      } else {
        num1 += buttonPressed;
        showInDisplay(num1);
      }
    } else {
      num2 += buttonPressed;
      showInDisplay(num2);
    }
  } else if (isOperator(buttonPressed)) {
    if (operator && num2) {
      let result = operate(+num1, operator, +num2);
      showInDisplay(result);
      resultShown = true;
      decimaClicked = false;
      num1 = result;
      num2 = "";
    } else {
      if (num1 && !operator) {
        changeOperand();
        decimaClicked = false;
      }

      clearDisplay();
    }
    operator = buttonPressed;
  } else if (isEqualButton(buttonPressed) && num1 && num2 && operator) {
    let result = operate(+num1, operator, +num2);
    if (result === "Infinity" || result === -"Infinity") {
      clearDisplay();
      resetValues();
      return alert("You cannot divide by 0!!!");
    }
    showInDisplay(result);
    resetValues();
    num1 = result;
    resultShown = true;
  } else if (isClearButton(buttonPressed)) {
    clearDisplay();
    resetValues();
  } else if (isBackspace(e.currentTarget.id) || e.key === "Backspace") {
    if (inNum1) {
      num1 += "";
      num1 = num1.slice(0, num1.length - 1);
      showInDisplay(num1);
    } else {
      num2 += "";
      num2 = num2.slice(0, num2.length - 1);
      showInDisplay(num2);
    }
  }
}

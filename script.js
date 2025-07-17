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

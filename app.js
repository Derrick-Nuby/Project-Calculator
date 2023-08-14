const operations = document.getElementById("operations");
const answer = document.getElementById("answer");
let operand1 = [];
let operand2 = [];
let result;
let fNumber, sNumber;

function allocate(number) {
  operands(number);
  display(number);
  // display(number);
  // operand1.push(number);
  // fNumber = Number(operand1.join(""));
  // console.log(fNumber);
  // if (typeof number === "number") {
  //   operand1.push(number);
  //   fNumber = Number(operand1.join(""));
  //   console.log(fNumber);
  // } else if (number === "-") {
  //   operand2.push(number);
  //   sNumber = Number(operand2.join(""));
  // } else if (number === "+") {
  //   operand2.push(number);
  //   sNumber = Number(operand2.join(""));
  // } else if (number === "X") {
  //   operand2.push(number);
  //   sNumber = Number(operand2.join(""));
  // } else if (number === "*") {
  //   operand2.push(number);
  //   sNumber = Number(operand2.join(""));
  // } else if (number === "/") {
  //   operand2.push(number);
  //   sNumber = Number(operand2.join(""));
  // }
  // console.log(fNumber);
  // console.log(sNumber);
}

function display(number) {
  operations.value = operations.value + number;
}

function operands(number) {
  operand1.push(number);
  result = Number(operand1.join(""));
  console.log(result);
}
function clearAll() {
  // operations.value = operand1 = [];
  operations.value = "";
  answer.value = "";
  // operand1 = [];
  // fNumber = Number(operand1.join(""));
  // console.log(fNumber);
}

function deleteLast() {
  operations.value = operations.value.slice(0, -1);
  // operand1.pop();
  // fNumber = Number(operand1.join(""));
  // console.log(fNumber);
  // // operations.value = operations.value.pop();
  // // operand1.pop();
  // // result = Number(operand1.join(""));
  // // operations.value = result;
}

function operate(operator) {
  if (operator === "-") {
    display(operator);
  } else if (operator === "+") {
    display(operator);
  } else if (operator === "X") {
    display(operator);
  } else if (operator === "*") {
    display(operator);
  } else if (operator === "/") {
    display(operator);
  }
}

function negation() {
  operations.value = operations.value * -1;
}

function calculate() {
  expression = operations.value.replace(/\s/g, "");
  answer.value = helper(Array.from(expression), 0);
}

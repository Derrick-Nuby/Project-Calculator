const one = document.getElementById("one");
const operations = document.getElementById("operations");
const answer = document.getElementById("answer");
const operand1 = [];
let result;

function allocate(number) {
  display(number);
  operands(number);
}

function display(number) {
  operations.value += number;
}

function operands(number) {
  operand1.push(number);
  result = Number(operand1.join(""));
  console.log(result);
}
function clearAll() {
  operations.value = "";
  answer.value = "";
}

function deleteLast() {
  operations.value = operations.value.slice(0, -1);
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

function calculate(operand1) {}

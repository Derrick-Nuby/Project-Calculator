const one = document.getElementById("one");
const operations = document.getElementById("operations");
const answer = document.getElementById("answer");

function allocate(number) {
  display(number);
  calculate(number);
}

function display(number) {
  operations.value += number;
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
  }
}

function calculate(operand1) {}

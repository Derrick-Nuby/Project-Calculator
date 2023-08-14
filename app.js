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

function helper(s, idx) {
  var stk = [];
  let sign = "+";
  let num = 0;
  for (let i = idx; i < s.length; i++) {
    let c = s[i];
    if (c >= "0" && c <= "9") {
      num = num * 10 + (c - "0");
    }
    if (!(c >= "0" && c <= "9") || i === s.length - 1) {
      if (c === "(") {
        num = helper(s, i + 1);
        let l = 1,
          r = 0;
        for (let j = i + 1; j < s.length; j++) {
          if (s[j] === ")") {
            r++;
            if (r === l) {
              i = j;
              break;
            }
          } else if (s[j] === "(") l++;
        }
      }
      let pre = -1;
      switch (sign) {
        case "+":
          stk.push(num);
          break;
        case "-":
          stk.push(num * -1);
          break;
        case "*":
          pre = stk.pop();
          stk.push(pre * num);
          break;
        case "/":
          pre = stk.pop();
          stk.push(pre / num);
          break;
      }
      sign = c;
      num = 0;
      if (c === ")") break;
    }
  }
  let ans = 0;
  while (stk.length > 0) {
    ans += stk.pop();
  }
  return ans;
}

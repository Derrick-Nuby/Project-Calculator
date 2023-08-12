const one = document.getElementById("one");
const upper = document.querySelector(".upper");
one.addEventListener("click", display(1));

function display(val) {
  document.getElementById("upper").value += val;

  return val;
}

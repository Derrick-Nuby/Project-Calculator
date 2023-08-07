function clearScreen() {
  resultElement.value = "";
  currentExpression = "";
}

document.querySelector(".buttons").addEventListener("click", (event) => {
  if (event.target.value === "Del") {
    resultElement.value = resultElement.value.slice(0, -1);
    currentExpression = currentExpression.slice(0, -1);
  }
});

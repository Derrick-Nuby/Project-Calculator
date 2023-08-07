const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  //   we set it using local storage
  localStorage.setItem("dark-mode", isDarkMode);
});

// we test local storage

const savedMode = localStorage.getItem("dark-mode");
if (savedMode === "true") {
  body.classList.add("dark-mode");
}

function display(val) {
  var upperDiv = document.getElementById("upper");
  upperDiv.textContent = upperDiv.textContent + val;

  return val;
}

var cell = document.querySelectorAll("td");
for (var i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", function() {
    if (this.textContent == "") {
      this.textContent = "X";
    } else if (this.textContent === "X") {
      this.textContent = "O";
    } else {
      this.textContent = "";
    }
  })
}

document.querySelector("button").addEventListener("click", function() {
  for (var i = 0; i < cell.length; i++) {
    this.textContent = "";
  }
});

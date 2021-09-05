// var colors = [
//   "rgb(255, 255, 0)",
//   "rgb(255, 0, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 0, 255)",
//   "rgb(0, 255, 255)",
//   "rgb(255, 0, 255)",
// ];
var gameMode = 6;
var colors, pickedColor;
var colorBlocks = document.querySelectorAll(".square");
var resultTxt = document.getElementById("result");
document.getElementById("status").addEventListener("click", reset);

//setting game mode easy
document.getElementById("easy").addEventListener("click", function () {
  gameMode = 3;
  initializeGame();
});
//setting gamemode hard
document.getElementById("hard").addEventListener("click", function () {
  gameMode = 6;
  initializeGame();
});

initializeGame();

function initializeGame() {
  colors = generateRandomColors();
  pickedColor = pickColor();
  document.getElementById("pickedColor").textContent = pickedColor;
  resultTxt.textContent = "";
  
  for (var i = 0; i < colorBlocks.length; i++) {
    if (i < gameMode) {
      colorBlocks[i].style.background = colors[i];
      colorBlocks[i].style.display = "initial";
      colorBlocks[i].addEventListener("click", color_block_clicked);
    } else {
      colorBlocks[i].style.display = "none";
    }
  }
}

function color_block_clicked() {
  console.log(this.style.background, pickedColor);
  if (this.style.background == pickedColor) {
    resultTxt.textContent = "Correct!!";
    alert("you clicked the correct one");
  } else {
    resultTxt.textContent = "Try Again!!";
    alert("you are Wrong Retard!!!!");
  }
}

function pickColor() {
  var randNo = Math.floor(Math.random() * colors.length);
  return colors[randNo];
}

function generateRandomColors() {
  var v1, v2, v3;
  var randomColors = [];
  for (var i = 0; i < gameMode; i++) {
    v1 = Math.floor(Math.random() * 255);
    v2 = Math.floor(Math.random() * 255);
    v3 = Math.floor(Math.random() * 255);
    randomColors[i] = `rgb(${v1}, ${v2}, ${v3})`;
    console.log(randomColors[i]);
  }
  return randomColors;
}

function reset() {
  initializeGame();
}

const hexParts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
  document.body.style.backgroundColor = pickHexColor();
});

function pickHexColor () {
  let newColorArray = [];
  for (i = 0; i < 6; i++) {
    let colorIndex = Math.floor(Math.random() * hexParts.length);
    let newHexPart = hexParts[colorIndex];
    newColorArray.push(newHexPart);
  }
  let newColor = "\#" + newColorArray.join("");
  color.innerHTML = newColor;
  return newColor;
}
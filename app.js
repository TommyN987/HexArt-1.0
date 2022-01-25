const colorArray = ["red", "yellow", "blue", "green", "purple", "brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
  document.body.style.backgroundColor = pickColor();
});

function pickColor() {
  let colorIndex = Math.floor(Math.random() * colorArray.length);
  let newColor = colorArray[colorIndex];
  color.innerHTML = newColor;
  return newColor;
}
console.log(pickColor());
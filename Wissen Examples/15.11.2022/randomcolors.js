const colorpicker = document.querySelector("#colorpicker");
const body = document.querySelector("body");

var colors = [
  "#975C8D",
  "#F49D1A",
  "#EF9A53",
  "#975C8D",
  "#7D8F69",
  "#A0E4CB",
  "#975C8D",
  "#372948",
];

colorpicker.addEventListener("click", renkDegis);
function renkDegis() {
  let random = Math.floor(Math.random() * colors.length + 1);
  body.style.backgroundColor = colors[random];
}

// body.addEventListener("keypress", renkDegis);
// function renkDegis(event) {
//   var tus = "KeyA";
//   if (event.code == tus) {
//     let random = Math.floor(Math.random() * colors.length + 1);
//     body.style.backgroundColor = colors[random];
//   }
// }

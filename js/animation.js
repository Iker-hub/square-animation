import anime from "./anime.es.js";
export function draw() {
  let square = document.getElementById("square");
  const gen = generatePosition();
  anime({
    targets: square,
    translateX: gen,
    delay: 1000,
    direction: "alternate",
    loop: true,
    easing: "easeInOutCirc",
  });
}

function* generatePosition() {
  yield Math.floor(Math.random() * 255) + 1;
}

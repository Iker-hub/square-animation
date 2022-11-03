import anime from "./anime.es.js";

export function draw() {
  var animation = anime({
    targets: ".square",
    translateX: function () {
      return generatePosition().next().value;
    },
    delay: 300,
    direction: "alternate",
    easing: "easeInOutSine",
  });
  animation.finished.then(draw);
}

function* generatePosition() {
  yield Math.floor(Math.random() * window.innerWidth) + 1;
}

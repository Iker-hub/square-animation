import anime from "./anime.es.js";

export function draw() {
  var animation = anime
    .timeline({
      targets: ".square",
      delay: 100,
      direction: "alternate",
      easing: "easeInOutSine",
      complete: function () {
        animation.restart;
        console.log("hloa");
      },
    })
    .add({
      translateX: generatePosition().next().value,
    });
}

function* generatePosition() {
  yield Math.floor(Math.random() * window.innerWidth) + 1;
}

function getRandomPosition() {
  var x = Math.floor(Math.random() * (window.innerWidth - 150));
  var y = Math.floor(Math.random() * (window.innerHeight - 150));
  return [x, y];
}

document.getElementById("no").addEventListener("click", function () {
  var position = getRandomPosition();
  this.style.position = "absolute";
  this.style.left = position[0] + "px";
  this.style.top = position[1] + "px";
});

document.getElementById("yes").addEventListener("click", function () {
  document.getElementById("photo").src = "images/Obr1.png";
  var audio = document.getElementById("sound");
  audio.volume = 0.1;
  audio.play();
});

document.getElementById("no").addEventListener("click", function () {
  document.getElementById("photo").src = "images/Obr3.png";
  var audio = document.getElementById("sound");
  audio.pause();
});

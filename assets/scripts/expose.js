// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectSound = document.getElementById("horn-select");
  const soundImage = document.querySelector("img");
  const soundFile = document.querySelector("audio");

  selectSound.addEventListener("change", (event) => {
    if (event.target.value == "air-horn") {
      soundImage.src = "assets/images/air-horn.svg";
      soundFile.src = "assets/audio/air-horn.mp3"
    }
    else if (event.target.value == "car-horn") {
      soundImage.src = "assets/images/car-horn.svg";
      soundFile.src = "assets/audio/car-horn.mp3"
    }
    else if (event.target.value == "party-horn") {
      soundImage.src = "assets/images/party-horn.svg";
      soundFile.src = "assets/audio/party-horn.mp3"
    }
  });

  const playButton = document.querySelector("button");

  playButton.addEventListener("click", () => {
    soundFile.volume = 0.5;
    soundFile.play();
  })
}
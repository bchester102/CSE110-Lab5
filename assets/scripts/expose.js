// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();
function init() {
  const selectSound = document.getElementById("horn-select");
  const soundImage = document.querySelector("img");
  const soundFile = document.querySelector("audio");

  const playButton = document.querySelector("button");
  let confetti = false;

  const volumeSlider = document.querySelector("input");
  const volumeImage = document.querySelector("#volume-controls>img");

  selectSound.addEventListener("change", (event) => {
    if (event.target.value == "air-horn") {
      soundImage.src = "assets/images/air-horn.svg";
      soundFile.src = "assets/audio/air-horn.mp3"
      confetti = false;
    }
    else if (event.target.value == "car-horn") {
      soundImage.src = "assets/images/car-horn.svg";
      soundFile.src = "assets/audio/car-horn.mp3"
      confetti = false;
    }
    else if (event.target.value == "party-horn") {
      soundImage.src = "assets/images/party-horn.svg";
      soundFile.src = "assets/audio/party-horn.mp3"
      confetti = true;
    }
  });

  playButton.addEventListener("click", () => {
    soundFile.play();
    if (confetti) jsConfetti.addConfetti();
  });

  volumeSlider.addEventListener("input", (event) => {
    const volume = event.target.value;
    soundFile.volume = volume/100;
    if (volume <= 0){ 
      volumeImage.src = "assets/icons/volume-level-0.svg";
    }
    else if (1 <= volume && volume < 33){ 
      volumeImage.src = "assets/icons/volume-level-1.svg";
    }
    else if (33 <= volume && volume < 67){ 
      volumeImage.src = "assets/icons/volume-level-2.svg";
    }
    else if (volume >= 67){ 
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });


}
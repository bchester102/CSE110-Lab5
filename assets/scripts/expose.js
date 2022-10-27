// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let selectSound = document.getElementById("horn-select");
  let soundImage = document.querySelector("img");
  //let volumeImage

  selectSound.addEventListener("change", (event) => {
    if (event.target.value == "air-horn") {
      soundImage.src = "assets/images/air-horn.svg";
    }
    else if (event.target.value == "car-horn") {
      soundImage.src = "assets/images/car-horn.svg";
    }
    else if (event.target.value == "party-horn") {
      soundImage.src = "assets/images/party-horn.svg";
    }
  });
}
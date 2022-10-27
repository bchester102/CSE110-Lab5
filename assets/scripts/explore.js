// explore.js
// Code adapted from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

window.addEventListener('DOMContentLoaded', init);

let voices = []

function fillVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }
  voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' - DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function init() {
  // TODO
  fillVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = fillVoiceList;
  }

  const synth = window.speechSynthesis;
  const submitButton = document.querySelector("button");
  const speechText = document.querySelector("textarea");
  const selectVoice = document.querySelector("select");
  const mouthImage = document.querySelector("img");

  submitButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(speechText.value);
    const currentVoice = selectVoice.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++){
      if (voices[i].name === currentVoice){
        utterance.voice = voices[i];
      }
    }
    mouthImage.src = 'assets/images/smiling-open.png';
    synth.speak(utterance);
    utterance.onend = () => {
      mouthImage.src = 'assets/images/smiling.png';
    };
  });
}
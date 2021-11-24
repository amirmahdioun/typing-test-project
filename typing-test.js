const TIME_LIMIT = 60;
const TEXT =
  "سعی نکنید همه چیز را بدانید. شما ممکن است خیلی چیزها را دیده و انجام داده باشید، اما لزوما به این معنی نیست که شما می دانید بهترین است. سعی نکنید به مردم بگویید که چگونه می توانند کارها را به شیوه ای بهتر انجام دهند یا اینکه بهتر می توانند کاری انجام دهند.";

let wpmText = document.getElementById("wpm");
let errorText = document.getElementById("errors");
let timerText = document.getElementById("time");
let accuracyText = document.getElementById("accuracy");

let typeText = document.getElementById("type-text");

let textArea = document.getElementById("textarea");

let timeLeft = 60;
let timeElapsed = 0;
let errors = 0;
let accuracy = 0;
let typedCharacter = 0;
let timer = null;
let hasStarted = false;

initializeTest({ timeLimit: TIME_LIMIT, text: TEXT });

textArea.addEventListener("input", update);

function initializeTest({ timeLimit, text }) {
  // TODO: Complete this function
}

function update() {
  if (!hasStarted) {
    timer = setInterval(updateTimer, 1000);
    hasStarted = true;
  }
  typedCharacter++;
  updateCharactersStatus();
  updateErrors(errors);
  updateAccuracy();
}

function updateCharactersStatus() {
  // TODO: Complete this function
  const chars = document.querySelectorAll('#type-text span');
  // const text = document.querySelector('#textarea').value;
  const textChars = textArea.value.trim().split('');
  chars.forEach((item,index) =>{
    if(textChars[index] === item.innerHTML){
      item.classList.add('correct-char');
      item.classList.remove('incorrect-char');
    }else if(textChars[index] == null){
      item.classList.remove('correct-char','incorrect-char');
    }else{
      item.classList.add('incorrect-char');
      item.classList.remove('correct-char');
    }
  });
  errors = document.querySelectorAll('.incorrect-char').length;
  errorText.innerHTML = errors;
}

function updateAccuracy() {
  // TODO: Complete this function
  let typedCharacter, errors, text;
  typedCharacter = document.getElementById("#textarea");
  text = typedCharacter.innerText || typedCharacter.textContent;
  text = text.trim("");
  typedCharacter = text.length;

  let accuracy = ((typedCharacter - 0) / typedCharacter) * 100;
  accuracy = Math.trunc(accuracy) + 1;
  return accuracy;
}
console.log(updateAccuracy());

function updateErrors(errors) {
  // TODO: Complete this function
    errorText.innerText = `${errors}`;
}

function updateWpm(typedCharacter, timeElapsed) {
  // TODO: Complete this function

  let wpm = (typedCharacter / 5 / timeElapsed) * 60;
  wpm = Math.floor(wpm);
  return wpm;
}

function updateTimer() {
    if(timeLeft > 0){
        timeElapsed ++
        timeLeft --
        let wpm = updateWpm(typedCharacter,timeElapsed);
        timerText.innerText = `${timeLeft}`;
        wpmText.innerText = `${wpm}`;
    }else{
        finishTest()
    }
}

function finishTest() {
  // TODO: Complete this function
}

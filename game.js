let resultObject = { wins: 0, loss: 0, tie: 0 };
function printTheResult(selectedOption) {
  let computerOption = computerGenerated();
  document.querySelector(".heading2").innerHTML = "Results";
  if (selectedOption === computerOption) {
    resultObject.tie++;
  } else if (
    (selectedOption === "rock" && computerOption === "paper") ||
    (selectedOption === "paper" && computerOption === "scissors")
  ) {
    resultObject.loss++;
  } else if (
    (selectedOption === "scissors" && computerOption === "paper") ||
    (selectedOption === "paper" && computerOption === "rock")
  ) {
    resultObject.wins++;
  }
  displayTheResult(selectedOption, computerOption);
}
function displayTheResult(selectedOption, computerOption) {
  const content1 = `<img src='${selectedOption}.png' alt='' class='icon' />
  <img src='${computerOption}.png' alt='' class='icon' />`;
  const content2 = `<div class='small'>${selectedOption}</div><div class='small'>${computerOption}</div>`;
  document.querySelector(".js-second-div").innerHTML = content1;
  document.querySelector(".js-second-sub-div").innerHTML = content2;
  const content3 = `<div class='small'>WINS - ${resultObject.wins}</div><div class='small'>LOSS - ${resultObject.loss}</div><div class='small'>TIE - ${resultObject.tie}</div>`;
  document.querySelector(".js-end-results").innerHTML = content3;
  document.querySelector(
    ".js-btn"
  ).innerHTML = `<button class='reset js-reset' onclick='resetResult();'>RESET</button>`;
}
function computerGenerated() {
  let computerGeneratedOption = Math.random();
  if (computerGeneratedOption > 0.6) {
    computerGeneratedOption = "rock";
  } else if (computerGeneratedOption > 0.3) {
    computerGeneratedOption = "paper";
  } else {
    computerGeneratedOption = "scissors";
  }
  return computerGeneratedOption;
}
function resetResult() {
  resultObject = { wins: 0, loss: 0, tie: 0 };
  const content3 = `<div class='small'>WINS - ${resultObject.wins}</div><div class='small'>LOSS - ${resultObject.loss}</div><div class='small'>TIE - ${resultObject.tie}</div>`;
  document.querySelector(".js-end-results").innerHTML = content3;
}
function inverseColors() {
  const btn = document.querySelector(".body1");
  const btn1 = document.querySelector(".reset");
  const btn2 = document.querySelector(".js-reset");
  if (btn.style.background === "white") {
    btn.style.background = "black";
    btn.style.color = "white";
    btn1.style.background = "white";
    btn1.style.color = "black";
    btn2.style.background = "white";
    btn2.style.color = "black";
  } else {
    btn.style.background = "white";
    btn.style.color = "black";
    btn1.style.background = "black";
    btn1.style.color = "white";
    btn2.style.background = "black";
    btn2.style.color = "white";
  }
}

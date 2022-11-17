let key, operator, action, display, firstOperand, secondOperand;
let result = document.querySelector(".the-result");
let userInputDisplay = document.querySelector(".user-input");
let track = document.querySelector(".track");
const calculator = document.querySelector(".calculator-container");
const sameBtn = document.querySelectorAll(".same");
const btnDiv = document.querySelector(".btn-container");
const button = document.querySelectorAll(".light");
const equalDiv = document.querySelector(".equal-operator")
const moodIcon = document.querySelector(".mood");

moodIcon.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  btnDiv.classList.toggle("btn-dark");
  track.classList.toggle("lightBtn");
  result.classList.toggle("lightBtn");
  equalDiv.classList.toggle("lightBtn");
  userInputDisplay.classList.toggle("lightBtn")
  sameBtn.forEach((eachBtn) => {
    eachBtn.classList.toggle("action-dark");
  });
  moodIcon.classList.toggle("fa-sun");
  button.forEach((eachBtn)=>{
    eachBtn.classList.toggle("lightBtn")
  })
});

btnDiv.addEventListener("click", (btn) => {
  if (btn.target.matches("button")) {
    display = userInputDisplay.textContent;
    key = btn.target.value;
    console.log(key);
    action = btn.target.dataset.action;

    if (!action) {
      if (display == "0") {
        display = key;
        userInputDisplay.textContent = display;
      } else {
        display = display + key;
        userInputDisplay.textContent = display;
      }
    } else {
      if (action == "dot") {
        if (userInputDisplay.textContent == "") {
          display = 0 + ".";
          userInputDisplay.textContent = display;
        } else {
          display = userInputDisplay.textContent + ".";
          userInputDisplay.textContent = display;
        }
      }
    }
    if (
      action == "add" ||
      action == "subtract" ||
      action == "multiply" ||
      action == "divide" ||
      action == "percent" ||
      action == "clear" ||
      action == "backspace" ||
      action == "equal"
    ) {
      switch (action) {
        case "add":
          if (result.textContent == "0") {
            firstOperand = userInputDisplay.textContent;
            operator = "+";
            track.textContent = firstOperand + " " + operator;
            userInputDisplay.textContent = "0";
          } else {
            firstOperand = result.textContent;
            operator = "+";
            track.textContent = firstOperand + " " + operator;
            userInputDisplay.textContent = "0";
          }
          break;
        case "subtract":
          if (result.textContent == "0") {
            firstOperand = userInputDisplay.textContent;
            operator = "-";
            track.textContent = firstOperand + " " + operator;
            userInputDisplay.textContent = "0";
          } else {
            firstOperand = result.textContent;
            operator = "-";
            track.textContent = firstOperand + " " + operator;
            userInputDisplay.textContent = "0";
          }
          break;
        case "multiply":
          if (result.textContent == "0") {
            firstOperand = userInputDisplay.textContent;
            operator = "*";
            track.textContent = firstOperand + " " + operator;
            userInputDisplay.textContent = "0";
          } else {
            firstOperand = result.textContent;
            operator = "*";
            track.textContent = firstOperand + " " + operator;
            userInputDisplay.textContent = "0";
          }
          break;
        case "divide":
          if (result.textContent == "0") {
            firstOperand = userInputDisplay.textContent;
            operator = "/";
            track.textContent = firstOperand + " " + operator;
            userInputDisplay.textContent = "0";
          } else {
            firstOperand = result.textContent;
            operator = "/";
            track.textContent = firstOperand + " " + operator;
            userInputDisplay.textContent = "0";
          }
          break;
        case "percent":
          firstOperand = userInputDisplay.textContent;
          operator = "%";
          result.textContent = userInputDisplay.textContent / 100 + "%";
          userInputDisplay.textContent = "0";
          break;
        case "clear":
          userInputDisplay.textContent = "0";
          track.textContent = "";
          result.textContent = "0";
          break;
        case "backspace":
          if (userInputDisplay.textContent.length == 1) {
            let backspaced = userInputDisplay.textContent;
            let backspace = backspaced.slice(0, -1);
            userInputDisplay.textContent = "0";
          } else {
            let backspaced = userInputDisplay.textContent;
            let backspace = backspaced.slice(0, -1);
            userInputDisplay.textContent = backspace;
          }
          break;
          case "equal":
            secondOperand = userInputDisplay.textContent;
            if (operator == "+") {
              result.textContent = Number(firstOperand) + Number(secondOperand);
              userInputDisplay.textContent = "0";
            }
            if (operator == "-") {
              result.textContent = Number(firstOperand) - Number(secondOperand);
              userInputDisplay.textContent = "0";
            }
            if (operator == "*") {
              result.textContent = Number(firstOperand) * Number(secondOperand);
              userInputDisplay.textContent = "0";
            }
            if (operator == "/") {
              result.textContent = Number(firstOperand) / Number(secondOperand);
              userInputDisplay.textContent = "0";
            }
      }
    }
  }
});

// Grab all the buttons as in array
// loop through the array  and add event listener to each button
// when a button is clicked, grab the button's value and store in a variable
// Grab the display element
// add the value from #3 to the display element

const buttons = document.querySelectorAll(".btn-area > div");

const buttonsArgs = Array.from(buttons);
const displayElm = document.querySelector(".display");

let strToDisplay = " ";
const operators = ["+", "-", "*", "/"];
let lastOperator = " ";

buttonsArgs.map((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = " ";
      display();
      return;
    }
    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (operators.includes(val)) {
      lastOperator = val;
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
        strToDisplay += val;
        return display(strToDisplay);
      }
    }

    if (val === ".") {
      // if(!lastOperator && !strToDisplay.includes(".")){
      // }
      if (lastOperator) {
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
        const lastNumberSet = strToDisplay.slice(operatorIndex + 1);
        console.log(strToDisplay, lastNumberSet);

        if (lastNumberSet.includes(".")) {
          return;
        }
      }
      if (!lastOperator && strToDisplay.includes(".")) return;
    }
    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayElm.innerText = str || "0.00";
};

const total = () => {
  const ttl = eval(strToDisplay);
  display(ttl);
  strToDisplay = ttl.toString;
};

const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "AC") {
            expression = "";
            inputBox.value = "";
        }

        else if (value === "DEL") {
            expression = expression.slice(0,-1);
            inputBox.value = expression;
        }

        else if (value === "SQR") {
            if (expression !== "") {
                expression = Math.sqrt(Number(expression)).toString();
                inputBox.value = expression;
            }
        }

        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                inputBox.value = expression
            } catch (error) {
                inputBox.value = "Error";
                expression = ""
            }
        }

        else {
           const operators = ["+", "-", "*", "/"];

           if (operators.includes(value) && expression === ""){
            return;
           }

           const lastChar = expression.slice(-1);
           if (operators.includes(value) && operators.includes(lastChar)){
            return;
           }

           expression += value;
           inputBox.value = expression;
        }
    });
});
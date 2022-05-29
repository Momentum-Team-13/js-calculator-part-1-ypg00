// String to store user input, prior to "C" or "="
let equation = '';
let i = 1;

document.getElementById('calculator').addEventListener('click', (event) => {
  const display = document.getElementById('display');
  let input = event.target.textContent;
  switch (input) {

    // Numbers
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      display.textContent += input;
      equation += input;
      console.log(equation);
      break;
    
    // Decimals
    case '.':
      if (equation.length === 0) {
        equation += '0.';
        display.textContent = equation;
        console.log(equation);
        break;
      } else {
        display.textContent += input;
        equation += input;
        console.log(equation);
        break;
      }
    
    // Operators
    case '+':
    case '-':
    case '/':
      display.textContent += input;
      equation += input;
      console.log(equation);
      break;
    case 'x':
      display.textContent += '*';
      equation += '*';
      console.log(equation);
      break;
    case '+/-':
      if (equation[0] === '-') {
        equation = equation.slice(1);
        display.textContent = equation;
        console.log(equation);
        break;
      } else {
        equation = "-" + equation;
        display.textContent = equation;
        console.log(equation);
        break;
      }
    case 'Del':
      equation = equation.substring(0, equation.length - 1);
      display.textContent = equation;
      console.log(equation);
      break;
    case 'C':
      display.textContent = '';
      equation = '';
      console.log(equation);
      break;

    // Evaluations
    case '=':
      display.textContent = eval(
        equation
      );
      console.log(equation);
      break;
  }
});
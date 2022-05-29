// String to store user input, prior to "C" or "="
let equation = '';
let i = 1;

document.getElementById('calculator').addEventListener('click', (event) => {
  const display = document.getElementById('display');
  let input = event.target.innerHTML;
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
      equation += input;
      display.textContent += input;
      console.log(`equation: ${equation}; typeof: ${typeof equation}`);
      break;
    
    // Decimals
    case '.':
      const dot = /\./;
      if (equation.length === 0) {
        equation += '0.';
        display.textContent = '0.';
        console.log(`equation: ${equation}; typeof: ${typeof equation}`);
        break;
      } else if (dot.test(equation)) {
        console.log(`equation: ${equation}; typeof: ${typeof equation}`);
        break;
      } else {
        equation += input;
        display.textContent += input;
        console.log(`equation: ${equation}; typeof: ${typeof equation}`);
        break;
      }
    
    // Operators
    case '+':
    case '-':
    case '/':
      equation += input;
      display.textContent += input;
      console.log(`equation: ${equation}; typeof: ${typeof equation}`);
      break;
    case 'x':
      equation += '*';
      display.textContent += '*';
      console.log(`equation: ${equation}; typeof: ${typeof equation}`);
      break;
    case '+/-':
      if (equation[0] === '-') {
        equation = equation.slice(1);
        display.textContent = equation;
        console.log(`equation: ${equation}; typeof: ${typeof equation}`);
        break;
      } else {
        equation = "-" + equation;
        display.textContent = equation;
        console.log(`equation: ${equation}; typeof: ${typeof equation}`);
        break;
      }
    case 'Del':
      equation = equation.substring(0, equation.length - 1);
      display.textContent = equation;
      console.log(`equation: ${equation}; typeof: ${typeof equation}`);
      break;
    case 'C':
      equation = '';
      display.textContent = equation;
      console.log(`equation: ${equation}; typeof: ${typeof equation}`);
      break;

    // Evaluations
    case '=':
      equation = eval(
        equation
      );
      display.textContent = equation;
      console.log(`equation: ${equation}; typeof: ${typeof equation}`);
      break;
  }
});
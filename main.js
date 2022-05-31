// Stores values as strings for computations: num, operator, num
let equation = ['', '', ''];
// Variable to track where in the equation array to insert inputs
let i = 0;

// Event listener
document.getElementById('buttons').addEventListener('click', (e) => {
  const display = document.getElementById('display');
  const input = e.target.innerHTML;
  switch (input) {
    
    // Numbers
    default:
      scrubEquation();
      equation[i] += input;
      display.textContent = equation[i];
      log();
      break;
    
    // Decimals
    case '.':
      scrubEquation();
      const decimal = /\./;
      if (equation[i].length === 0) {
        equation[i] = '0.';
        display.textContent = equation[i];
        log();
        break;
      } else if (decimal.test(equation[i]) === false) {
        equation[i] += input;
        display.textContent = equation[i];
        log();
        break;
      } else {
        break;
      }
    
    // Operators
    case '/':
    case 'x':
    case '-':
    case '+':
      scrubEquation();
      equation[1] = input.replace(/x/g, '*');
      display.textContent = equation[1];
      i = 2;
      log();
      break;
    
    // Toggle positive or negative values
    case '+/-':
      scrubEquation();
      if (equation[i][0] === '-') {
        equation[i] = equation[i].slice(1);
        display.textContent = equation[i];
        log();
        break;
      } else {
        equation[i] = `-${equation[i]}`;
        display.textContent = equation[i];
        log();
        break;
      }
    
    // Delete last input value
    case 'Del':
      scrubEquation();
      equation[i] = equation[i].substring(0, equation[i].length - 1);
      display.textContent = equation[i];
      log();
      break;
    
    // Clear equation & display, resets i
    case 'C':
      equation = ['', '', ''];
      display.textContent = '';
      i = 0;
      log();
      break;

    // Evaluations
    case '=':
      let equationStr = `(${equation[0]})${equation[1]}(${equation[2]})`;
      equation[0] = `${eval(equationStr)}`;
      display.textContent = equation[0];
      i = 0;
      log();
      break;
  }
});

// Functions

// Clears the equation array of operator and the second operand
function scrubEquation() {
  if (i === 0 && equation[2]) {
    equation[1] = '';
    equation[2] = '';
  }
}
// Console logs equation array
function log() {
  console.log(`equation: ${equation}`);
}

/* Features to work on:
1. Limit the display so text does not run off
2. Replace eval() with math.js library
3. Introduce new operators: e.g. remainder, exponents, parentheses
*/
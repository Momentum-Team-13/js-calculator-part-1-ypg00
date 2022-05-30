// Stores values as strings for computations: num, operator, num
let equation = ['', '', ''];
// Variable to track where in the computation to insert inputs
let i = 0;

document.getElementById('buttons').addEventListener('click', (event) => {
  const display = document.getElementById('display');
  const input = event.target.innerHTML;
  
  switch (input) {
    
    // Numbers
    default:
      equation[i] += input;
      display.textContent = equation[i];
      if (i === 0 && equation[2]) {
        equation[1] = '';
        equation[2] = '';
      }
      console.log(`equation: ${equation}`);
      break;
    
    // Decimals
    case '.':
      const decimal = /\./;
      if (equation[i].length === 0) {
        equation[i] = '0.';
        display.textContent = equation[i];
        console.log(`equation: ${equation}`);
        break;
      } else if (decimal.test(equation[i]) === false) {
        equation[i] += input;
        display.textContent = equation[i];
        console.log(`equation: ${equation}`);
        break;
      } else {
        break;
      }
    
    // Operators
    case '/':
    case 'x':
    case '-':
    case '+':
      equation[1] = input.replace(/x/g, '*');
      display.textContent = equation[1];
      i = 2;
      equation[2] = '';
      console.log(`equation: ${equation}`);
      break;
    
    // Toggle positive or negative values
    case '+/-':
      if (i === 0 && equation[2]) {
        equation[1] = '';
        equation[2] = '';
      }
      if (equation[i][0] === '-') {
        equation[i] = equation[i].slice(1);
        display.textContent = equation[i];
        console.log(`equation: ${equation}`);
        break;
      } else {
        equation[i] = `-${equation[i]}`;
        display.textContent = equation[i];
        console.log(`equation: ${equation}`);
        break;
      }
    
    // Delete last input value
    case 'Del':
      equation[i] = equation[i].substring(0, equation[i].length - 1);
      display.textContent = equation[i];
      if (i === 0 && equation[2]) {
        equation[1] = '';
        equation[2] = '';
      }
      console.log(`equation: ${equation}`);
      break;
    
    // Clear everything
    case 'C':
      equation = ['', '', ''];
      display.textContent = '';
      i = 0;
      console.log(`equation: ${equation}`);
      break;

    // Evaluations
    case '=':
      let strEquation = `(${equation[0]})${equation[1]}(${equation[2]})`;
      console.log(`strEquation = ${strEquation}`);
      equation[0] = `${eval(strEquation)}`;
      display.textContent = equation[0];
      console.log(`i = ${i}`);
      i = 0;
      console.log(`equation: ${equation}, and typeof: ${typeof equation[0]}`);
      break;
    
  }
});

/* Documentation

.replace() - https://www.w3schools.com/jsref/jsref_replace.asp
g "flag" or "modifier" - https://www.w3schools.com/jsref/jsref_regexp_g.asp
.test() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

*/
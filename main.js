// String to store user input, prior to "C" or "="
let equation = ['', '', ''];
let i = 0;

document.getElementById('buttons').addEventListener('click', (event) => {
  const display = document.getElementById('display');
  let input = event.target.innerHTML;
  
  switch (input) {

    // Decimals
    case '.':
      const dot = /\./;
      if (equation[i].length === 0) {
        equation[i] = '0.';
        display.textContent = '0.';
        console.log(`equation: ${equation}`);
        break;
      } else if (dot.test(equation[i])) {
        console.log(`equation: ${equation}`);
        break;
      } else {
        equation[i] += input;
        display.textContent += input;
        console.log(`equation: ${equation}`);
        break;
      }
    
    // Operators
    case '/':
    case 'x':
    case '-':
    case '+':
      equation[1] = input.replace(/x/g, '*');
      display.textContent = '';
      i = 2;
      equation[2] = '';
      console.log(`equation: ${equation}`);
      break;
    case '+/-':
      if (equation[i][0] === '-') {
        equation[i] = equation[i].slice(1);
        display.textContent = equation[i];
          if (i === 0 && equation[2]) {
            equation[1] = '';
            equation[2] = '';
          }
        console.log(`equation: ${equation}`);
        break;
      } else {
        equation[i] = `-${equation[i]}`;
        display.textContent = equation[i];
          if (i === 0 && equation[2]) {
            equation[1] = '';
            equation[2] = '';
          }
        console.log(`equation: ${equation}`);
        break;
      }
    case 'Del':
      equation[i] = equation[i].substring(0, equation[i].length - 1);
      display.textContent = equation[i];
      if (i === 0 && equation[2]) {
        equation[1] = '';
        equation[2] = '';
      }
      console.log(`equation: ${equation}`);
      break;
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
  
  }
});

/* Documentation

.replace() - https://www.w3schools.com/jsref/jsref_replace.asp
g "flag" or "modifier" - https://www.w3schools.com/jsref/jsref_regexp_g.asp
.test() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

*/
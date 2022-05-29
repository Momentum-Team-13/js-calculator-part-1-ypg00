// String to store user input, prior to "C" or "="
let equation = '';

document.getElementById('calculator').addEventListener('click', (event) => {
  const display = document.getElementById('display');
  const input = event.target.textContent;
  switch (input) {
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
    case '.':
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
    case 'C':
      display.textContent = '';
      equation = '';
      console.log(equation);
      break;
    case '=':
      display.textContent = eval(
        equation
      );
      console.log(equation);
      break;
  }
});
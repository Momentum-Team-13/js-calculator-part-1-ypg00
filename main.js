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
      break;
    case 'x':
      display.textContent += '*';
      break;
    case 'C':
      display.textContent = '';
      break;
    case '=':
      display.textContent = eval(display.textContent);
      break;
  }
});
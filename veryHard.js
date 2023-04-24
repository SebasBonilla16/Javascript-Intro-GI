
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Cannot divide by Zero";
    }
    return a / b;
  }
  
  const num1 = Number(prompt("Enter the first number:"));
  const operator = prompt("Enter an operator (+, -, *, /):");
  const num2 = Number(prompt("Enter the second number:"));
  
  // Perform the calculation based on the operator input
  let result;
  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  }
  
  console.log(num1 + " " + operator + " " + num2 + " = " + result);
  
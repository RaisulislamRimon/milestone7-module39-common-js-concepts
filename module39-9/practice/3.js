// Practice Problem 3

// Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
//     parameter will be a string) that will perform arithmetic operation depending on the third parameter and
//     will print the result. For example:
//     1. Print result of num1+num2 if operation is “add”
//     2. Print result of num1-num2 if operation is “subtract”
//     3. Print result of num1*num2 if operation is “multiply”
//     4. Print result of num1/num2 if operation is “divide”
//     5. Print result of num1%num2 if operation is “modulus”
//     6. Else print “Invalid operation”

const doMath = (num1, num2, operation) => {
  if (operation === "add") {
    console.log(num1 + num2);
  } else if (operation === "subtract") {
    console.log(num1 - num2);
  } else if (operation === "multiply") {
    console.log(num1 * num2);
  } else if (operation === "divide") {
    console.log(num1 / num2);
  } else if (operation === "modulus") {
    console.log(num1 % num2);
  } else {
    console.log("Invalid operation");
  }
};

doMath(5, 2, "add");
doMath(5, 2, "subtract");
doMath(5, 2, "multiply");
doMath(5, 2, "divide");
doMath(5, 2, "modulus");
doMath(5, 2, "invalid");
doMath(5, 2, "another invalid operation");

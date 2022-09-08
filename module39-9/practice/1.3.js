// 3) Write an arrow function that will take a parameter and will check if the
// parameter is a number or not by using isNaN(). And return true or false.

const isNumber = (num) => {
  return isNaN(num) ? false : true;
};

console.log(isNumber(5));

// How do you check is a number JavaScript?
// You can check if a value is a number in three ways:
// typeof - if the value is a number, the string "number" is returned.
// Number. isFinite() - if the value is a number, true is returned.
// isNaN() - if the value is a number, false is returned.

const isNumber1 = (num) => {
  if (typeof num === "number") {
    return true;
  }
  return false;
};

console.log(isNumber1(5));
console.log(isNumber1("5"));
console.log(isNumber1({ name: "Rimon", age: 22 }));

const isNumber2 = (num) => {
  if (Number.isFinite(num)) {
    return true;
  }
  return false;
};

console.log(isNumber2(5));
console.log(isNumber2("5"));
console.log(isNumber2({ name: "Rimon", age: 22 }));

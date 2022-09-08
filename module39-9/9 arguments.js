// function sum(a, b, c) {
//   console.log(arguments);
//   console.log(typeof arguments);
//   console.log(arguments[4]);
//   const result = a + b + c;
//   return result;
// }

// const total = sum(1, 2, 3);
// console.log(total);

// const total1 = sum(1, 2, 3, 4, 5, 6, 7);
// console.log(total1);

function sum(a, b, c) {
  console.log(arguments);
  console.log(typeof arguments);
  console.log(Array.isArray(arguments));
  const args = [...arguments];
  console.log(args);
  console.log(typeof args);
  console.log(Array.isArray(args));
  const result = a + b + c;
  return result;
}

const total = sum(1, 2, 3, 4, 5, 6, 7);
console.log(total);

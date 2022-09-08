// ============================================================
//             primitive types are pass by value
//          Object and Array are pass by reference
// ============================================================

// let num1 = 10;
// let num2 = 20;

// function multiply(a, b) {
//   const result = a * b;
//   return result;
// }

// const total = multiply(num1, num2);
// console.log(total);

let num1 = 10;
let num2 = 20;
function multiply(a, b) {
  a = 100;
  const result = a * b;
  console.log(a);
  return result;
}
console.log(num1);
const total = multiply(num1, num2);
console.log(total);

//  Object and Array are pass by reference

let student1 = { name: "John", age: 20 };
let student2 = { name: "Jane", age: 21 };

function makeMovie(couple1, couple2) {
  console.log(couple1);
  couple1.name = "John Doe";
  console.log(couple1);
  console.log(couple2);
  couple2.name = "Jane Doe";
  console.log(couple2);
}

console.log(student1);
console.log(student2);

makeMovie(student1, student2);

console.log(student1);
console.log(student2);

// function greeting(greetingHandler, name) {
//   greetingHandler(name);
// }
// // const name = 'Halim mama';
// // const numbers = [45, 54, 78];
// // const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
// function greetingHandler(name) {
//   console.log("Good Morning", name);
// }

// function greetEvening(name) {
//   console.log("Good Evening", name);
// }

// function greetNight(name) {
//   console.log("Good Night", name);
// }

// greeting(greetingHandler, "Tom Hanks");
// greeting(greetingHandler, "Tom Brady");
// greeting(greetingHandler, "Tom Cruise");
// greeting(greetEvening, "Tom Solaiman");
// greeting(greetEvening, "Tom Salman");
// greeting(greetNight, "Rasel");

// function submitHandler() {
//   console.log("submit button clicked");
// }
// document.getElementById("btn-submit").addEventListener("click", submitHandler);

function greeting(greetingHandler) {
  console.log(greetingHandler());
}

function greetingHandler() {
  console.log("Good Morning");
}

function greetEvening() {
  console.log("Good Evening");
}

greeting(greetEvening);

greeting(greetingHandler);

// greeting("Rimon");

// const personName = "Rimon";
// greeting(personName);

// const number = 45;
// greeting(number);

// const nums = [45, 54, 78];
// greeting(nums);

// const names = { brand: "Lenovo", price: 45000, memory: "8gb" };
// greeting(names.brand);
// greeting(names);

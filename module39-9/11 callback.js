function numberOne() {
  console.log("number one is called");
}
function numberTwo(callback) {
  console.log("number two is called");
  callback();
}

numberTwo(numberOne);

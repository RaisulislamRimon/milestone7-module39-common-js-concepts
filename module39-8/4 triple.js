// always use ===
// equal comparison doesnt work for non-primitive
// =======================================
// how to compare two objects or array : search in google
// =======================================

const first = 2;
const second = 2;

if (first === second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const third = [45, 54, 98];
const fourth = [45, 54, 98];
if (third === fourth) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

// type coercion
// type conversion
// type casting

const num1 = 2;
const num2 = "2";

if (num1 === num2) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const num3 = 2;
const num4 = true;

if (num3 === num4) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const num5 = 1;
const num6 = true;

if (num5 == num6) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const num7 = 1;
const num8 = true;

if (num7 === num8) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const num9 = 1;
const num10 = false;

if (num9 == num10) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const num11 = 1;
const num12 = false;

if (num11 === num12) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const num13 = 0;
const num14 = false;

if (num13 == num14) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const num15 = 0;
const num16 = false;

if (num15 === num16) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const num17 = "0";
const num18 = false;

if (num17 == num18) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

const num19 = "0";
const num20 = false;

if (num19 === num20) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

// const num21 = { x: 5 };
// const num22 = { x: 5 };

// if (num21 === num22) {
//   console.log("values are equal");
// } else {
//   console.log("values are not equal");
// }

// const num21 = { x: 5 };
// const num22 = { x: 5 };

// if (num21 == num22) {
//   console.log("values are equal");
// } else {
//   console.log("values are not equal");
// }

// const num23 = [];
// const num24 = [];

// if (num23 == num24) {
//   console.log("values are equal");
// } else {
//   console.log("values are not equal");
// }

// const num23 = [];
// const num24 = [];

// if (num23 === num24) {
//   console.log("values are equal");
// } else {
//   console.log("values are not equal");
// }

// const num23 = [];
// const num24 = [];
// if (num23 == num24) {
//   console.log("values are equal");
// } else {
//   console.log("values are not equal");
// }

const num23 = [];
const num24 = num23;

if (num23 == num24) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

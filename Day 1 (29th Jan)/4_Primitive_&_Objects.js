let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3");
let e = "Dhruv";
let f = Symbol("I am a nice symbol");
let g;
console.log(a, b, c , d, e, f, g);
console.log(typeof c);

// Non Primitive Data Type - Objects in Js
const item = {
  "Dhruv": true,
  "Shubh": false,
  "Raj": 67,
  "Kashyap": undefined
}
console.log(item["Raj"]);
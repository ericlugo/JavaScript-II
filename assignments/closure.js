// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function makeExponent(y, x){
  return function(x) {
    return Math.pow(x, y);
  }
}
const Pow1 = makeExponent(1);   console.log(Pow1(2));
const Pow2 = makeExponent(2);   console.log(Pow2(2));
const Pow3 = makeExponent(3);   console.log(Pow3(2));
const Pow4 = makeExponent(4);   console.log(Pow4(2));
const Pow5 = makeExponent(5);   console.log(Pow5(2));
const Pow6 = makeExponent(6);   console.log(Pow6(2));
const Pow7 = makeExponent(7);   console.log(Pow7(2));
const Pow8 = makeExponent(8);   console.log(Pow8(2));
const Pow9 = makeExponent(9);   console.log(Pow9(2));
const Pow10 = makeExponent(10); console.log(Pow10(2));



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

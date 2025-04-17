const celcius = (x, cb) => {
  return cb(x);
};

const fahrenheit = (a1) => {
  return (9 / 5) * a1 + 32;
};
const kelvin = (b1) => {
  return b1 + 273;
};
const reamur = (c1) => {
  return (4 / 5) * c1;
};

const result = celcius(5, reamur);
const result1 = celcius(5, fahrenheit);
const result2 = celcius(5, kelvin);

console.log(result);
console.log(result1);
console.log(result2);

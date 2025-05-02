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

const resultReamur = celcius(5, reamur);
const resultFahrenheit = celcius(5, fahrenheit);
const resultKelvin = celcius(5, kelvin);

console.log("Reamur:", resultReamur);
console.log("Fahrenheit:", resultFahrenheit);
console.log("Kelvin:", resultKelvin);

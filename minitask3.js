const celcius = {
  kelfin: function (c) {
    return c + 273;
  },
  fahrenheit: function (c) {
    return (9 / 5) * c + 32;
  },
  reamur: function (c) {
    return (4 / 5) * c;
  },
  confert: function (c, type) {
    if (typeof c !== "number") {
      console.log("suhu harus sebuah number");
      return;
    }
    let result = null;
    switch (type) {
      case "f":
        result = this.fahrenheit(c);
        break;
      case "r":
        result = this.reamur(c);
        break;
      case "k":
        result = this.kelfin(c);
        break;
    }
    return result;
  },
};

const fahrenheit = celcius.confert(10, "f");
const kelfin = celcius.confert(10, "k");
const reamur = celcius.confert(10, "r");

console.log("hasil konversi :" + fahrenheit);
console.log("hasil konversi :" + kelfin);
console.log("hasil konversi :" + reamur);

const ganjilGenap = (gangen, cb) => {
  if (typeof gangen !== "number") {
    console.log("suhu harus sebuah number");
    return;
  }
  return cb(gangen);
};

const genap = (a1) => {
  if (a1 % 2 == 0) {
    console.log("genap");
  } else {
    console.log("ganjil");
  }
};

ganjilGenap(23, genap);

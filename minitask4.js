const ganjilGenap = (number, callback) => {
  if (typeof number !== "number") {
    console.log("Input harus berupa angka (number)");
    return;
  }
  callback(number);
};

const cekGanjilGenap = (angka) => {
  if (angka % 2 === 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
};

ganjilGenap(22, cekGanjilGenap);

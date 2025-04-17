const ganjilGenap = (gangen, cb) => {
  return cb(gangen);
};

const genap = (a1) => {
  return 2 % 2 == 0;
};

const ganjil = (a2) => {
  return 2 % 2 == 1;
};

const result = ganjilGenap(6, function (y1) {
  if (y1 % 2 == 0) {
    console.log(genap);
    return;
  } else {
    console.log(ganjil);
    return;
  }
});

console.log(result);

const luasLingkaran = (r) => {
  if (r % 7 === 0) {
    console.log((22 / 7) * r * r + " adalah luas lingkaran ");
  } else {
    console.log(3.14 * r * r + " adalah luas lingkaran ");
  }
};

const kelilingLingkaran = (r) => {
  if (r % 7 === 0) {
    console.log(2 * (22 / 7) * r + " adalah keliling lingkaran");
  } else {
    console.log(2 * 3.14 * r + " adalah keliling lingkaran");
  }
};

luasLingkaran(7);
kelilingLingkaran(7);

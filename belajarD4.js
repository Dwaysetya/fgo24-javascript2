// const bio = {
//   fullName: "jhon",
//   age: "30",
// };
// const extraInfo = {
//   skills: ["web programming", "Painting"],
//   education: [
//     {
//       name: "SMP 1 denpasara",
//       years: 2022,
//     },
//   ],
// };
// const profile = {
//   ...bio,
//   ...extraInfo,
// };

// console.log(profile);

// const obj = [
//   {
//     fullName: "jhon",
//     age: 30,
//   },
// ];

// obj[0] = {
//   ...obj[0],
//   age: 12,
// };

// console.log(obj);

// data
const data1 = [
  [
    "0",
    [
      "0",
      "1",
      "2",
      {
        string: [
          0,
          {
            value: "hello",
          },
        ],
      },
    ],
  ],
];

data1[0][1][3].string[1] = {
  ...data1,
  value: "haiiii",
};

console.log(data1[0][1][3].string[1].value);

// data1[0][1][3] = {
//     ...string[1],
//     value : ""
// }

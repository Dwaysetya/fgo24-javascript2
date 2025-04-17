// const profile = {
//   name: "jhon",
//   age: 30,
//   skills: ["web programming", "painting"],
// };

// let { skills } = profile;

// skills = [...skills, "hiking"];

// console.log(skills);

// const profile = {
//   name: "jhon",
//   age: 30,
//   skills: ["web programming", "painting"],
//   education: {
//     name: "universitas",
//     year: 2017,
//   },
// };

// const { skills, age, name: fullName } = profile;
// // const {age} = profile
// const { skills: anotherSkills } = structuredClone(profile);
// const { name: universityName } = profile.education; // hasilnya akan cetak universitas
// const {
//   education: { name: univName },
// } = profile; // hasilnya sama akan mengeluarkan universitas

// anotherSkills[2] = "Hiking";

// console.log(skills);
// console.log(age);
// console.log(anotherSkills);
// console.log(univName);

const data1 = [["0", ["0", "1", "2", { string: [0, { value: "hello" }] }]]];

const [
  [
    _1,
    [
      _2,
      _3,
      _4,
      {
        string: [_5, { value }],
      },
    ],
  ],
] = data1;
// const { value: sapaKawan } = data1[0][1][3].string[1];
console.log(value);

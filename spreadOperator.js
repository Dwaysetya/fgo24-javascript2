const bio = {
  fullName: "jhon",
  age: "30",
};
const extraInfo = {
  skills: ["web programming", "Painting"],
  education: [
    {
      name: "SMP 1 denpasara",
      years: 2022,
    },
  ],
};

const newData = {
  skills: ["Hiking"],
  education: [
    {
      name: "SMP 2 Jakarta",
      years: 2012,
    },
  ],
};

extraInfo.skills = { ...extraInfo.skills, ...newData.skills };
extraInfo.education = { ...extraInfo.education, ...newData.education };

const profile = {
  ...bio,
  ...extraInfo,
};

console.log(profile);

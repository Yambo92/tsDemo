enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "hallon",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};
let faveriteActivities: string[];
faveriteActivities = ["Sports"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}


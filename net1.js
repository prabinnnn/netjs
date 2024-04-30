// const roleA = ["admin", "manger"];
// const roleB = ["user", "recepitation"];
// const newRole = roleA.some((role) => roleB.includes(role));
// console.log(newRole);
javascript;

const people = [
  { name: "prabin", age: 30 },
  { name: "rabin", age: 20 },
  { name: "abin", age: 50 },
];

const checkage = people.sort((a, b) => {
  return a.age - b.age;
});

console.log(checkage);

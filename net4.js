const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
// const allCharacter = characters.map((character) => character.name);
// console.log(allCharacter);
// const allCharacter = characters.map((character) => character.height);
// console.log(allCharacter);
// const allCharacter = characters.map((character) => character.name.height);
// console.log(allCharacter);
const allCharacter = characters.map((character) => character.name[0]);
console.log(allCharacter);

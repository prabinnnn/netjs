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
// const allCharacter = characters.filter((characters) => characters.name >= 100);
// console.log(allCharacter);
// const allCharacter = characters.filter((characters) => characters.mass>= 40);
// console.log(allCharacter);
// const allCharacter = characters.filter((characters) => characters.mass >= 40);
// console.log(allCharacter);
// const maleCharacters = characters.filter(character => character.gender === "male");
// console.log(maleCharacters);
const maleCharacters = characters.filter(
  (character) => character.gender === "Female"
);
console.log(maleCharacters);

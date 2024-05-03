const name1 = "prabin is a teacher.he is teaching the book";
const newname = (str) => {
  if (str.length > 20) {
    return name1.slice(0, 20) + "......";
  } else {
    console.log("not valid");
  }
};
console.log(newname);

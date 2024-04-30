const car = {
  name: "murtii",
  model: 500,
  age: function () {
    console.log(this.model);
    return 2024 - this.model;
  },
};

console.log(car.age());

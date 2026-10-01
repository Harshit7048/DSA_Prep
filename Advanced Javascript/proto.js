// __proto__ has the power to set a object as a child or parent to other object

const person = {
  alive: true,
};

const musician = {
  plays: true,
};

musician.__proto__ = person;

// here we get true because we set the __proto__ of the musician to be person so it kinda looked up hte .alive when it didn't find it on the object itself
console.log(musician.alive);

const car = {
  doors: 2,
  seats: "gucci",
  get getMaterial() {
    return this.seats;
  },
  set setSeatMaterial(material) {
    this.seats = material;
  },
};

const newCar = {
  doors: 4,
};

Object.setPrototypeOf(newCar, car);

console.log(newCar.getMaterial);

newCar.setSeatMaterial = "vinyl";

console.log(newCar.getMaterial);

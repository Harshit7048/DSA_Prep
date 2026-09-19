function squashObject(obj) {
  let newObj = {};
  const generateFlatObject = (obj, parent) => {
    for (let key in obj) {
      const newParent =
        key === "" ? parent : parent === "" ? key : parent + "." + key;
      const value = obj[key];
      if (value !== null && typeof value === "object") {
        generateFlatObject(value, newParent);
      } else {
        newObj[newParent] = value;
      }
    }
  };

  generateFlatObject(obj, "");

  return newObj;
}

const obj1 = {
  a: "1",
  b: "2",
  c: {
    d: "3",
    e: {
      f: "val",
    },
  },
};

console.log(squashObject(obj1));

const readers = [];

for (var index = 0; index < 3; index++) {
  readers.push(() => index * 2);
}

console.log(readers.map((read) => read()).join(", "));

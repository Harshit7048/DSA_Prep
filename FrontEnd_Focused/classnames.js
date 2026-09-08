function classNames(...args) {
  return args
    .flat(Infinity) // Flatten all arrays
    .filter(Boolean) // Remove falsy values
    .map((item) => {
      // Handle objects
      if (typeof item === "object" && !Array.isArray(item)) {
        return Object.keys(item).filter((key) => item[key]);
      }
      return item;
    })
    .flat()
    .filter(Boolean)
    .join(" ");
}

console.log(classNames("a", ["b", { c: true, d: false }]));

function classNamesUpdated(...args) {
  return args
    .reduce((acc, arg) => {
      if (!arg) return acc;

      if (typeof arg === "string") {
        acc.push(arg);
      } else if (Array.isArray(arg)) {
        acc.push(...classNamesUpdated(...arg));
      } else if (typeof arg === "object") {
        acc.push(...Object.keys(arg).filter((key) => arg[key]));
      }

      return acc;
    }, [])
    .join(" ");
}
console.log(classNamesUpdated("a", ["b", { c: true, d: false }]));

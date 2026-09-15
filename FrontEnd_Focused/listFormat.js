function listFormat(itmes, { sorted, length, unique } = {}) {
  // this is remove the empty values
  let list = itmes.filter(Boolean);

  if (unique) list = [...new Set(list)];

  if (sorted) list = list.sort();

  if (length > 0 && list.length > length) {
    let n = list.length - length;
    list = [...list.slice(0, length), `${n} other ${n > 1 ? "s" : ""}`];
  }

  const last = list.pop();

  return list.length
    ? `${list.join(", ")}${list.length > 1 ? "," : ""} and ${last}`
    : last || "";
}

console.log(
  listFormat(["bob", "bobo", "bob", "hell", "munna", "", "guddu"], {
    sorted: true,
    length: 3,
  }),
);

// items                       = ["Bob","Ben","Tim","Jane","John"]
// filter(Boolean) → list      = ["Bob","Ben","Tim","Jane","John"]
// unique falsy → skip
// sorted falsy → skip
// length undefined → length > 0 is false → skip truncation
// last = list.pop()           = "John"      list = ["Bob","Ben","Tim","Jane"]
// list.length = 4 → truthy
// return "Bob, Ben, Tim, Jane and John"  ✓

console.log("group anagram");

let arrMain = ["act", "pots", "tops", "cat", "stop", "hat"];

function groupAnagram(strs) {
  let sorted = strs.map((ele) => ele.split("").sort().join(""));

  let map = {};

  for (let i = 0; i < sorted.length; i++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [strs[i]];
    } else {
      map[sorted[i]].push(strs[i]);
    }
  }
  return Object.values(map);
}

groupAnagram(arrMain);

// This question is get solved by Map ( also known as has map )

// So this question was trick at first seeing but with mao it became easy , we first sorted the each values into a duplicate array , then for each specific value we traversed the array and then pushed the values that matched the keys

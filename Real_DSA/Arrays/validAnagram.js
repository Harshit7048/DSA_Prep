// Anagram means that both the strings consist of same characters

function validAnagram(s1, s2) {
  let arr1 = s1.split("").sort();
  let arr2 = s2.split("").sort();

  let check = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i] && arr1.length === arr2.length) {
      console.log(arr1[i], arr2[i]);
      check = true;
    } else {
      console.log(arr1[i], arr2[i]);
      return false;
    }
  }

  return check;
}

let s1 = "xxd";
let s2 = "cxb";

console.log(validAnagram(s1, s2));

console.log("Encode");

let s = ["hello", "my", "love", "do", "you", "missed", "me?"];

function encode(strs) {
  let newStr = "";

  for (let i = 0; i < strs.length; i++) {
    // console.log(strs[i], strs[i].length);
    newStr += `${strs[i].length}#${strs[i]}`;
  }

  return newStr;
}

console.log(encode(s));

let enStr = encode(s);

console.log("decode");

function decode(str) {
  let res = [];
  let i = 0;

  while (i < str.length) {
    // 1. Find the position of the '#' delimiter starting from 'i'
    let j = i;
    while (str[j] !== "#") {
      j++;
    }

    // 2. Extract the length of the string (handles multi-digit lengths like "12#")
    let length = parseInt(str.substring(i, j));

    // 3. Extract the actual word using the length
    let word = str.substring(j + 1, j + 1 + length);
    res.push(word);

    // 4. Move pointer 'i' to the start of the next encoded chunk
    i = j + 1 + length;
  }

  return res;
}

console.log(decode(enStr));

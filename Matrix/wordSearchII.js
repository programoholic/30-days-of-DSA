function wordSearch(matrix, words) {
  if (matrix.length === 0) return [];
  // if (matrix.length === 1 && matrix[0].length === 1) {
  //   return matrix[0][0] === words[0];
  // }
  let map = new Map();
  let charMap = new Map();
  for (let k = 0; k < words.length; k++) {
    charMap.set(words[k].charAt(0), words[k].charAt(0));
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let char = charMap.get(matrix[i][j].charAt(0));
      if (char) {
        let item = map.get(char);
        if (item) {
          map.set(char, [...item, [i, j]]);
        } else {
          map.set(char, [[i, j]]);
        }
      }
    }
  }
  console.log({ map });
  let result = []; //new Set();
  for (let k = 0; k < words.length; k++) {
    const s = map.get(words[k].charAt(0));
    console.log({ s, word: words[k] });
    if (s === undefined) continue;
    for (let i = 0; i < s.length; i++) {
      const [row, col] = s[i];
      console.log({ s, word: words[k], col, row });
      let a = dfs(clone2D(matrix), row, col, words[k], 0, result);
      console.log(a);
    }
  }
  console.log(result);
  return result;
}

function dfs(matrix, row, col, word, index, result) {
  // console.log({ word, row, col, index });
  if (
    row < 0 ||
    row > matrix.length - 1 ||
    col > matrix[0].length - 1 ||
    col < 0
  ) {
    return false;
  }

  if (matrix[row][col] === word.charAt(index)) {
    matrix[row][col] = "$";

    if (index === word.length - 1) {
      console.log("found  : ", { word, row, col, index });
      result.push(word);
      return true;
    } else if (
      dfs(matrix, row + 1, col, word, index + 1, result) ||
      dfs(matrix, row - 1, col, word, index + 1, result) ||
      dfs(matrix, row, col - 1, word, index + 1, result) ||
      dfs(matrix, row, col + 1, word, index + 1, result)
    ) {
      return true;
    }
  } else {
    return false;
  }
  return false;
}
function clone2D(a) {
  return a.map((o) => [...o]);
}

let board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];

let wordArr = ["oath", "pea", "eat", "rain"];
let b = [
  ["a", "b", "c"],
  ["a", "e", "d"],
  ["a", "f", "g"],
];
let w = ["eaabcdgfa"]; //["abcdefg", "gfedcbaaa", "eaabcdgfa", "befa", "dgc", "ade"];
wordSearch(b, w);

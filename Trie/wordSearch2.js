const { Trie } = require("./trie");

console.log(Trie);

function findWords(matrix, words) {
  const t = new Trie();
  let result = [];
  let currentNode = t.root;
  words.forEach((item) => t.insert(item));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const char = matrix[i][j];
      const index = t.getIndex(char.toLowerCase());
      if (!currentNode.children[index]) {
        continue;
      }
      dfs(currentNode, i, j, matrix, result, "");
    }
  }
  console.log("result : ", result);
  return result;
}
function getIndex(key) {
  return key.charCodeAt(0) - "a".charCodeAt(0);
}
function dfs(node, row, col, grid, result, word) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    !grid[row][col]
  ) {
    return;
  }
  if (node.isEndWord) {
    result.push(word);
    node.isEndWord = false;
  }
  let char = grid[row][col];
  //   console.log("char : ", { char, row, col });
  const index = getIndex(char.toLowerCase());
  let child = node.children[index];
  if (child !== null) {
    word += char;
    grid[row][col] = null;
    dfs(node.children[index], row, col + 1, grid, result, word);
    dfs(node.children[index], row, col - 1, grid, result, word);
    dfs(node.children[index], row + 1, col, grid, result, word);
    dfs(node.children[index], row - 1, col, grid, result, word);
    grid[row][col] = char;
    if (child.isEndWord) {
      result.push(word);
      child.isEndWord = false;
    }
  }
}

let matrix = [
  ["B", "S", "L", "I", "M"],
  ["R", "I", "L", "M", "O"],
  ["O", "L", "I", "E", "O"],
  ["R", "Y", "I", "L", "N"],
  ["B", "U", "N", "E", "C"],
];
let m = [["a"]];
let w = ["BUY", "SLICK", "SLIME", "ONLINE", "NOW"];
findWords(m, ["a"]);

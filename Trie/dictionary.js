//https://leetcode.com/problems/design-add-and-search-words-data-structure/description/

class TrieNode {
  constructor(char) {
    this.char = char;
    this.children = [];
    this.isEndWord = false;
  }

  markAsLeaf() {
    this.isEndWord = true;
  }
  unMarkAsLeaf() {
    this.isEndWord = false;
  }
}

var WordDictionary = function () {
  this.root = new TrieNode("");
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  const getIndex = (key) => {
    return key.charCodeAt(0) - "a".charCodeAt(0);
  };

  let currentNode = this.root;
  for (let key of word) {
    const index = getIndex(key);
    if (!currentNode.children[index]) {
      currentNode.children[index] = new TrieNode(key);
    }
    currentNode = currentNode.children[index];
  }
  currentNode.markAsLeaf();

  return false;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (!word) return false;

  let currentNode = this.root;

  return searchHelper(currentNode, 0, word);
};

function searchHelper(node, position, word) {
  // incase we found the word
  if (position === word.length && node.isEndWord) {
    return true;
  }

  // incase we reach the leaf node before word is searched
  if (node.children.length == 0) {
    return false;
  }

  // incase search char is .
  if (word[position] === ".") {
    // loop through each child
    for (let child of node.children) {
      if (child && searchHelper(child, position + 1, word)) {
        return true;
      }
    }
  }

  const index = node.children.findIndex((item) => {
    return item && item.char === word[position];
  });
  // in acase the word is not found
  if (index === -1) return false;
  return searchHelper(node.children[index], position + 1, word);
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

var obj = new WordDictionary();
var param_2;
obj.addWord("word");
obj.addWord("at");
obj.addWord("and");
obj.addWord("an");
obj.addWord("add");

param_2 = obj.search("a");
console.log("w", param_2);
param_2 = obj.search(".at");
console.log("w", param_2);
obj.addWord("bat");
param_2 = obj.search(".at");
console.log("w", param_2);
param_2 = obj.search("an.");
console.log("w", param_2);
param_2 = obj.search("a.d.");
console.log("w", param_2);
param_2 = obj.search("b.");
console.log("w", param_2);
param_2 = obj.search("a.d");
console.log("w", param_2);

var param_2 = obj.search("w");
console.log("w", param_2);

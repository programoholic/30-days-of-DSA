/**
 * @param {number[]} nums
 * @return {number}
 */

class TrieNode {
  constructor(char) {
    this.char = char;
    this.children = [];
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(0);
  }

  getIndex(t) {
    return t.charCodeAt(0) - "a".charCodeAt(0);
  }
  insert(val) {
    if (!val) {
      return null;
    }
    let index = 30;

    let currentNode = this.root;

    while (index >= 0) {
      let mask = 1 << index;
      //   console.log("mask :", mask);
      //   console.log("mask n val :", mask & val);

      let bit = (mask & val) > 0 ? 1 : 0;
      console.log("bit : ", bit);
      if (!currentNode.children[bit]) {
        currentNode.children[bit] = new TrieNode(bit);
      }
      currentNode = currentNode.children[bit];
      index--;
    }
    console.log("end of iteration");
    // for (let i = 0; i < word.length; i++) {
    //   const val = word[i];
    //   if (!currentNode.children[val]) {
    //     currentNode.children[val] = new TrieNode(word[i]);
    //   }
    //   currentNode = currentNode.children[val];
    // }
    // currentNode.isWord = true;
  }

  getMaxXor(value) {
    let ans = 0;
    let currentNode = this.root;
    let index = 30;

    while (index >= 0) {
      let mask = 1 << index;
      let bit = (value & mask) > 0 ? 1 : 0;
      //   console.log("mask : ", mask, bit);

      if (bit == 0) {
        if (currentNode.children[0]) {
          currentNode = currentNode.children[0];
        } else {
          currentNode = currentNode.children[1];
          ans |= mask;
        }
      } else {
        if (currentNode.children[1]) {
          currentNode = currentNode.children[1];
          ans |= mask;
        } else {
          currentNode = currentNode.children[0];
        }
      }
      index--;
    }
    return ans;
  }
}

var findMaximumXOR = function (nums) {
  const trie = new Trie();
  nums.forEach((item) => trie.insert(item));
  console.log("trie : ", trie);
  let max = -Infinity;
  for (let num of nums) {
    let find = Number.MAX_SAFE_INTEGER ^ num;
    console.log("find  : ", find);
    let b = trie.getMaxXor(find);
    console.log("b : ", b);
    max = Math.max(max, num ^ b);
    console.log("max value : ", max);
  }
  console.log("final max : ", max);
  return max;
};

findMaximumXOR([3, 10, 5, 25, 2, 8]);

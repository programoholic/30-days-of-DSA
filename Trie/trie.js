class TrieNode {
  constructor(char) {
    this.children = [];
    for (var i = 0; i < 26; i++) {
      //Total # of English Alphabets
      this.children[i] = null;
    }
    this.isEndWord = false; //will be true if the node represents the end of word
    this.char = char; //To store the value of a particular key
  }
  //Function to mark the currentNode as Leaf
  markAsLeaf() {
    this.isEndWord = true;
  }

  //Function to unMark the currentNode as Leaf
  unMarkAsLeaf() {
    this.isEndWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(""); //Root node
  }

  getIndex(t) {
    return t.charCodeAt(0) - "a".charCodeAt(0);
  }
  //Function to insert a key in the Trie
  insert(key) {
    if (key == null) {
      return;
    }

    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    //Store the character index
    //Iterate the trie with the given character index,
    //If the index points to null
    //simply create a TrieNode and go down a level
    for (let level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);

      if (currentNode.children[index] == null) {
        currentNode.children[index] = new TrieNode(key[level]);
        console.log(String(key[level]) + " inserted");
      }
      currentNode = currentNode.children[index];
    }

    //Mark the end character as leaf node
    currentNode.markAsLeaf();
    console.log("'" + key + "' inserted");
  }

  //Function to search a given key in Trie
  search(key) {
    let currentNode = this.root;
    for (let i = 0; i < key.length; i++) {
      const index = this.getIndex(key[i]);
      if (!currentNode.children[index]) {
        return false;
      }
      currentNode = currentNode.children[index];
    }

    return currentNode.isEndWord;
  }
  delete(key) {
    return;
  }
}
// Input keys (use only 'a' through 'z' and lower case)
// let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "abc"];
// let t = new Trie();
// console.log("Keys to insert: ");
// console.log(keys);
// //Construct Trie
// for (let i = 0; i < keys.length; i++) {
//   t.insert(keys[i]);
// }

// t.search("there");

// console.log("inserted  L L ", t);
// class Trie {
//   constructor() {
//     this.root = {};
//   }

//   insert(word) {
//     let current = this.root;
//     for (let i = 0; i < word.length; i++) {
//       let char = word[i];
//       if (!current[char]) {
//         current[char] = {};
//       }
//       current = current[char];
//     }
//     current.isWord = true;
//   }

//   search(word) {
//     let current = this.root;
//     for (let i = 0; i < word.length; i++) {
//       let char = word[i];
//       if (!current[char]) {
//         return false;
//       }
//       current = current[char];
//     }
//     return current.isWord;
//   }

//   startsWith(prefix) {
//     let current = this.root;
//     for (let i = 0; i < prefix.length; i++) {
//       let char = prefix[i];
//       if (!current[char]) {
//         return false;
//       }
//       current = current[char];
//     }
//     return true;
//   }
// }
module.exports = { Trie };

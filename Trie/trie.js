class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!current[char]) {
        current[char] = {};
      }
      current = current[char];
    }
    current.isWord = true;
  }

  search(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!current[char]) {
        return false;
      }
      current = current[char];
    }
    return current.isWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      if (!current[char]) {
        return false;
      }
      current = current[char];
    }
    return true;
  }
}

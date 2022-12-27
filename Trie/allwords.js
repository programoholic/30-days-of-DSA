// Template for Node class

class TrieNode {
  constructor(char) {
    // this.searchWords = [];
    // this.children = {};
    this.char = char;
    this.children = [];
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode("");
  }

  getIndex(t) {
    return t.charCodeAt(0) - "a".charCodeAt(0);
  }
  insert(word) {
    if (!word) {
      return null;
    }
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const index = this.getIndex(word[i]);
      if (!currentNode.children[index]) {
        currentNode.children[index] = new TrieNode(word[i]);
      }
      currentNode = currentNode.children[index];
    }
    currentNode.isWord = true;
  }

  searchPrefix(prefix) {
    if (!prefix) return false;

    let currentNode = this.root;
    let chars = [];
    for (let i = 0; i < prefix.length; i++) {
      const index = this.getIndex(prefix[i]);
      if (!currentNode.children[index]) {
        return [];
      }
      chars.push(currentNode.children[index].char);
      currentNode = currentNode.children[index];
    }
    console.log("prefix", chars);

    const t = new Set();

    if (currentNode.isWord) {
      t.add(chars.join(""));
    }

    for (let child of currentNode.children) {
      if (!child) continue;
      getWord(child, chars.join("") + child.char, t);
    }
    return [...t];
  }
}

function getWord(node, prefix, r) {
  let p = prefix;
  if (node.isWord) {
    r.add(prefix);
  }
  for (let child of node.children) {
    p = prefix;
    if (child) {
      p = getWord(child, p + child.char, r);
      if (child.isWord && r.size < 3) {
        r.add(p);
      }
    }
  }
  return prefix;
}

function suggestedProducts(products, searchWord) {
  // your code will replace this placeholder return statement
  let trie = new Trie();
  products.sort((a, b) => a.localeCompare(b));
  products.forEach((p) => trie.insert(p));
  let result = [];
  let prev = "";
  for (let char of searchWord) {
    prev += char;
    let t = trie.searchPrefix(prev);
    result.push(t);
  }

  console.log("res : ", result);
  return result;
}

suggestedProducts(
  ["mobile", "mouse", "moneypot", "monitor", "mousepad", "anis"],
  "mousepad"
);

var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  let pset = new Set();
  let nset = new Set();

  positive_feedback.forEach((item) => pset.add(item));
  negative_feedback.forEach((item) => nset.add(item));
  const maxHeap = new MaxPriorityQueue({ priority: (bid) => bid.value });

  for (let i = 0; i < report.length; i++) {
    let score = 0;
    let w = report[i].split("");
    for (let wrd of w) {
      if (pset.has(wrd)) {
        score += 3;
      } else if (nset.has(wrd)) {
        score -= 1;
      }
    }
    maxHeap.enqueue({ id: student_id[i], value: score });
  }

  let result = [];

  while (k-- > 0) {
    let item = maxHeap.dequeue();
    result.push(item.element.id);
  }
  return result;
};

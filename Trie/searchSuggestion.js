// Template for Node class

class TrieNode {
  constructor() {
    this.searchWords = [];
    this.children = {};
  }
}

function printArray(arr) {
  let result = "[";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object") {
      result += printArray(arr[i]);
    } else {
      result += `'${arr[i]}'`;
    }
    if (i != arr.length - 1) result += ", ";
  }
  return (result += "]");
}

function printStringWithMarkers(strn, pValue) {
  return (
    strn.substring(0, pValue) +
    "«" +
    strn[pValue] +
    "»" +
    strn.substring(pValue + 1, strn.length)
  );
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    // inserting string in a trie
    this.insert = function (data) {
      let node = this.root;
      for (let cIdx = 0; cIdx < data.length; cIdx++) {
        let char = data[cIdx];
        console.log(`\t\t${printStringWithMarkers(data, cIdx)}`);
        // Create a new node if char does not exist in children dictionary
        if (!Object.keys(node.children).includes(char)) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
        if (node.searchWords.length < 3) {
          node.searchWords.push(data);
          console.log(
            `\t\tUpdated list for substring' ${data.substring(0, cIdx + 1)}':`,
            node.searchWords
          );
        } else {
          console.log(`\t\tLength of search list for '${char}' = 3`);
          console.log(`\t\tSo we won't append this word to it`);
        }
        console.log(" ");
      }
    };

    this.search = function (word) {
      let result = [],
        node = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        console.log(`\t\t${printStringWithMarkers(word, i)}`);
        console.log(`\t\tCurrent node's children:`, Object.keys(node.children));
        if (!Object.keys(node.children).includes(char)) {
          console.log(`\t\t'${char}' is not present in node's children`);
          console.log(
            "\t\tHence, no further strings can be matched.",
            "We'll append empty lists for the\n\t\tremaining characters of the searched word to the result"
          );
          let temp = Array(word.length - i).fill([]);
          console.log("\t\tResult:", [...result, ...temp]);
          return [...result, ...temp];
        } else {
          // if it exists, append the item in result array
          console.log(`\t\t'${char}' is present in node's children.`);
          node = node.children[char];
          console.log("\t\t\tUpdated current node:", char);
          console.log(`\t\t\t${char}'s list:`, node.searchWords);
          console.log(`\t\tWe'll append ${char}'s search list to our result`);
          result.push([...node.searchWords]);
          console.log("\t\tResult:", result);
          console.log(" ");
        }
      }
      return result;
    };
  }
}

function suggestedProducts(products, searchWord) {
  // Sorting the products list
  products.sort();
  let trie = new Trie();
  // Insert each products string in Trie
  console.log("\n\tInserting nodes in the trie");
  products.forEach((x) => {
    console.log(`\t\tInserting: '${x}'`);
    trie.insert(x);
  });
  console.log(`\tSearching for '${searchWord}'`);
  return trie.search(searchWord);
}

// Driver code
function main() {
  let products = [
      "bat",
      "bag",
      "bassinet",
      "bread",
      "cable",
      "table",
      "tree",
      "tarp",
    ],
    searchWordList = ["ba", "in", "ca", "t"];

  for (let i = 0; i < searchWordList.length; i++) {
    console.log(i + 1 + ".\tProducts:", printArray(products));
    console.log(`\tSearch keyword: '${searchWordList[i]}'`);
    console.log(
      `\tSuggested Products:`,
      suggestedProducts(products, searchWordList[i])
    );
    console.log("-".repeat(100));
  }
}

main();

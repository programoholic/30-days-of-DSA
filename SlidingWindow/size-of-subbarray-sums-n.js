// given an array of size n, find all the substrings that sums to n

// sliding window

function findSubstrings(array, n) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      sum += array[j];
      if (sum === n) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
// print all subpath of a tree

function printTreePath(root) {
  if (!root) {
    return;
  }
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    console.log(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
}

// Flash Card System Design

// Platform : Web

// Features:
// 1. Card can be flipped -- inscope
// 2. next and prev click action -- inscope
// 3. localization
// 4. Infinite scrolling
// 5. API integration -- inscope

// BE - API:
// GET API
// Request: api/flash-card/data
// Response: [{question: 'what is name?', ans: 'Pramod'}]

// Structure:
// Will be using react components
// Componennts:
// Coponents
// - FlashCard (parent)
// - Card (child)
// - Arrows (child)
// helpers
// - apiHelper.js (axios for API calls)

// polyfill for Array.map
Array.prototype.customMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

let it = [1, 2, 3, 4].customMap((x) => x * 2);
console.log(it);

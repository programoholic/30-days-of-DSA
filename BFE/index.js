function flat(arr, depth = 1) {
  // your imeplementation here
  if (depth === 0) return arr;
  let result = arr.map((item) => {
    console.log({ item });
    if (Array.isArray(item)) {
      console.log("yes Array");
      return flat(item, depth);
    } else {
      return item;
    }
  });
  console.log({ result });
  return result;
}

console.log(flattenArray([1, [2], [3, [4]]], -1));

// flatten array till depth k

function flattenArray(arr, depth = 1) {
  if (depth === 0) return arr;
  let result = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flattenArray(item, depth - 1));
    } else {
      return acc.concat(item);
    }
  }, []);
  return result;
}

function DFS(graph, start) {
  let visited = {};
  let stack = [start];
  let result = [];
  while (stack.length) {
    let node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      result.push(node);
      stack = stack.concat(graph[node]);
    }
  }
  return result;
}

//

var longestCommonPrefix = function (strs) {
  let minItem = strs[0];
  strs.forEach((item) => {
    if (item.length < minItem.length) {
      minItem = item;
    }
  });

  let long = "";

  while (minItem.length) {
    if (isEqual(strs, minItem)) {
      return minItem;
    } else {
      minItem = minItem.substr(0, minItem.length - 1);
    }
  }
  return long;
};
function isEqual(strs, pattern) {
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].substr(0, pattern.length) !== pattern) {
      return false;
    }
  }
  return true;
}
longestCommonPrefix(["flower", "flow", "flight"]);

//.Given an unsorted array arr, return a boolean array of same size where res[i] indicates if arr[i] is searchable through binary search. The time complexity should be less than n log n, where n is the length of arr

[1, 2, 3, 4, 5, 6, 7];

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

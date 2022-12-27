// const numberOfUniqueCharacters = (str) => {
//   return new Set(str.split("")).size;
// };

// console.log(numberOfUniqueCharacters("hello"));
// console.log(numberOfUniqueCharacters("abccde"));
// console.log(numberOfUniqueCharacters("aaa"));

function typeCheck(obj) {
  return new Proxy(obj, validator);
}

let validator = {
  set(obj, prop, value) {
    const [, type] = prop.split("_");
    if (type === "string") {
      if (typeof value !== "string") {
        throw new Error("Invalid type");
      }
    }
    if (type === "int") {
      if (!Number.isInteger(value)) {
        throw new Error("Invalid type");
      }
    }
    if (type === "float") {
      if (Number.isInteger(value)) {
        throw new Error("Invalid type");
      }
    }
    if (type === "number") {
      if (typeof value !== "number") {
        throw new Error("Invalid type");
      }
    }
    if (type === "boolean") {
      if (typeof value !== "boolean") {
        throw new Error("Invalid type");
      }
    }
    obj[prop] = value;

    // Indicate success
    return true;
  },
  get(obj, prop) {
    console.log("get", prop, obj);
  },
};

const obj = {
  age_int: 2.5,
  name_string: "Adam",
  job: null,
};
// const validatingObject = typeCheck(obj);
// validatingObject.age_float = 2; // Throws error
// validatingObject.age_int = 2;
// validatingObject.job = 10; //"fireman";
// validatingObject.address_string = "20"; // Throws error
// validatingObject.isFTE_boolean = "true"; // Throws error

function changeString(riddle) {
  for (let i = 0; i < riddle.length; i++) {
    if (riddle[i] === "?") {
      let repeat = "";
      if (riddle[i - 1] !== "a" && riddle[i + 1] !== "a") repeat = "a";
      else if (riddle[i - 1] !== "b" && riddle[i + 1] !== "b") repeat = "b";
      else repeat = "c";
      riddle = riddle.slice(0, i) + repeat + riddle.slice(i + 1);
    }
  }
  return riddle;
}

// function changeStrings(S) {
//   // Store the given String
//   let s = S.split("");

//   let N = S.length;

//   // If the first character is '?'
//   if (s[0] == "?") {
//     s[0] = "a";
//     if (s[0] == s[1]) {
//       s[0] = String.fromCharCode(s[0].charCodeAt(0) + 1);
//     }
//   }

//   // Traverse the String [1, N - 1]
//   for (let i = 1; i < N - 1; i++) {
//     // If the current
//     // character is '?'
//     if (s[i] == "?") {
//       // Change the character
//       s[i] = "a";

//       // Check equality with
//       // the previous character
//       if (s[i] == s[i - 1]) {
//         s[i] = String.fromCharCode(s[i].charCodeAt(0) + 1);
//       }

//       // Check equality with
//       // the next character
//       if (s[i] == s[i + 1]) {
//         s[i] = String.fromCharCode(s[i].charCodeAt(0) + 1);
//       }

//       // Check equality with
//       // the previous character
//       if (s[i] == s[i - 1]) {
//         s[i] = String.fromCharCode(s[i].charCodeAt(0) + 1);
//       }
//     }
//   }

//   // If the last character is '?'
//   if (s[N - 1] == "?") {
//     // Change character
//     s[N - 1] = "a";

//     // Check with previous
//     // character
//     if (s[N - 1] == s[N - 2]) {
//       s[N - 1]++;
//     }
//   }

//   let ans = "";

//   for (let i = 0; i < s.length; i++) {
//     ans += s[i];
//   }

//   // Return the resultant String
//   return ans;
// }
// console.log(changeString("ab?ac?"));

("use strict");

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");

const emails = [
  "me@zalando.de",
  "me.abc@zalando.de",
  "boss@zalando.de",
  "you@google.de",
  "foo.bar@google.com",
  "abc@yahoo.in",
  "abc@anything.at.google.com", // { 'com' : { 'google': { 'at': {'anything': 'abc' }}}}}
];

function getDomainTree(emailArr = []) {
  const result = {};

  for (let email of emailArr) {
    const [name, site, domain] = getDomainAndName(email);
    const siteObj = constructSite(site);
    if (!result[domain]) {
      result[domain] = {};
    }
    if (!result[domain][site]) {
      result[domain][site] = {};
    }
    result[domain][site] = name;
  }
  console.log({ result });

  return result;
}

function getDomainAndName(email = "") {
  const [name, rest] = email.split("@");
  const subd = rest.split(".");
  console.log(subd, subd.length - 1);
  const len = subd.length - 1;
  const domain = subd[len];
  return [name, subd.slice(0, subd.length - 1).join("."), domain];
}

function constructSite(site) {
  let result = {};
  let s = site.split(".");
  let prev = null;
  for (let k of s) {
    if (!prev) {
      result[k] = {};
      prev = k;
    } else {
      result[k] = prev;
    }
  }
  console.log(result);
  return result;
}

// constructSite("anything.at.google");

// getDomainTree(emails);

//. abc@anything.at.google.com

// { 'de' : { 'google': { 'you': {}}}}
// { 'com' : { 'google': { 'at': {'anything': 'abc' }}}}}}

var checkXMatrix = function (grid) {
  let m = grid.length - 1;
  let n = grid[0].length - 1;
  console.log("m n : ", m, n);
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j) {
        if (grid[i][j] == 0) return false;
      } else if (j == n - i) {
        if (grid[i][j] == 0) return false;
      } else if (grid[i][j] !== 0) return false;
    }
  }
  return true;
};

checkXMatrix([
  [2, 0, 0, 1],
  [0, 3, 1, 0],
  [0, 5, 2, 0],
  [4, 0, 0, 2],
]);

function distinctIds(arr, n, mi) {
  var m = new Map();
  var v = [];
  var count = 0;

  // Store the occurrence of ids
  for (var i = 0; i < n; i++) {
    if (m.has(arr[i])) m.set(arr[i], m.get(arr[i]) + 1);
    else m.set(arr[i], 1);
  }

  // Store into the vector second as first and vice-versa
  m.forEach((value, key) => {
    v.push([value, key]);
  });

  // Sort the vector
  v.sort();

  var size = v.length;

  // Start removing elements from the beginning
  for (var i = 0; i < size; i++) {
    // Remove if current value is less than
    // or equal to mi
    if (v[i][0] <= mi) {
      mi -= v[i][0];
      count++;
    }

    // Return the remaining size
    else return size - count;
  }
  return size - count;
}

const arr = [6, 1, 2, 3, 1, 2, 2];
console.log("******* : ", distinctIds(arr, 3));

function deleteProducts(ids, m) {
  // Write your code here

  const frqMap = {};

  for (let id of ids) {
    if (frqMap[id] === undefined) {
      frqMap[id] = 1;
    } else {
      frqMap[id]++;
    }
  }
  const arr = Object.keys(frqMap).map((key) => {
    return { id: key, count: frqMap[key] };
  });

  arr.sort((a, b) => a.count - b.count);
  let len = arr.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i].count <= m) {
      m -= arr[i].count;
      count++;
    } else return len - count;
  }

  return len - count;
}

(() => {
  const rawData = [
    [7, 0, 0, 1, 6, 1],
    [8, 2, 5, 1, 7],
    [5, 4, 1, 4],
    [2, 2, 0],
  ];

  const z = rawData.map((item, index) => {
    console.log({ indexx: index + 1 });
    const x = [...Array(6 - item.length)].map((item) => {
      console.log("empty");
      return "";
    });
    const y = item.map((itm) => {
      console.log(itm);
      return itm;
    });
    return { x, y };
  });
  console.log("z", z);
})();

function solution(str = "") {
  let capsSet = new Set();
  let smallSet = new Set();

  for (let char of str) {
    if (char.toUpperCase() === char) {
      // caps
      capsSet.add(char);
    } else {
      // small
      smallSet.add(char);
    }
  }
  let sol = "";
  for (let char of str) {
    if (char.toUpperCase() === char) {
      // caps
      if (smallSet.has(char.toLowerCase())) {
        sol = char > sol ? char : sol;
      }
    } else {
      // small
      if (capsSet.has(char.toUpperCase())) {
        sol = char > sol ? char : sol;
      }
    }
  }

  return sol ? sol.toUpperCase() : "NO";
}

console.log(solution("ZaABbTZyY"));

var findWords = function (board, words) {
  let adj = {};
  for (let word of words) {
    let x = adj[word[0]];
    if (!x) {
      adj[word[0]] = [word];
    } else {
      let m = [...x, word];
      adj[word[0]] = m;
    }
  }

  let n = board.length;
  let m = board[0].length;
  let solution = [];
  let visited = get2DArray(n, m);

  console.log({ adj, visited });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let items = adj[board[i][j]];
      if (items) {
        g(i, j, board, items, 0, visited, solution);
      }
    }
  }
  return solution;
};

function g(start, end, board, words, index, visited, solution) {
  for (let word of words) {
    dfs(start, end, board, word, index, visited, solution);
  }
}

function dfs(start, end, board, word, index, visited, solution) {
  console.log({ solution, word, start, end, visited });
  if (
    start < 0 ||
    start >= board.length ||
    end < 0 ||
    end >= board[0].length ||
    visited[start][end] === 1
  ) {
    return;
  }
  if (word[index] !== board[start][end]) {
    return;
  }
  visited[start][end] = 1;
  if (index === word.length - 1) {
    solution.push(word);
    console.log({ solution, word });
    return true;
  }
  dfs(start + 1, end, board, word, index + 1, visited, solution);

  dfs(start - 1, end, board, word, index + 1, visited, solution);

  dfs(start, end + 1, board, word, index + 1, visited, solution);
  dfs(start, end - 1, board, word, index + 1, visited, solution);
}

function get2DArray(row, col) {
  return new Array(row).fill(new Array(col).fill(0));
}

findWords(
  [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"],
  ],
  ["oath"]
);

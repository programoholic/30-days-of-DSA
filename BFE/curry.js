function add(a) {
  return function (b) {
    return b ? add(a + b) : a;
  };
}

console.log(add(2)(3)(3)(10)());

// program to find the factorial of a number
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

// polyfill for array.map

Array.prototype.customMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
let a = [1, 2, 3, 4].customMap(function (item) {
  return item * 2;
});

console.log(a);

// get data from cookie

function getCookie(name) {
  let cookie = document.cookie.split(";");
  let cookieObj = {};
  cookie.forEach((item) => {
    let [key, value] = item.split("=");
    cookieObj[key.trim()] = value;
  });
  return cookieObj[name];
  doc;
}

// validate email with .delloitte
// regex to validate email
const regex = /[a-zA-Z0-9.!#$%&'*+\\=?^`{|}~-]+@\bdelloitte\b.\S+/;

function validateEmail(email) {
  return regex.test(email);
}

console.log(validateEmail("abc@delloitte.com"));

// function to validate if binary tree

function validateBinaryTree(node) {
  if (node === null) {
    return true;
  }
  if (node.left === null && node.right === null) {
    return true;
  }
  if (node.left !== null && node.right !== null) {
    return validateBinaryTree(node.left) && validateBinaryTree(node.right);
  }
  return false;
}

// debounce

// check if valid binary search tree

function isValidBST(node) {
  if (node === null) {
    return true;
  }
  if (node.left === null && node.right === null) {
    return true;
  }
  if (node.left !== null && node.right !== null) {
    return (
      isValidBST(node.left) &&
      isValidBST(node.right) &&
      node.left.val < node.val &&
      node.right.val > node.val
    );
  }
  return false;
}

/*
Given a fixed-length integer array arr, 
duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. 
Do the above modifications to the input array in place and do not return anything.
Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Link : https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
*/

function findDuplicate(arr) {
  let len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      // swap
      arr.splice(i + 1, 0, 0);
      i = i + 1;
    }
  }
  arr.splice(len, arr.length - len);
  return arr;
}

console.log("array is : ", findDuplicate([1, 2, 0, 4, 5, 0, 5, 8]));

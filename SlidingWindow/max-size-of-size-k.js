// given an array and size k , find the max sum of subarray of size k
// sliding window

function maxSumOfSubArray(array, k) {
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += array[i];
  }
  let sum = maxSum;
  for (let i = k; i < array.length; i++) {
    sum = sum - array[i - k] + array[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

console.log(maxSumOfSubArray([1, 2, 5, 4, 3, 9, 1], 3));

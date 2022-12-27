function sortCyclic(nums) {
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current == i) {
      continue;
    } else {
      let temp = nums[i];
      nums[i] = nums[current];
      nums[current] = temp;
    }
  }
  return nums;
}

console.log(sortCyclic([3, 2, 1, 0, 6]));

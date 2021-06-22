function mergeSort(array) {
    if (array.length < 2) {
      return array;
    }
    const mid = array.length / 2;
    const left = array.splice(0, mid);
    return merge(mergeSort(left), mergeSort(array));
  }
  function merge(arr1, arr2) {
    let i = 0,
      j = 0,
      k = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result[k++] = arr1[i++];
      } else {
        result[k++] = arr2[j++];
      }
    }
    for (; i < arr1.length; i++) {
      result[k++] = arr1[i];
    }
    for (; j < arr2.length; j++) {
      result[k++] = arr2[j];
    }
    return result;
  }
  
  const r = mergeSort([100, 100, 3, 6, 8,8, 10, 1, 2, 9]);
  console.log(r);
  
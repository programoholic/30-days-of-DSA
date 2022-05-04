// biggest number in the list

function biggest(list = []) {
  let biggest = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > biggest) {
      biggest = list[i];
    }
  }
  return biggest;
}

console.log(biggest([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

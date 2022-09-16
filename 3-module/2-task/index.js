function filterRange(arr, a, b) {
  let newArr = [];
  let res = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] >= a && arr[index] <= b) {
      newArr += arr[index];
      res = Array.from(String(newArr), Number)
    }
  }
  return res;

}

function camelize(myStr) {
let arr = myStr.split("");
let res;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].includes("-")) {
    arr.splice(i, 1);
    i--;
    arr[i + 1] = arr[i + 1].toUpperCase();
    res = arr.join("");
  }
}
return res || '';
}








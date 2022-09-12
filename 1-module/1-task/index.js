
// function factorial(n, result) {
//   result = result || 1;
//   if (!n) {
//     return result;
//   }
//   else {
//     return factorial(n - 1, result * n);
//   }
// }



function factorial(n, result) {
// if number is 0
if (n === 0) {
    return 1;
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    return(fact);
}}
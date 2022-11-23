function factorial(n) {
  // от vladislav658
  let factor = 1;
  if (n < 0) {
    alert("Факториала отрицательных чисел не бывает!");
  } else if (n == 0 || n == 1) {
    return (factor);	  
  } else {
    for ( i = 1; i <= n; i++) {
      factor = factor * i;
    }
    return (factor);
  }
}

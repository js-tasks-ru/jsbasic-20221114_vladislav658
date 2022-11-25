function factorial(n) {
  // от vladislav658
  let factor = 1;
  if (n == 0 || n == 1) {
    return factor;	  
  }
  for (i = 1; i <= n; i++) {
    factor = factor * i;
  }
  return factor;
}

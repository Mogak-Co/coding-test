  if (n === 0) {
    cnt[0]++;
    return 0;
  } else if (n === 1) {
    cnt[1]++;
    return 1;
  } else {
    return (fib[n] = fib[n - 1] + fib[n - 2]);
  }
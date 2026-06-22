/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
```
Example 1:
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.

Example 2:
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
*/

const mySqrt1 = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  let start = 0;
  let end = n;
  let ans = start;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (mid <= n / mid) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
};

const mySqrt2 = (n) => {
  let start = 0;
  let end = n;
  while (start <= end) {
    const mid = (start + end) >> 1;
    if (mid * mid <= n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
};

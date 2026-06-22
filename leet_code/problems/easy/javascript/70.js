/*
You are climbing a staircase.It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

const climbStairs1 = (n) => {
  if (n <= 2) return n;
  let prev2 = 1;
  let prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const current = prev2 + prev1;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
};

const climbStairs2 = (n) => {
  let [prev1, prev2] = [1, 1];
  for (let i = 2; i <= n; i++) {
    [prev1, prev2] = [prev2, prev1 + prev2];
  }
  return prev2;
};

const stairs = 5;
const resp1 = climbStairs1(stairs);
const resp2 = climbStairs2(stairs);
console.log(resp1);
console.log(resp2);

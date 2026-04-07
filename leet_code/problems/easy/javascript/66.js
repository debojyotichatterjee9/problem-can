/*
 You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

 Increment the large integer by one and return the resulting array of digits.

 Example 1:
 Input: digits = [1,2,3]
 Output: [1,2,4]
 Explanation: The array represents the integer 123.
 Incrementing by one gives 123 + 1 = 124.
 Thus, the result should be [1,2,4].

 Example 2:
 Input: digits = [4,3,2,1]
 Output: [4,3,2,2]
 Explanation: The array represents the integer 4321.
 Incrementing by one gives 4321 + 1 = 4322.
 Thus, the result should be [4,3,2,2].

 Example 3:
 Input: digits = [9]
 Output: [1,0]
 Explanation: The array represents the integer 9.
 Incrementing by one gives 9 + 1 = 10.
 Thus, the result should be [1,0].
 */

const plusOne1 = (digits) => {
  let carry = 1;
  for (i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }
  if (carry === 1) {
    /*
    After the loop, if a carry of 1 remains
    (meaning we had a number like 999), we insert
    a 1 at the beginning using unshift.
    */
    digits.unshift(carry);
  }
  return digits;
};

const plusOne2 = (digits) => {
  for (i = digits.length - 1; i >= 0; i++) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
    return [1, ...digits];
  }
};

const digits1 = [4, 3, 2, 1];
const digits2 = [9];
const resp1 = plusOne2(digits1);
const resp2 = plusOne2(digits2);
console.log(resp1);
console.log(resp2);

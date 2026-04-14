/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
*/

// Solution 1:
const addBinary1 = (a, b) => {
  let result = [];
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    const digitA = i >= 0 ? a[i--] - "0" : 0; // - '0' basically convrts to integer
    const digitB = j >= 0 ? b[j--] - "0" : 0;
    const sum = digitA + digitB + carry;
    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  }
  return result.reverse().join("");
};

// Solution 2:
const addBinary2 = (a, b) => {
  const result = [];
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i], 10) : 0;
    const digitB = j >= 0 ? parseInt(b[j], 10) : 0;

    const sum = digitA + digitB + carry;
    result.unshift(sum % 2);
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }
  return result.join("");
};

const addBinary3 = (a, b) => {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

const a = "11";
const b = "1";
const c = "1010";
const d = "1011";

const respAB1 = addBinary1(a, b);
console.log(respAB1);
const respCD1 = addBinary1(c, d);
console.log(respCD1);

const respAB2 = addBinary2(a, b);
console.log(respAB2);
const respCD2 = addBinary2(c, d);
console.log(respCD2);

const respAB3 = addBinary3(a, b);
console.log(respAB3);
const respCD3 = addBinary3(c, d);
console.log(respCD3);

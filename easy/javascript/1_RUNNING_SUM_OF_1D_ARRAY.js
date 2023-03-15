/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0; let finalArr = []
    nums.forEach(el => {
        sum=sum+el;
        finalArr.push(sum)
    });
return finalArr;
};
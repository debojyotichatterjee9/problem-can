const arr1 = [1, 4, 20, 3, 10, 5];
const SUM1 = 33;
const arr2 = [15, 2, 4, 8, 5, 10, 23];
const SUM2 = 21;

// Solution 1:

const findSubArrayWithSum = (arr, sum) => {
    const arrayLen = arr.length;
    for (let i = 0; i < arrayLen; i++) {
        let currentSum = arr[i];
        if (currentSum == sum) {
            return arr[i];
        }
        else {
            let subArr = [arr[i]];
            for (let j = i + 1; j < arrayLen; j++) {
                currentSum += arr[j];
                subArr.push(arr[j])
                if (currentSum == sum) {
                    return subArr;
                }
            }
        }
    }
    console.log("None");
    return;

}
const resp1 = findSubArrayWithSum(arr1, SUM1);
console.log(`The sub-array that sums to ${SUM1} is --> ${resp1}`);



// Solution 2:

const findSubArrayWithSum2 = (arr, sum) => {
    const arrLen = arr.length;
    const map = new Map();
    let currSum = 0;
    for (let i = 0; i < arrLen; i++) {
        currSum += arr[i];
        if (currSum === sum) {
            return [0, i];
        }
        if (map.has(currSum - sum)) {
            return [map.get(currSum - sum) + 1, i];
        }
        map.set(currSum, i);
    }
    return [];
}



const resp2 = findSubArrayWithSum2(arr2, SUM2);
console.log(resp2)
resp2.length === 0 ? 
console.log(`No subarray with sum ${SUM2} found.`) : 
console.log(`Sum found between indexes --> ${resp2[0]} and ${resp2[1]}`);

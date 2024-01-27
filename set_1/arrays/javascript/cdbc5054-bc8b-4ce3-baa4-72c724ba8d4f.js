const arr1 = [1, 4, 20, 3, 10, 5];
const SUM1 = 33;

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
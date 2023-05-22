// Solution 1:

const maxMinRearrager = arr => {
    const arrLen = arr.length;
    let tempArr = [];
    let [minIndex, maxIndex] = [0, arrLen - 1];

    let flag = true;
    for (let i = 0; i < arrLen; i++) {
        if (flag) {
            tempArr[i] = arr[maxIndex--];
        }
        else {
            tempArr[i] = arr[minIndex++];
        }
        flag = !flag;
    }
    return tempArr;
}

const arr1 = [24, 25, 29, 40, 43, 46, 56, 66, 82, 95];
const res1 = maxMinRearrager(arr1);
console.log(`Original input array --> [${arr1}]`)
console.log(`The max-min sorted array form --> [${res1}]`);



// Solution 2:

const maxMinRearrager2 = arr => {

    let arrLength = arr.length - 1;

    for (let i = 0; i <= arrLength - 1; i++) {
        if (i % 2 == 0 && i <= arrLength) {
            arr.splice(i, 0, arr[arrLength]);
            i++;
        }
    }
    return (arr.splice(0, arrLength + 1))
}

const arr2 = [24, 25, 29, 40, 43, 46, 56, 66, 82, 95];
console.log(`Original input array --> [${arr2}]`)
const res2 = maxMinRearrager2(arr2);
console.log(`The max-min sorted array form --> [${res2}]`);
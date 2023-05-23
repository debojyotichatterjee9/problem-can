// Solution 1:
const reverseArray = (arr, start, end) => {
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr
}

const leftRotate = (arr, pivot) => {
    const arrLength = arr.length;
    if (pivot == 0) return;
    pivot = pivot % arrLength;

    let resultArray = reverseArray(arr, 0, pivot - 1);
    resultArray = reverseArray(arr, pivot, arrLength - 1);
    resultArray = reverseArray(arr, 0, arrLength - 1);
    return resultArray
}



const arr1 = [13, 15, 17, 22, 25, 32, 37, 39, 41, 42];
const pivotIndex = 2;
console.log(`Original input array --> [${arr1}]`)
const res1 = leftRotate(arr1, pivotIndex);
console.log(`Array after rotating --> [${res1}]`)

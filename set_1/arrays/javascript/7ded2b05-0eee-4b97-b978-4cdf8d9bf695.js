// Solution 1:

const arraySorter = arr => {
    return arr.sort((elem1, elem2) => elem1 - elem2);
}

const elementSwapper = (arr, index1, index2) => {
    let tempElem = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempElem
    return arr;
}

const generateWaveArray = arr => {
    let [sortedArray] = [arraySorter(arr)];
    const arrayLength = sortedArray.length;
    for (let i = 0; i < arrayLength; i += 2) {
        elementSwapper(sortedArray, i, i + 1);
    }
    return sortedArray;
}

const arr1 = [87, 81, 20, 73, 79, 39, 30, 89, 35, 34];
console.log(`The original input1 --> [${arr1}]`);
const resp1 = generateWaveArray(arr1);
console.log(`The wave array generated --> [${resp1}]`);


// Solution 2:

const generateWaveArray2 = arr => {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i += 2) {
        if (i > 0 && arr[i - 1] > arr[i]) {
            elementSwapper(arr, i - 1, i);
        }
        if (i < arrLength - 1 && arr[i] < arr[i + 1]) {
            elementSwapper(arr, i, i + 1);
        }
    }
    return arr;
}

const arr2 = [48, 44, 16, 64, 33, 91, 84, 38, 74, 54];
console.log(`The original input1 --> [${arr2}]`);
const resp2 = generateWaveArray2(arr2);
console.log(`The wave array generated --> [${resp2}]`);


// Solution 1:

const arraySorter = arr => {
    return arr.sort((elem1, elem2) => elem1 - elem2);
}

const elementSwapper = (arr, index) => {
    let tempElem = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = tempElem
    return arr;
}

const generateWaveArray = arr => {
    let [sortedArray, waveArray] = [arraySorter(arr), []];
    const arrayLength = sortedArray.length;
    for (let i = 0; i < arrayLength; i += 2) {
        waveArray = elementSwapper(sortedArray, i);
    }
    return waveArray;
}

const arr1 = [23, 39, 44, 49, 53, 58, 66, 73, 76, 86];
console.log(`The original input1 --> [${arr1}]`);
const resp1 = generateWaveArray(arr1);
console.log(`The wave array generated --> [${resp1}]`);
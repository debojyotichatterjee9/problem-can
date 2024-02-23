const arr1 = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

const posNegRearrange1 = (arr, n) => {
    const arrayLength = arr.length;
    let i = -1, temp = 0;
    for (let j = 0; j < arrayLength; j++) {
        if (arr[j] < 0) {
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let posIdx = i + 1, negIdx = 0;
    while (posIdx < arrayLength && negIdx < posIdx && arr[negIdx] < 0) {
        temp = arr[negIdx];
        arr[negIdx] = arr[posIdx];
        arr[posIdx] = temp;
        posIdx++;
        negIdx += 2;
    }
    return arr;
}


const resp1 = posNegRearrange1(arr1);
console.log(`The new reaggranged array is --> ${resp1}`);
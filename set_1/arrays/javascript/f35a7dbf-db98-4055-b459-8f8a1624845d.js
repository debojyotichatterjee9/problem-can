const arr1 = [-9, -92, -21, -90, 51, -73, -30, -66, -22, 48];

const arr2 = [5, -3, 37, -40, 57, 52, -99, -11, -57, 28];

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

const resp2 = posNegRearrange1(arr2);
console.log(`The new reaggranged array is --> ${resp2}`);
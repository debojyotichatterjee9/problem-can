// Solution 1:
const evenOddRearranger = arr => {
    let tempArr= [];
    let arrLength = arr.length;
    let index = 0;
    for (let i = 0; i < arrLength; i++)
    {
        if (arr[i] % 2 == 0)
        {
            tempArr[index] = arr[i];
            index++;
        }
    }
    for (let i = 0; i < arrLength; i++)
    {
        if (arr[i] % 2 != 0)
        {
            tempArr[index] = arr[i];
            index++;
        }
    }
    return tempArr
}
 

const arr1 = [9, 10, 16, 20, 26, 29, 30, 35, 41, 43];
console.log(`The input array --> [${arr1}]`)

const res1 = evenOddRearranger(arr1);
console.log(`The array after even-odd re-arrangement --> [${res1}]`);


// Solution 2:
const evenOddRearranger2 = arr => {
    let arrLength = arr.length;
    let [i,j] = [-1,0];
    while (j != arrLength) {
        if (arr[j] % 2 == 0) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        j++;
    }

    return arr
}

const arr2 = [9, 18, 23, 28, 31, 32, 35, 38, 48, 49];
console.log(`The input array --> [${arr2}]`)
const res2 = evenOddRearranger2(arr2);
console.log(`The array after even-odd re-arrangement --> [${res2}]`);
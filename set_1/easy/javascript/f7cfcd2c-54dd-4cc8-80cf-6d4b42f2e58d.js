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
console.log(res1)
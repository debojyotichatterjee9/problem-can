arr = [1, 4, 20, 3, 10, 5]
SUM1 = 33

def findSubArrayWithSum(arr):
    arr_length = len(arr)
    for i in range(0, arr_length):
        currentSum = arr[i]
        if (currentSum == sum):
            return arr[i]
        else:
            subArr = [arr[i]]
            for j in range(i+1, arr_length):
                currentSum += arr[j]
                subArr.append(arr[j])
                if (currentSum == SUM1):
                    return subArr
    return ("None")

resp = findSubArrayWithSum(arr)
print(f"The sub-array that sums to {SUM1} is --> {resp}")

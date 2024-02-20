arr1 = [1, 4, 20, 3, 10, 5]
SUM1 = 33
arr2 = [15, 2, 4, 8, 5, 10, 23]
SUM2 = 21

# Solution 1:


# def findSubArrayWithSum(arr):
#     arr_length = len(arr)
#     for i in range(0, arr_length):
#         currentSum = arr[i]
#         if (currentSum == sum):
#             return arr[i]
#         else:
#             subArr = [arr[i]]
#             for j in range(i+1, arr_length):
#                 currentSum += arr[j]
#                 subArr.append(arr[j])
#                 if (currentSum == SUM1):
#                     return subArr
#     return ("None")


# resp1 = findSubArrayWithSum(arr)
# print(f"The sub-array that sums to {SUM1} is --> {resp1}")


# Solution 2:


def find_subarray_with_given_sum(arr, target_sum):
    curr_sum = 0
    index_map = {}
    for i, num in enumerate(arr):
        curr_sum += num
        if curr_sum == target_sum:
            return [0, i]
        if curr_sum - target_sum in index_map:
            return [index_map[curr_sum - target_sum] + 1, i]
        index_map[curr_sum] = i
    return []


resp2 = find_subarray_with_given_sum(arr2, SUM2)

if not resp2:
    print(f"No subarray with sum {SUM2} found.")
else:
    print(f"Sum found between indexes --> {resp2[0]} and {resp2[1]}")

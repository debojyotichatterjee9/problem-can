
def remove_dupes(arr):
    return list(set(arr))

# Solution 1:
def print_largest_three1(arr):
    arr.sort()
    arr_len = len(arr)
    return arr[arr_len-3:arr_len]


arr1 = [11, 65, 193, 36, 209, 664, 32]
res1 = print_largest_three1(arr1)
print(res1)

# Solution 2:
def print_largest_three2(arr):
    # remove the dupe elems first
    arr = remove_dupes(arr)
    arr_size = len(arr)

    if (arr_size < 3):
        return ("Invalid Input!!!")

    third = first = second = 0

    for i in range(0, arr_size):

        if (arr[i] > first):

            third = second
            second = first
            first = arr[i]

        elif (arr[i] > second):

            third = second
            second = arr[i]

        elif (arr[i] > third):
            third = arr[i]

    return ([first, second, third])


arr2 = [12, 13, 1, 10, 34, 1, 99, 99, 99, 99, 99, 99, 99, 99, 99]
res2 = print_largest_three2(arr2)
print(res2)

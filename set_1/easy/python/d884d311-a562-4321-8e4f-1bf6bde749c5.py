# Solution 1:

def max_min_rearranger(arr):

    arr_len = len(arr)
    temp_arr = []

    min_index, max_index = 0, arr_len-1

    flag = True

    for i in range(arr_len):
        if flag is True:
            temp_arr[i] = arr[max_index]
            max_index -= 1
        else:
            temp_arr[i] = arr[min_index]
            min_index += 1

        flag = bool(1-flag)

        return temp_arr


arr1 = [24, 25, 29, 40, 43, 46, 56, 66, 82, 95]

print(f"Original input array --> {arr1}")
res1 = max_min_rearranger(arr1)
print(f"The max-min sorted array form --> {res1}")

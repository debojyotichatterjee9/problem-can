# Solution 1:

def array_sorter(arr, arr_length):
    for i in range(0, arr_length):
        for j in range(i+1, arr_length):
            if (arr[i] > arr[j]):
                element_swapper(arr, i, j)
    return arr


def element_swapper(arr, index_1, index_2):
    temp_elem = arr[index_1]
    arr[index_1] = arr[index_2]
    arr[index_2] = temp_elem
    return arr


def generate_wave_array(arr):
    arr_length = len(arr)
    sorted_array = array_sorter(arr, arr_length)
    for i in range(0, arr_length - 1, 2):
        element_swapper(sorted_array, i, i+1)
    return sorted_array


arr1 = [87, 81, 20, 73, 79, 39, 30, 89, 35, 34]
print(f"The original input_1 --> [{arr1}]")
resp1 = generate_wave_array(arr1)
print(f"The wave array generated --> [{resp1}]")


# Solution 2:

def generate_wave_array_2(arr):
    arr_length = len(arr)
    sorted_array = array_sorter(arr, arr_length)
    for i in range(0, arr_length, 2):
        if (i < arr_length and arr[i] < arr[i+1]):
            element_swapper(arr, i, i + 1)
        if (i > 0 and arr[i] > arr[i - 1]):
            element_swapper(arr, i - 1, i)
    return sorted_array


arr2 = [87, 81, 20, 73, 79, 39, 30, 89, 35, 34]
print(f"The original input_1 --> [{arr2}]")
resp2 = generate_wave_array_2(arr2)
print(f"The wave array generated --> [{resp2}]")

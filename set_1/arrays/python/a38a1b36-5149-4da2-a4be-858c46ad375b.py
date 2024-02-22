arr1 = [ -1, -1, 6, 1, 9, 3, 2, -1, 4, -1 ]

def array_sort_on_index_1(arr1):
    array_length = len(arr1)
    for i in range(array_length):
        for j in range(array_length):
            if (arr1[j] == i):
                arr1[j], arr1[i] = arr1[i], arr1[j]
    for i in range(array_length):
        if (arr1[i] != i):
            arr1[i] = -1
    return arr1

resp1 = array_sort_on_index_1(arr1);

print(f'The sorted array based on index --> {resp1}')

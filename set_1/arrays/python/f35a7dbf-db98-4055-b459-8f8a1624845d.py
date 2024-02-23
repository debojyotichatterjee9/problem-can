arr1 = [-1, 2, -3, 4, 5, 6, -7, 8, 9]

def pos_neg_rearrange1(arr):
    array_length = len(arr)
    i = -1
    for j in range(array_length):
        if (arr[j] < 0):
            i += 1
            # swapping of arr
            arr[i], arr[j] = arr[j], arr[i]

    pos_idx, neg_idx = i+1, 0

    while (pos_idx < array_length and neg_idx < pos_idx and arr[neg_idx] < 0):

        arr[neg_idx], arr[pos_idx] = arr[pos_idx], arr[neg_idx]
        pos_idx += 1
        neg_idx += 2
    return arr


resp1 = pos_neg_rearrange1(arr1)
print(f'The new rearranged array is --> {resp1}')

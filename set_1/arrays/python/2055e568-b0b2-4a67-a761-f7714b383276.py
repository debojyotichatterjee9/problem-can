arr = [2, 3, 2, 4, 4, 3, 7, 1, 9, 1, 7, 0]


def findSingleOccuringElem(arr):
    arr_length = len(arr)
    single_occuring_elems = []
    for i in range(arr_length):
        count = 0
        for j in range(arr_length):
            if (arr[i] == arr[j]):
                count += 1
        if (count == 1):
            single_occuring_elems.append(arr[i])
    if len(single_occuring_elems) > 0:
        return single_occuring_elems
    return "None"


resp = findSingleOccuringElem(arr)
print(f"The element(s) which occurs only once --> {resp}")

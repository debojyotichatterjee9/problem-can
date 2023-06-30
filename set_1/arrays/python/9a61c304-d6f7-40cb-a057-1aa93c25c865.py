# Solution 1:
def reverse_array(arr, start, end):
	while (start < end):
		temp = arr[start]
		arr[start] = arr[end]
		arr[end] = temp
		start += 1
		end = end-1
	return arr

def left_rotate(arr, pivot):

	if pivot == 0:
		return
	arr_length = len(arr)
	pivot = pivot % arr_length
	result_array = reverse_array(arr, 0, pivot-1)
	result_array = reverse_array(arr, pivot, arr_length-1)
	result_array = reverse_array(arr, 0, arr_length-1)
	return result_array


arr1 = [24, 26, 30, 46, 59, 60, 61, 64, 67, 69]
pivot_index = 2
print(f"Original input array --> {arr1}")
res1 = left_rotate(arr1, pivot_index)
print(f"Array after rotating --> {res1}")

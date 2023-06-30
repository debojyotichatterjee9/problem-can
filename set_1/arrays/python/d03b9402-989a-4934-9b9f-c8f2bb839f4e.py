# Solution 1:
def find_number_of_triangles(list1):
    list1_length, count, resultant_list, result = len(list1), 0, [], dict()
    for i in range(list1_length):
        for j in range(i + 1, list1_length):
            for k in range(j + 1, list1_length):
                if (list1[i] + list1[j] > list1[k] and list1[i] + list1[k] > list1[j] and list1[k]+list1[j] > list1[i]):
                    resultant_list.append([list1[i], list1[j], list1[k]])
                    count += 1
    result["resultant_list"] = resultant_list
    result["count"] = count
    return (result)

list1 = [4, 6, 3, 7]
resp1 = find_number_of_triangles(list1)
print(f"The number of possible traingles are --> {resp1['count']}")
print(f"The possible valid traingles are --> {resp1['resultant_list']}")

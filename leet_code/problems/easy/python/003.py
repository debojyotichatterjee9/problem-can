"""
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

```
Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
"""

def roman_to_integer_1(roman_value):
	roman_map = {
		'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
	}
	final_integer = 0
	for i in range(len(roman_value)):
		if i < len(roman_value) - 1 and roman_map[roman_value[i]] < roman_map[roman_value[i + 1]]:
			final_integer -= roman_map[roman_value[i]]
		else:
			final_integer += roman_map[roman_value[i]]

	return final_integer

print(roman_to_integer_1('III')); # 3
print(roman_to_integer_1('LVIII')); # 58
print(roman_to_integer_1('MCMXCIV')); # 1994


def roman_to_integer_2(roman_value):
	roman_map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}
	final_integer, previous_value = 0, 0
	for current in reversed(roman_value):
		current_value = roman_map[current]
		final_integer -= current_value if current_value < previous_value else - current_value
		previous_value = current_value

	return final_integer 

print(roman_to_integer_2('III')); # 3
print(roman_to_integer_2('LVIII')); # 58
print(roman_to_integer_2('MCMXCIV')); # 1994
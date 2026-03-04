/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing 
together the nodes of the first two lists.

Return the head of the merged linked list.

```
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
``` 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const arrayToList = (arr) => {
	const dummy = new ListNode(0);
	let cur = dummy;
	for (const v of arr) {
		cur.next = new ListNode(v);
		cur = cur.next;
	}
	return dummy.next;
};

const listToArray = (head) => {
	const out = [];
	while (head !== null) {
		out.push(head.val);
		head = head.next;
	}
	return out;
};

const mergeTwoLists = (list1, list2) => {
	const dummy = new ListNode(0);
	let current = dummy;
	while (list1 !== null && list2 !== null) {
		if (list1.val <= list2.val) {
			current.next = list1;
			list1 = list1.next;
		} else {
			current.next = list2;
			list2 = list2.next;
		}
		current = current.next;
	}
	current.next = list1 !== null ? list1 : list2;
	return dummy.next;
};

const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 4]);
const res1 = mergeTwoLists(list1, list2);
console.log(res1);
console.log(listToArray(res1));

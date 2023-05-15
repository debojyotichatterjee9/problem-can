// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    let head = new ListNode(0, null);

    if (list1.val < list2.val) {
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2 = list2.next;
    }

    let p = head;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            p.next = list1;
            list1 = list1.next;
        } else {
            p.next = list2;
            list2 = list2.next;
        }

        p = p.next;
    }

    if (list1) {
        p.next = list1;
    } else {
        p.next = list2;
    }

    return head;
};
const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
const res = mergeTwoLists(list1, list2);
console.log(res);

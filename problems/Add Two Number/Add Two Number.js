export const addTwoNumbers = (l1, l2) => {
    let buffer = 0;
    let lastNode = null;
    let head = null;
    while (l1 || l2 || buffer > 0) {
        const v1 = l1 && l1.val || 0;
        const v2 = l2 && l2.val || 0;
        const sum = v1 + v2 + buffer;
        const val = sum % 10;
        buffer = Math.floor(sum / 10);
        const currentNode = { val };
        if (head === null) {
            head = currentNode;
        }
        if (lastNode) {
            lastNode.next = currentNode;
        }
        lastNode = currentNode;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return head;
};

export const getLinkedListFromArray = (array) => {
    let head = null;
    let lastNode = null;
    for (let i = 0; i < array.length; i++) {
        const val = array[i];
        const node = { val };
        if (lastNode) {
            lastNode.next = node;
        } else {
            head = node;
        }
        lastNode = node;
    }
    return head;
};

export const getArrayFromLinkedList = (node) => {
    const array = [];
    do {
        array.push(node.val);
        node = node.next;
    }
    while (node);
    return array;
};

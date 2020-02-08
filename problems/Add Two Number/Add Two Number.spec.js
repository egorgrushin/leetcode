import { addTwoNumbers } from './Add Two Number';
import { getArrayFromLinkedList, getLinkedListFromArray } from "../../helpers/linked-list";


describe('Add Two Number', () => {
    test.each`
        l1Array                | l2Array              | lOutput
        ${[2, 4, 3]}           | ${[5, 6, 4]}         | ${[7, 0, 8]}
        ${[5]}                 | ${[5]}               | ${[0, 1]}
    `('$input should match $output', ({ l1Array, l2Array, lOutput }) => {
        const l1 = getLinkedListFromArray(l1Array);
        const l2 = getLinkedListFromArray(l2Array);
        const resultNode = addTwoNumbers(l1, l2);
        const result = getArrayFromLinkedList(resultNode);
        expect(result).toEqual(lOutput);
    });
});

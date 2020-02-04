import { trap } from './Trapping Rain Water';

describe('Trapping Rain Water', () => {
    test.each`
        input                                   | output
        ${[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]} | ${6}
        ${[2, 0, 2]}                            | ${2}
        ${[2, 1, 0, 2]}                         | ${3}
        ${[4,2,0,3,2,5]}                        | ${9}
    `('$input should match $output', ({ input, output }) => {
        const result = trap(input);
        expect(result).toBe(output);
    });
});

import { lengthOfLongestSubstring } from "./Longest Substring Without Repeating Characters";


describe('Longest Substring Without Repeating Characters', () => {
    test.each`
        input           | output
        ${'abcabcbb'}   | ${3}
        ${'bbbbb'}      | ${1}
        ${'pwwkew'}     | ${3}
        ${' '}          | ${1}
        ${'dvdf'}       | ${3}
        ${'abba'}       | ${2}
    `('$input should match $output', ({ input, output }) => {
        const result = lengthOfLongestSubstring(input);
        expect(result).toEqual(output);
    });
});

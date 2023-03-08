export const lengthOfLongestSubstring = (str) => {
    let maxLength = 0;
    let currentLength = 0;
    let charMap = {};
    let caret = 0;
    for (let i = 0; i < str.length; i++) {
        const char =  str[i];
        const existIndex = charMap[char];
        if (existIndex !== undefined && existIndex >= caret) {
            caret = existIndex + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
            currentLength = i - caret;
        }
        currentLength++;
        charMap[char] = i;
    }
    return Math.max(currentLength, maxLength);
};

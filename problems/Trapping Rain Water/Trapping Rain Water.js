export const trap = (heights) => {
    let trapped = 0, descentIndices = [], prevHeight = -1;

    for (let i = 0; i < heights.length; i++) {
        const currentHeight = heights[i];
        // down
        if (currentHeight < prevHeight) {
            descentIndices.push(i - 1);
        }
        // up
        if (currentHeight >= prevHeight) {
            trapped += makeAscent(heights, descentIndices, prevHeight, currentHeight, i);
        }
        prevHeight = currentHeight;
    }
    return trapped;
};

const makeAscent = (heights, descentIndices, base, currentHeight, currentIndex) => {
    let count = 0;
    let descentIndex, descentHeight;
    while (base < currentHeight && descentIndices.length > 0) {
        descentIndex = descentIndices.pop();
        descentHeight = heights[descentIndex];
        const depth = Math.min(descentHeight, currentHeight) - base;
        const width = currentIndex - descentIndex - 1;
        const area = depth * width;
        count += area;
        base += depth;
    }
    if (base < descentHeight) {
        descentIndices.push(descentIndex);
    }
    return  count;
};

export const trap = (heights) => {
    let trapped = 0, descents = [], lastHeight = -1;

    for (let i = 0; i < heights.length; i++) {
        const height = heights[i];
        // down
        if (height < lastHeight) {
            descents.push(i - 1);
        }
        // up
        if (height >= lastHeight) {
            for (let j = lastHeight + 1; j <= height; j++) {
                const descent = descents.pop();
                if (descent === undefined) continue;
                const descentHeight = heights[descent];
                const depth = Math.min(descentHeight, j) - lastHeight;
                if (depth > 0) {
                    trapped += (i - descent - 1) * depth;
                }
            }
        }
        lastHeight = height;
    }
    return trapped;
};

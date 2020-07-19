import { COLORS, SmileData } from './model';

const SCREEN_WIDTH = 750;
const SCREEN_HEIGHT = 750;

export function createSmiles({ perLine, lines }: { perLine: number, lines: number }): SmileData[] {
    const spaceItem = SCREEN_WIDTH / (perLine + 1);
    const spaceLine = SCREEN_HEIGHT / (lines + 1);
    const items = [];
    for (let i = 0; i < lines; ++i) {
        for (let j = 0; j < perLine; ++j) {
            const item = {
                x: spaceItem + (i * spaceItem),
                y: spaceLine + (j * spaceLine),
            };
            items.push(item);
        }
    }
    return items;
}

export function colorItems(items: SmileData[]): void {
    items.forEach((item) => {
        const colorIndex = (item.x + item.y) % 3;
        item.color = COLORS[colorIndex];
    });
}

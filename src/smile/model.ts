export const COLOR_RED = 'RED';
export const COLOR_BLUE = 'BLUE';
export const COLOR_GREEN = 'GREEN';

export type SmileColor = typeof COLOR_RED | typeof COLOR_BLUE | typeof COLOR_GREEN;

export const COLORS = <const>[COLOR_RED, COLOR_BLUE, COLOR_GREEN];

export type SmileData = {
    x: number,
    y: number,
    color?: SmileColor,
};

export type SmileState = {
    speed: number,
    items: SmileData[],
};

export type Memo<E> = {
    prev: E,
    next: E,
};

export type MoverState = {
    step: number,
    x: Memo<number>,
    isMoving: boolean,
};

export type PerfMeterState = {
    isEnabled: boolean,
    avgMsec: number,
    itemNum: number,
};

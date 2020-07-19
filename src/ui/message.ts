export const MOVER_ON = 'MOVER_ON';
export const MOVER_OFF = 'MOVER_OFF';
export const MOVER_STEP = 'MOVER_STEP';

export const CANVAS_MOVE = 'CANVAS_MOVE';

export const PERF_METER_ENABLE = 'PERF_METER_ENABLE';
export const PERF_METER_DISABLE = 'PERF_METER_DISABLE';
export const PERF_METER_CLEAR = 'PERF_METER_CLEAR';
export const PERF_METER_SET_RESULT = 'PERF_METER_SET_RESULT';

export type MoverOn = { type: typeof MOVER_ON };
export type MoverOff = { type: typeof MOVER_OFF };
export type MoverStep = { type: typeof MOVER_STEP, payload: { offsetX: number } };

export type CanvasMove = { type: typeof CANVAS_MOVE };

export type UIMessage = CanvasMove
    | MoverOn
    | MoverOff
    | MoverStep;

export type PerfMeterEnable = { type: typeof PERF_METER_ENABLE };
export type PerfMeterDisable = { type: typeof PERF_METER_DISABLE };
export type PerfMeterClear = { type: typeof PERF_METER_CLEAR };
export type PerfMeterSetResult = {
    type: typeof PERF_METER_SET_RESULT,
    payload: { msec: number, itemNum: number },
};

export type PerfMeterMessage = PerfMeterEnable
    | PerfMeterDisable
    | PerfMeterClear
    | PerfMeterSetResult;

export const moverOn = (): MoverOn => ({ type: MOVER_ON });
export const moverOff = (): MoverOff => ({ type: MOVER_OFF });
export const moverStep = (offsetX: number): MoverStep => ({ type: MOVER_STEP, payload: { offsetX } });

export const canvasMove = (): CanvasMove => ({ type: CANVAS_MOVE });

export const perfMeterEnable = (): PerfMeterEnable => ({ type: PERF_METER_ENABLE });
export const perfMeterDisable = (): PerfMeterDisable => ({ type: PERF_METER_DISABLE });
export const perfMeterClear = (): PerfMeterClear => ({ type: PERF_METER_CLEAR });
export const perfMeterSetResult = (msec: number, itemNum: number): PerfMeterSetResult => ({
    type: PERF_METER_SET_RESULT,
    payload: { msec, itemNum },
});

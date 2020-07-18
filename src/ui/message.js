export const MOVER_ON = 'MOVER_ON';
export const MOVER_OFF = 'MOVER_OFF';
export const MOVER_STEP = 'MOVER_STEP';

export const CANVAS_MOVE = 'CANVAS_MOVE';

export const moverOn = () => ({ type: MOVER_ON });
export const moverOff = () => ({ type: MOVER_OFF });
export const moverStep = (offsetX) => ({ type: MOVER_STEP, payload: { offsetX } });

export const canvasMove = () => ({ type: CANVAS_MOVE });

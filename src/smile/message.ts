export const MOVE_SMILE_LEFT = 'MOVE_SMILE_LEFT';
export const MOVE_SMILE_RIGHT = 'MOVE_SMILE_RIGHT';

export type MoveSmileLeft = { type: typeof MOVE_SMILE_LEFT };
export type MoveSmileRight = { type: typeof MOVE_SMILE_RIGHT };

export const moveSmileLeft = (): MoveSmileLeft => ({ type: MOVE_SMILE_LEFT });
export const moveSmileRight = (): MoveSmileRight => ({ type: MOVE_SMILE_RIGHT });

export type SmileMessage = MoveSmileLeft | MoveSmileRight;

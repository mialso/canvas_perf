import { MOVER_ON, MOVER_OFF, MOVER_STEP } from 'ui/message';
import { moveSmileLeft, moveSmileRight } from 'smile/message';

const initialState = {
    step: 5,
    x: {
        prev: 0,
        next: 0,
    },
    isMoving: false,
};

export const isMoverOn = (state) => state.ui.mover.isMoving;
export const moverCoordX = (state) => state.ui.mover.x;

export function moverController({ dispatch, getState }, message) {
    switch (message.type) {
    case MOVER_STEP: {
        const { prev, next } = moverCoordX(getState());
        if (next > prev) {
            dispatch(moveSmileRight());
        } else {
            dispatch(moveSmileLeft());
        }
        break;
    }
    default:
    }
}

export function moverReducer(state = initialState, message) {
    switch (message.type) {
    case MOVER_ON: return { ...state, isMoving: true };
    case MOVER_OFF: return { ...state, isMoving: false };
    case MOVER_STEP: return {
        ...state,
        x: { prev: state.x.next, next: message.payload.offsetX },
    };
    default: return state;
    }
}

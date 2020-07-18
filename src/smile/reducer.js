import {MOVE_SMILE_LEFT, MOVE_SMILE_RIGHT} from './message';

const initialState = {
    items: [
        {x: 75, y: 75},
        {x: 275, y: 75},
    ],
};

export function smileReducer(state = initialState, message) {
    switch(message.type) {
        case MOVE_SMILE_LEFT: {
            state.items.forEach((smile) => {
                smile.x -= 5;
            });
            return state;
        }
        case MOVE_SMILE_RIGHT: {
            state.items.forEach((smile) => {
                smile.x += 5;
            });
            return state;
        }
        default: return state;
    }
}

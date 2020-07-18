import { MOVE_SMILE_LEFT, MOVE_SMILE_RIGHT } from 'smile/message';
import { createSmiles } from 'smile/itemCreator';

const DEFAULT_SPEED = 5;

const initialState = {
    speed: DEFAULT_SPEED,
    items: createSmiles({ lines: 3, perLine: 3 }),
};

function mutateMoveLeft(items) {
    items.forEach((smile) => {
        smile.x -= 5;
    });
}

function mutateMoveRight(items) {
    items.forEach((smile) => {
        smile.x += 5;
    });
}

export function smileReducer(state = initialState, message) {
    switch (message.type) {
    case MOVE_SMILE_LEFT: {
        mutateMoveLeft(state.items);
        return state;
    }
    case MOVE_SMILE_RIGHT: {
        mutateMoveRight(state.items);
        return state;
    }
    default: return state;
    }
}

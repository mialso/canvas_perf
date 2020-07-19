import { SmileData, SmileState } from 'smile/model';
import { MOVE_SMILE_LEFT, MOVE_SMILE_RIGHT, SmileMessage } from 'smile/message';
import { createSmiles } from 'smile/itemCreator';

const DEFAULT_SPEED = 5;

const initialState = {
    speed: DEFAULT_SPEED,
    items: createSmiles({ lines: 3, perLine: 3 }),
};

function mutateMoveLeft(items: SmileData[]) {
    items.forEach((smile) => {
        smile.x -= 5;
    });
}

function mutateMoveRight(items: SmileData[]) {
    items.forEach((smile) => {
        smile.x += 5;
    });
}

export function smileReducer(state:SmileState = initialState, message: SmileMessage): SmileState {
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

const initialState = {
    items: [
        {x: 75, y: 75},
        {x: 275, y: 75},
    ],
};

export function smile(state = initialState, message) {
    switch(message.type) {
        default: return state;
    }
}

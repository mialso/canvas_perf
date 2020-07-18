import { createStore } from 'redux';
import { smileReducer } from '../smile/reducer';

const simpleLogger = () => {
    console.info('STORE');
};

export function initStore() {
    const store = createStore(smileReducer);
    store.subscribe(simpleLogger);
    return store;
}

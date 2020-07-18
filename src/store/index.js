import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { smileReducer } from 'smile/reducer';
import { moverReducer, moverController } from 'ui/controller';
import { perfMeterReducer, perfMeterController, PERF_METER_KEY } from 'ui/PerfMeter';

function connectController(controller) {
    return (store) => (next) => (message) => {
        next(message);
        controller(store, message);
    };
}

const middlewares = [
    moverController,
    perfMeterController,
].map(connectController);

const appReducer = combineReducers({
    smile: smileReducer,
    ui: combineReducers({
        [PERF_METER_KEY]: perfMeterReducer,
        mover: moverReducer,
    }),
});

export function initStore() {
    const middlewareEnchancer = applyMiddleware(...middlewares);
    const composedEnchancer = composeWithDevTools(middlewareEnchancer);

    const store = createStore(appReducer, composedEnchancer);
    return store;
}

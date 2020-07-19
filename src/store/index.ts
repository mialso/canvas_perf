import {
    applyMiddleware, createStore, combineReducers, Dispatch, MiddlewareAPI,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { smileReducer } from 'smile/reducer';
import { moverReducer, moverController } from 'ui/controller';
import { perfMeterReducer, perfMeterController } from 'ui/PerfMeter';
import {
    AppStore, AppState, AppMessage, Controller, UIState,
} from 'store/types';

function connectController(controller: Controller) {
    return (
        store: MiddlewareAPI<Dispatch<AppMessage>, AppState>,
    ) => (next: Dispatch<AppMessage>) => (message: AppMessage) => {
        next(message);
        controller(store, message);
    };
}

const middlewares = [
    moverController,
    perfMeterController,
].map(connectController);

const appReducer = combineReducers<AppState>({
    smile: smileReducer,
    ui: combineReducers<UIState>({
        perfMeter: perfMeterReducer,
        mover: moverReducer,
    }),
});

export function initStore(): AppStore {
    const middlewareEnchancer = applyMiddleware(...middlewares);
    const composedEnchancer = composeWithDevTools(middlewareEnchancer);

    const store = createStore(appReducer, composedEnchancer);
    return store;
}

import { Store, MiddlewareAPI, Dispatch } from 'redux';
import { SmileMessage } from 'smile/message';
import { UIMessage, PerfMeterMessage } from 'ui/message';
import { SmileState } from 'smile/model';
import { PerfMeterState, MoverState } from 'ui/types';

export type AppMessage = SmileMessage | PerfMeterMessage | UIMessage;

export type UIState = {
    perfMeter: PerfMeterState,
    mover: MoverState,
};

export type AppState = {
    smile: SmileState,
    ui: UIState,
};

export type AppStore = Store<AppState, AppMessage>;

export type Controller = (store: MiddlewareAPI<Dispatch<AppMessage>, AppState>, message: AppMessage) => void;

export type Selector<R> = (state: AppState) => R;

export type BoundElem<E extends HTMLElement, U> = (store: AppStore) => (elem: E) => U;

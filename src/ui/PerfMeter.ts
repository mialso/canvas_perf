import { MOVE_SMILE_RIGHT } from 'smile/message';
import { smileItemsCount } from 'smile/selector';
import { createButton } from 'ui/Button';
import {
    AppStore, AppState, Selector, Controller,
} from 'store/types';
import { PerfMeterState } from 'ui/types';
import {
    PERF_METER_ENABLE, PERF_METER_DISABLE, PERF_METER_SET_RESULT, PERF_METER_CLEAR,
    PerfMeterMessage, perfMeterSetResult, perfMeterEnable, perfMeterDisable, perfMeterClear,
} from 'ui/message';

// messages
// state shape
const initialState: PerfMeterState = {
    isEnabled: false,
    avgMsec: 0,
    itemNum: 0,
};

// selectors
const getPerfMeterAvgMsec: Selector<number> = (state) => state.ui.perfMeter.avgMsec;
const getPerfMeterItemNum: Selector<number> = (state) => state.ui.perfMeter.itemNum;
const isPerfMeterEnabled: Selector<boolean> = (state) => state.ui.perfMeter.isEnabled;

// mutation
export function perfMeterReducer(state: PerfMeterState = initialState, message: PerfMeterMessage): PerfMeterState {
    switch (message.type) {
    case PERF_METER_ENABLE: {
        return { ...state, isEnabled: true };
    }
    case PERF_METER_DISABLE: {
        return { ...state, isEnabled: false };
    }
    case PERF_METER_SET_RESULT: {
        const { msec, itemNum } = message.payload;
        return { ...state, avgMsec: msec, itemNum };
    }
    case PERF_METER_CLEAR: {
        return {
            ...state,
            isEnabled: false,
            avgMsec: 0,
            itemNum: 0,
        };
    }
    default: return state;
    }
}

// async controller
export const perfMeterController: Controller = ({ getState, dispatch }, message): void => {
    switch (message.type) {
    case MOVE_SMILE_RIGHT: {
        if (isPerfMeterEnabled(getState())) {
            performance.mark(MOVE_SMILE_RIGHT);
        }
        break;
    }
    case PERF_METER_DISABLE: {
        const entries = performance.getEntries();
        const markStartTimes = [];
        for (let i = 0; i < entries.length; ++i) {
            if (entries[i].entryType === 'mark') {
                markStartTimes.push(entries[i].startTime);
            }
        }
        performance.clearMarks();
        type DurationMark = { startTime: number, duration: number };
        const durationTimes: DurationMark[] = markStartTimes.reduce(
            (acc, startTime, index, startTimesArr) => acc.concat({
                startTime,
                duration: startTimesArr[index + 1] ? (startTimesArr[index + 1] - startTime) : 0,
            }),
            [] as DurationMark[],
        ).filter((item) => !!item.duration);

        const itemsQuantity = durationTimes.length;
        const totalMsec = durationTimes.reduce((acc, item) => acc + item.duration, 0);
        const averageMsec = totalMsec / itemsQuantity;
        dispatch(perfMeterSetResult(averageMsec, itemsQuantity));
        break;
    }
    default: break;
    }
};

// ui update function on state change
const updatePerfMeter = (
    perfMeter: { info: HTMLDivElement, start: HTMLButtonElement, stop: HTMLButtonElement },
    { getState }: { getState: () => AppState },
) => () => {
    const { info, start, stop } = perfMeter;
    const state = getState();
    const avgMsec = getPerfMeterAvgMsec(state) || 0;
    const itemNum = getPerfMeterItemNum(state) || 0;
    info.innerText = `avg: ${avgMsec} msec, num: ${itemNum}`;

    const isEnabled = isPerfMeterEnabled(state);
    if (start.disabled !== isEnabled) {
        start.disabled = isEnabled;
    }
    if (stop.disabled === isEnabled) {
        stop.disabled = !isEnabled;
    }
};

export const createPerfMeter = ({ dispatch, getState }: AppStore) => (perfMeterElem: HTMLDivElement): () => void => {
    const perfMeterHeadElem = document.createElement('p');
    perfMeterHeadElem.innerText = `Performance Meter: ${smileItemsCount(getState())} Smiles`;
    const perfMeterInfoElem = document.createElement('div');
    const clearButton = createButton({ text: 'clear', onclick: () => dispatch(perfMeterClear()) });
    const startButton = createButton({ text: 'enable', onclick: () => dispatch(perfMeterEnable()) });
    const stopButton = createButton({ text: 'stop', onclick: () => dispatch(perfMeterDisable()) });
    perfMeterInfoElem.className = 'PerfMeterInfo';

    perfMeterElem.appendChild(perfMeterHeadElem);
    perfMeterElem.appendChild(perfMeterInfoElem);
    perfMeterElem.appendChild(clearButton);
    perfMeterElem.appendChild(startButton);
    perfMeterElem.appendChild(stopButton);
    const updateHandler = updatePerfMeter(
        { info: perfMeterInfoElem, start: startButton, stop: stopButton },
        { getState },
    );
    updateHandler();
    return updateHandler;
};

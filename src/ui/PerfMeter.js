import { MOVE_SMILE_RIGHT } from 'smile/message';
import { smileItemsCount } from 'smile/selector';
import { createButton } from 'ui/Button';

export const PERF_METER_KEY = 'perfMeter';

// messages
export const PERF_METER_ENABLE = 'PERF_METER_ENABLE';
export const PERF_METER_DISABLE = 'PERF_METER_DISABLE';
export const PERF_METER_CLEAR = 'PERF_METER_CLEAR';
export const PERF_METER_SET_CANVAS_RENDER = 'PERF_METER_SET_CANVAS_RENDER';
export const perfMeterEnable = () => ({ type: PERF_METER_ENABLE });
export const perfMeterDisable = () => ({ type: PERF_METER_DISABLE });
export const perfMeterClear = () => ({ type: PERF_METER_CLEAR });
export const perfMeterSetCanvasRender = (msec, itemNum) => ({
    type: PERF_METER_SET_CANVAS_RENDER,
    payload: { msec, itemNum },
});

// state shape
const initialState = {
    isEnabled: false,
    avgMsec: 0,
    itemNum: 0,
};

// selectors
const getPerfMeterAvgMsec = (state) => state.ui[PERF_METER_KEY].avgMsec;
const getPerfMeterItemNum = (state) => state.ui[PERF_METER_KEY].itemNum;
const isPerfMeterEnabled = (state) => state.ui[PERF_METER_KEY].isEnabled;

// mutation
export function perfMeterReducer(state = initialState, message) {
    switch (message.type) {
    case PERF_METER_ENABLE: {
        return { ...state, isEnabled: true };
    }
    case PERF_METER_DISABLE: {
        return { ...state, isEnabled: false };
    }
    case PERF_METER_SET_CANVAS_RENDER: {
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
export function perfMeterController({ getState, dispatch }, message) {
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
        const durationTimes = markStartTimes.reduce(
            (acc, startTime, index, startTimesArr) => acc.concat({
                startTime,
                duration: startTimesArr[index + 1] ? (startTimesArr[index + 1] - startTime) : 0,
            }),
            [],
        ).filter((item) => !!item.duration);

        const itemsQuantity = durationTimes.length;
        const totalMsec = durationTimes.reduce((acc, item) => acc + item.duration, 0);
        const averageMsec = totalMsec / itemsQuantity;
        dispatch(perfMeterSetCanvasRender(averageMsec, itemsQuantity));
        break;
    }
    default:
    }
}

// ui update function on state change
const updatePerfMeter = ({ info, start, stop }, { getState }) => () => {
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

export const createPerfMeter = ({ dispatch, getState }) => (perfMeterElem) => {
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

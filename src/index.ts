import { initStore } from 'store/index';
import { createMover } from 'ui/Mover';
import { createToolbar } from 'ui/Toolbar';
import { createCanvas } from 'ui/Canvas';
import { createPerfMeter } from 'ui/PerfMeter';

function getDomElem(classSelector: string): Element {
    const element = document.querySelector(`.${classSelector}`);
    if (!element) {
        throw new Error(`getDom: unable to find DOM element for ${classSelector} class`);
    }
    return element;
}

function runApplication() {
    // create store first
    const store = initStore();
    // create the ui
    createMover(store)(getDomElem('MapMover') as HTMLDivElement);
    createToolbar(store)(getDomElem('ControlPanel') as HTMLDivElement);
    const updatePerfMeter = createPerfMeter(store)(getDomElem('PerfMeter') as HTMLDivElement);
    // create canvas
    const drawCanvas = createCanvas(store)(document.getElementById('perfMe') as HTMLCanvasElement);

    // render canvas first time
    drawCanvas();
    // subscribe to subsequent state updates
    // note - those are gonna be called on each "dispatch(message)" regardless state change
    store.subscribe(drawCanvas);
    store.subscribe(updatePerfMeter);
}

document.addEventListener('DOMContentLoaded', runApplication);

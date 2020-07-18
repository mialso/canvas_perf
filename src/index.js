import { initStore } from 'store/index';
import { createMover } from 'ui/Mover';
import { createToolbar } from 'ui/Toolbar';
import { createCanvas } from 'ui/Canvas';
import { createPerfMeter } from 'ui/PerfMeter';

function runApplication() {
    // create store first
    const store = initStore();
    // create the ui
    createMover(store)(document.querySelector('.MapMover'));
    createToolbar(store)(document.querySelector('.ControlPanel'));
    const updatePerfMeter = createPerfMeter(store)(document.querySelector('.PerfMeter'));
    // create canvas
    const drawCanvas = createCanvas(store)(document.getElementById('perfMe'));

    // render canvas first time
    drawCanvas();
    // subscribe to subsequent state updates
    // note - those are gonna be called on each "dispatch(message)" regardless state change
    store.subscribe(drawCanvas);
    store.subscribe(updatePerfMeter);
}

document.addEventListener('DOMContentLoaded', runApplication);

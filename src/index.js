import {initStore} from './store/index';
import {moveSmileLeft, moveSmileRight} from './smile/message';

const store = initStore();

const Rect = (ctx) => {
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
}

const Smile = ({ center: c }) => (ctx) => {
    const { radius: r } = { radius: 50 };

    ctx.beginPath();
    // outer circle
    ctx.arc(c.x, c.y, r, 0, Math.PI * 2, true);
    // mouth
    ctx.moveTo(c.x + 35, c.y);
    ctx.arc(c.x, c.y, r - 15, 0, Math.PI, false);
    // left eye
    ctx.moveTo(c.x - 10, c.y - 10);
    ctx.arc(c.x - 15, c.y - 10, 5, 0, Math.PI * 2, true);
    // right eye
    ctx.moveTo(c.x + 20, c.y - 10);
    ctx.arc(c.x + 15, c.y - 10, 5, 0, Math.PI * 2, true);
    ctx.stroke();
}

const draw = (ctx) => () => {
    console.info('DRAW')
    ctx.clearRect(0, 0, 750, 750)

    const { items } = store.getState()
    items.map(center => Smile({ center })).forEach(item => item(ctx))
}

function createButton({ text, onclick }) {
    const button = document.createElement('button');
    button.innerText = text;
    button.onclick = onclick;
    return button;
}

function initButtons() {
    const controlPanel = document.querySelector('.ControlPanel');
    const moveLeftButton = createButton({ text: 'move left', onclick: () => store.dispatch(moveSmileLeft()) });

    const moveRightButton = createButton({ text: 'move right', onclick: () => store.dispatch(moveSmileRight()) });
    controlPanel.appendChild(moveLeftButton);
    controlPanel.appendChild(moveRightButton);
}

function initMover() {
    const mover = document.querySelector('.MapMover');
    let isMoving = false;
    mover.addEventListener('mousedown', () => {
        isMoving = true;
    });
    mover.addEventListener('mousemove', (e) => {
        if (!isMoving) {
            return;
        }
        console.info('MOVING: %s, %s', e.offsetX, e.offsetY)
    });
    mover.addEventListener('mouseup', () => {
        isMoving = false;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('perfMe');
    const ctx = canvas.getContext('2d');
    initButtons();
    initMover();
    const drawCanvas = draw(ctx);
    drawCanvas()
    store.subscribe(drawCanvas)
});

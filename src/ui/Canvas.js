import { CanvasSmile } from 'ui/Smile';
import { smileItems } from 'smile/selector';

export const draw = ({ ctx, getState }) => () => {
    console.info('DRAW');
    ctx.clearRect(0, 0, 750, 750);

    const items = smileItems(getState());

    // create actual canvas-ui objects from state and draw them
    items.map((center) => CanvasSmile({ center })).forEach((item) => item(ctx));
};

export const createCanvas = ({ getState }) => (canvasElem) => {
    const ctx = canvasElem.getContext('2d');
    return draw({ ctx, getState });
};

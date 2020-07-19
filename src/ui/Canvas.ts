import { CanvasSmile } from 'ui/Smile';
import { smileItems } from 'smile/selector';
import { AppState, AppStore } from 'store/types';

export const draw = ({ ctx, getState }: { ctx: CanvasRenderingContext2D, getState: () => AppState }) => (): void => {
    console.info('DRAW');
    ctx.clearRect(0, 0, 750, 750);

    const items = smileItems(getState());

    // create actual canvas-ui objects from state and draw them
    items.map((center) => CanvasSmile({ center })).forEach((item) => item(ctx));
};

export const createCanvas = ({ getState }: AppStore) => (canvasElem: HTMLCanvasElement): () => void => {
    const ctx = canvasElem.getContext('2d');
    if (!ctx) {
        throw new Error('createCanvas: unable to get canvas 2d context');
    }
    return draw({ ctx, getState });
};

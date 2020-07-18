import { moverOn, moverOff, moverStep } from 'ui/message';
import { isMoverOn } from 'ui/controller';

export const createMover = ({ dispatch, getState }) => (moverElem) => {
    moverElem.addEventListener('mousedown', () => dispatch(moverOn()));
    moverElem.addEventListener('mousemove', (e) => {
        if (isMoverOn(getState())) {
            dispatch(moverStep(e.offsetX));
        }
    });
    moverElem.addEventListener('mouseup', () => dispatch(moverOff()));
    moverElem.addEventListener('mouseout', () => {
        if (isMoverOn(getState())) {
            dispatch(moverOff());
        }
    });
};

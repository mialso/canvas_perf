import { moveSmileLeft, moveSmileRight } from 'smile/message';
import { createButton } from 'ui/Button';

export const createToolbar = ({ dispatch }) => (toolbarElem) => {
    const moveLeftButton = createButton({ text: 'move left', onclick: () => dispatch(moveSmileLeft()) });
    const moveRightButton = createButton({ text: 'move right', onclick: () => dispatch(moveSmileRight()) });
    const move10RightButton = createButton({
        text: 'move 10 right',
        onclick: () => {
            for (let i = 0; i < 10; ++i) {
                dispatch(moveSmileRight());
            }
        },
    });

    toolbarElem.appendChild(moveLeftButton);
    toolbarElem.appendChild(moveRightButton);
    toolbarElem.appendChild(move10RightButton);
};

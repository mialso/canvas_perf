export function createButton({ text, onclick }) {
    const button = document.createElement('button');
    button.innerText = text;
    button.onclick = onclick;
    return button;
}

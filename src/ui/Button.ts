export function createButton(
    { text, onclick }: { text: string, onclick: (e: MouseEvent) => void },
): HTMLButtonElement {
    const button = document.createElement('button');
    button.innerText = text;
    button.onclick = onclick;
    return button;
}

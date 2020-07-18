export const CanvasSmile = ({ center: c }) => (ctx) => {
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
};

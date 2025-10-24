export const lightenColor = (color, amount = 0.3) => {

    const temp = document.createElement('div');
    temp.style.color = color;
    document.body.appendChild(temp);

    const computedColor = getComputedStyle(temp).color;
    document.body.removeChild(temp);

    const rgb = computedColor.match(/\d+/g)?.map(Number) || [0, 0, 0];

    const r = Math.round(rgb[0] + (255 - rgb[0]) * amount);
    const g = Math.round(rgb[1] + (255 - rgb[1]) * amount);
    const b = Math.round(rgb[2] + (255 - rgb[2]) * amount);

    return `rgb(${r}, ${g}, ${b})`;
};
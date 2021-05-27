export function uuid () {
  return Math.random().toString(16).slice(2);
}

export function saveStatePlugin (store) {
  store.subscribe((mutation, state) => {
    localStorage.setItem('board', JSON.stringify(state.board));
  });
}

export function isLightColor(color) {
  const rgbColor = +(`0x${color.slice(1).replace(color.length < 5 && /./g, '$&$&')}`);

  const r = rgbColor >> 16;
  // eslint-disable-next-line no-mixed-operators
  const g = rgbColor >> 8 & 255;
  const b = rgbColor & 255;

  const hsp = Math.sqrt(
    0.299 * (r * r)
    + 0.587 * (g * g)
    + 0.114 * (b * b),
  );

  return hsp > 127.5;
}

export function numberFormat(value, delimiter = ' ') {
  return value
    .toLocaleString(undefined, {minimumFractionDigits: 2})
    .replace(',', delimiter)
    .replace('.', ',');
}

export function fixedNumber3(x) {
  return Math.round(x * 1e3) / 1e3;
}

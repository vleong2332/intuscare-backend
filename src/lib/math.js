export function sum (a, b) {
  if (typeof a !== "number" || typeof b !== "number") return null;
  return a + b;
}

export function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") return null;
  return a - b;
}

export function divide (a, b) {
  if (typeof a !== "number" || typeof b !== "number" || b === 0) return null;
  return a / b;
}

export function multiply (a, b) {
  if (typeof a !== "number" || typeof b !== "number") return null;
  return a * b;
}

export function mean (a) {
  return divide(a.reduce(sum, 0), a.length);
}

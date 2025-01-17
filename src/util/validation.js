export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isPasswordValid(value, minLength) {
  return value.length >= minLength;
}

export function passwordsMatch(pass, passRe) {
  return pass === passRe;
}

export function randInt(min,max) {
  if (max < min) {
    throw Error('Incorrect input. Min should be less or equal than max');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1) + min);
}

export function stringLengthChecker(string, maxLength) {
  const length = string.length;
  return length <= maxLength;
}

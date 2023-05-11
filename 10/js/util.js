export function randInt(min, max) {
  if (max < min) {
    throw Error('Incorrect input. Min should be less or equal than max');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function stringLengthChecker(string, maxLength) {
  const length = string.length;
  return length <= maxLength;
}

export function showErrorMessage() {
  document.querySelector('.blur').classList.remove('hidden');
  const buttonElement = document.querySelector('#window-close');
  buttonElement.addEventListener('click', () => {
    document.querySelector('.blur').classList.add('hidden');
    location.reload();
  }
  );
}

export function isEscapeKey(evt) {
  return (evt.key === 'Escape');
}

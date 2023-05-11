import {closeEditWindow, closeEditWindowAndSaveData} from './form.js';
import {isEscapeKey} from './util.js';

const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');

export function onSuccessSending(){
  closeEditWindow();
  document.body.append(successMessageElement);
  const successButtonElement = successMessageElement.querySelector('.success__button');
  successButtonElement.addEventListener('click', () => {successMessageElement.remove();});
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successMessageElement.remove();
    }
  }
  );
  document.addEventListener('click', () => {successMessageElement.remove();});
}

export function onFailSending(){
  closeEditWindowAndSaveData();
  document.body.append(errorMessageElement);
  const errorButtonElement = errorMessageElement.querySelector('.error__button');
  errorButtonElement.addEventListener('click', () => {errorMessageElement.remove();});
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorMessageElement.remove();
    }
  }
  );
  document.addEventListener('click', () => {errorMessageElement.remove();});
}

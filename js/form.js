import {isEscapeKey} from './util.js';
import {createFormSubmit} from './validation.js';
import {onFailSending, onSuccessSending} from './formSending.js';
import {disableScaleChanging, enableScaleChanging} from './scale.js';
import {effectReset, imageEffectLoader} from './effects.js';

const userPhotoElement = document.querySelector('.img-upload__overlay');
const fileUploadElement = document.querySelector('#upload-file');
const hashtagElement = document.querySelector('.text__hashtags');
const commentElement = document.querySelector('.text__description');
const cancelButtonElement = document.querySelector('.img-upload__cancel');


function openEditWindow() {
  userPhotoElement.classList.remove('hidden');
  userPhotoElement.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeydown);
}

function onEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditWindow(); }
}

export function closeEditWindow() {
  userPhotoElement.classList.add('hidden');
  userPhotoElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  fileUploadElement.value = ''  ;
  hashtagElement.value = '';
  commentElement.value = '';
  disableScaleChanging();
  effectReset();
}

export function closeEditWindowAndSaveData() {
  userPhotoElement.classList.add('hidden');
  userPhotoElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
}

export function createForm() {
  fileUploadElement.addEventListener('change', openEditWindow);
  cancelButtonElement.addEventListener('click', closeEditWindow);
  enableScaleChanging();
  imageEffectLoader();
  createFormSubmit(onSuccessSending, onFailSending);
}

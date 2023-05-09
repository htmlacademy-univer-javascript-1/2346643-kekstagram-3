import {validate} from './validation.js';

const userPhotoElement = document.querySelector('.img-upload__overlay');
const fileUploadElement = document.querySelector('#upload-file');
const hashtagElement = document.querySelector('.text__hashtags');
const commentElement = document.querySelector('.text__description');
const cancelButtonElement = document.querySelector('.img-upload__cancel');
const formElement = document.querySelector('.img-upload');


function openEditWindow() {
  userPhotoElement.classList.remove('hidden');
  userPhotoElement.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeydown);
}

function isEscapeKey(evt) {
  return ( evt.key === 'Escape' );
}

function onEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditWindow(); }
}

function closeEditWindow() {
  userPhotoElement.classList.add('hidden');
  userPhotoElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  fileUploadElement.value = '';
  hashtagElement.value = '';
  commentElement.value = '';
}


export function createForm() {
  fileUploadElement.addEventListener('change', openEditWindow);
  cancelButtonElement.addEventListener('click', closeEditWindow);
  validate(formElement);
}

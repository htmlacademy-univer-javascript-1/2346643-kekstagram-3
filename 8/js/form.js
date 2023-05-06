const userPhotoElement = document.querySelector('.img-upload__overlay');
const formElement = document.querySelector('.img-upload');
const cancelButtonElement = document.querySelector('.img-upload__cancel');

function showEditWindow() {
  userPhotoElement.classList.remove('hidden');
  userPhotoElement.classList.add('modal-open');
}

formElement.addEventListener('change', showEditWindow);

function closeForm() {
  formElement.classList.remove('novalidate');
  userPhotoElement.classList.add('hidden');
  userPhotoElement.classList.remove('modal-open');
}

formElement.addEventListener('submit', closeForm);
cancelButtonElement.addEventListener('click', closeForm);

document.addEventListener('keydown', (evt) => {
  if ( evt.key === 'Escape' ) { closeForm(); }
});

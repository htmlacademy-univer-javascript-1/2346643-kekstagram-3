const formElement = document.querySelector('.img-upload');

new Pristine(formElement);

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  Pristine.validate();
});

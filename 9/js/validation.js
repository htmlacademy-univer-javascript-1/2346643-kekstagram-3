export function validate(formElement){
  new Pristine(formElement);
  formElement.addEventListener('submit', (evt) => {
    if (!Pristine.validate()) {
      evt.preventDefault();
    }
  });
}


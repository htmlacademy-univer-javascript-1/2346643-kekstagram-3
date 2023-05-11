const uploadFormElement = document.querySelector('.img-upload');
const pristine = new Pristine(uploadFormElement);

export const createFormSubmit = (onSuccess, onFail) => {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      const formData = new FormData(evt.target);
      fetch(
        'https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
          } else {
            throw Error;
          }
        })
        .catch(() => {
          onFail();
        });
    }
  });
};



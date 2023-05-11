import {showErrorMessage} from './util.js';

export const createLoader = (onSuccess) => () => fetch(
  'https://27.javascript.pages.academy/kekstagram-simple/data',
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error();
  })
  .then((data) => {
    onSuccess(data);
  })
  .catch(() => {
    showErrorMessage();
  });


const effectElement = document.querySelector('.effects__list');
const imgElement = document.querySelector('.img-upload__preview');

const effectsList = new Map();
effectsList.set('effect-none', '');
effectsList.set('effect-chrome','effects__preview--chrome');
effectsList.set('effect-sepia', 'effects__preview--sepia');
effectsList.set('effect-marvin','effects__preview--marvin' );
effectsList.set('effect-phobos','effects__preview--phobos');
effectsList.set('effect-heat', 'effects__preview--heat');


effectElement.addEventListener('click', () => {
  const radioButtons = document.querySelectorAll('input[name="effect"]');
  for (const button of radioButtons) {
    if (button.checked) {
      const effect = button.id;
      const prev = imgElement.classList.value;
      if (prev !== '') {
        imgElement.classList.remove(prev);
      }
      if (effect !== 'effect-none'){
        imgElement.classList.add(effectsList.get(effect));
      }
    }
  }
});

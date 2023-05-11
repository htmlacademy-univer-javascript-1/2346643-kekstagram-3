const effectElement = document.querySelector('.effects__list');
const imagePreviewElement = document.querySelector('.img-upload__preview');

export const effectsList = new Map();
effectsList.set('effect-none', '');
effectsList.set('effect-chrome','effects__preview--chrome');
effectsList.set('effect-sepia', 'effects__preview--sepia');
effectsList.set('effect-marvin','effects__preview--marvin' );
effectsList.set('effect-phobos','effects__preview--phobos');
effectsList.set('effect-heat', 'effects__preview--heat');

export function imageEffectLoader() {
  effectElement.addEventListener('click', () => {
    const radioButtons = document.querySelectorAll('input[name="effect"]');
    for (const button of radioButtons) {
      if (button.checked) {
        const effect = button.id;
        const previousEffect = imagePreviewElement.classList.value;
        if (previousEffect !== '') {
          imagePreviewElement.classList.remove(previousEffect);
        }
        if (effect !== 'effect-none'){
          imagePreviewElement.classList.add(effectsList.get(effect));
        }
      }
    }
  });
}

export function effectReset() {
  for (const effect of effectsList.values()) {
    if (imagePreviewElement.classList.contains(effect)) {
      imagePreviewElement.classList.remove(effect);
    }
  }
  document.querySelector('#effect-none').checked = true;
}


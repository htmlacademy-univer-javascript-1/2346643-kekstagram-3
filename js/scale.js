const scaleDownButtonElement = document.querySelector('.scale__control--smaller');
const scaleUpButtonElement = document.querySelector('.scale__control--bigger');
const scaleControlValueElement = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview');

const step = 25;

function changeScale(stepValue) {
  const scaleValueInt = scaleValueToInt(scaleControlValueElement.value);
  if (( scaleValueInt > 25 && stepValue < 0) || (scaleValueInt < 100 && stepValue > 0)) {
    scaleControlValueElement.value = (scaleValueInt + stepValue).toString().concat('%');
    imageElement.style = `transform: scale(${(scaleValueInt + stepValue)/100})`;
  }
}

function scaleValueToInt(initialString) {
  return parseInt( initialString.substring(0, initialString.length - 1), 10 );
}

export function enableScaleChanging() {
  scaleDownButtonElement.addEventListener('click', () => {
    changeScale(-step); }
  );
  scaleUpButtonElement.addEventListener('click', () => {
    changeScale(step); }
  );
}


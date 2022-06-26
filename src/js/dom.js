/* eslint-disable no-alert */
export default function classActive(nameCard) {
  if (typeof nameCard === 'string') {
    const card = document.querySelector(`.${nameCard}`);
    card.classList.add('img-card-active');
  } else {
    alert(nameCard);
  }
}

export function classValid(value) {
  const inp = document.querySelector('.inp');
  let val;
  let text;
  if (value === true) {
    val = 'valid';
    text = 'Валидный номер карты';
  } else {
    val = 'invalid';
    text = 'Невалидный номер карты';
  }
  inp.insertAdjacentHTML('beforebegin', `<lebel id="leb" class="${val}">${text}</lebel>`);
}

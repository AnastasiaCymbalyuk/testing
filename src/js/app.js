import checkNumber from './checkCard';
import checkValidate from './checkValid';
import classActive, { classValid } from './dom';

const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
btn.addEventListener('click', (event) => {
  const valid = checkValidate(inp.value);
  if (valid) {
    classActive(checkNumber(inp.value));
  }
  classValid(valid);
  event.preventDefault();
});

inp.addEventListener('input', () => {
  const active = document.querySelector('.img-card-active');
  if (active) {
    active.classList.remove('img-card-active');
  }
  const leb = document.getElementById('leb');
  if (leb) {
    leb.remove();
  }
});

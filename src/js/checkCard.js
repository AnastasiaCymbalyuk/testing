export default function checkNumber(value) {
  const array = value.split('').map((num) => Number(num));
  const numberLast = array[array.length - 1];
  let card;
  if (numberLast === 2) {
    card = 'mir';
  } else if (numberLast === 4) {
    card = 'visa';
  } else if (numberLast === 5) {
    card = 'mastercard';
  } else if (numberLast === 6) {
    card = 'unionpay';
  } else if (numberLast === 3) {
    card = 'express';
  } else {
    card = new Error('Неизвестная платежная система');
  }
  return card;
}

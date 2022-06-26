import checkValidate from '../checkValid';
import checkNumber from '../checkCard';

test.each([
  ['Валидный номер карты', '4916560548664364', true],
  ['Невернрая длина номера карты', '49165605486643644', false],
  ['Невалидный номер карты', '4916560548664314', false],
])(('%s'), (_, inp, exp) => {
  expect(checkValidate(inp)).toBe(exp);
});

test.each([
  ['Visa', '4916560548664364', 'visa'],
  ['Mir', '3536944762128672', 'mir'],
  ['Mastercard', '5366026385477775', 'mastercard'],
  ['Unionpay', '6378234651845386', 'unionpay'],
  ['Express', '6011154424475233', 'express'],
])(('%s'), (_, inp, exp) => {
  expect(checkNumber(inp)).toBe(exp);
});

test('Error', () => {
  const inp = '4716316319530041';
  const exp = new Error('Неизвестная платежная система');
  expect(checkNumber(inp)).toMatchObject(exp);
});

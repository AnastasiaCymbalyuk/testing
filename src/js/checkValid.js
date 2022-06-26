/* eslint-disable no-plusplus */
export default function checkValidate(inp) {
  if (inp.length === 16) {
    let sum = 0;
    const array = inp.split('').map((num) => Number(num));
    for (let i = array.length - 2; i >= 0; i--) {
      if (i % 2 === 0 || i === 0) {
        const num = array[i] * 2;
        if (num > 9) {
          sum += (num - 9);
        } else {
          sum += num;
        }
      } else {
        sum += array[i];
      }
    }
    if (10 - (sum % 10) === array[array.length - 1]) {
      return true;
    }
    return false;
  }
  return false;
}

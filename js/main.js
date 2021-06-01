/* Использованые ссылки:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function getRandomNumber(minNumber, maxNumber) {
  if ((minNumber >= 0) && (minNumber < maxNumber)) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }
  return 'Заданные числа не соответствуют условиям!';
}

function getRandomFloatNumber(minFloatNumber, maxFloatNumber, pointRound) {
  if ((minFloatNumber >= 0) && (minFloatNumber < maxFloatNumber)) {
    const floatRandomNumber = Math.random() * (maxFloatNumber - minFloatNumber) + minFloatNumber;
    const floatNumber = parseFloat(floatRandomNumber.toFixed(pointRound));
    if ((floatNumber >= minFloatNumber) && (floatNumber <= maxFloatNumber)) {
      return floatNumber;
    }
  }
  return 'Заданные числа не соответствуют условиям!';
}

getRandomNumber(10, 15);
getRandomFloatNumber(1.1, 1.5, 3);

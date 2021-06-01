/* Использованые ссылки:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

// Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:

// имя_функции(от, до); // Результат: целое число из диапазона "от...до"
// Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.

function getRandomNumber(minNumber, maxNumber) {
  if ((minNumber >= 0) && (minNumber < maxNumber)) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }
  return 'Заданные числа не соответствуют условиям!';
}

function getRandomFloatNumber(minFloatNumber, maxFloatNumber, pointRound) {
  if ((minFloatNumber >= 0) && (minFloatNumber < maxFloatNumber)) {
    let floatRandomNumber = Math.random() * (maxFloatNumber - minFloatNumber) + minFloatNumber;
    let floatNumber = parseFloat(floatRandomNumber.toFixed(pointRound));
    if ((floatNumber >= minFloatNumber) && (floatNumber <= maxFloatNumber)) {
      return floatNumber;
    }
  }
  return 'Заданные числа не соответствуют условиям!';
}

getRandomNumber(10, 15);
getRandomFloatNumber(1.1, 1.5, 3);

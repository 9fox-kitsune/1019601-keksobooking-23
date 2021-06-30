// *** МОДУЛЬ С ВСПОМОГАТЕЛЬНЫМИ ФУНКЦИЯМИ

/* eslint-disable prefer-template */
/* eslint-disable id-length */
/* eslint-disable no-console */
/* Использованые ссылки:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция получения случайного целого числа
function getRandomNumber(minNumber, maxNumber) {
  if ((minNumber >= 0) && (minNumber < maxNumber)) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  }
  return 'Заданные числа не соответствуют условиям!';
}

// Функция получения случайного дробного числа
function getRandomFloatNumber(minFloatNumber, maxFloatNumber, pointRound) {
  if ((minFloatNumber >= 0) && (minFloatNumber < maxFloatNumber)) {
    const FLOAT_RANDOM_NUMBER = Math.random() * (maxFloatNumber - minFloatNumber) + minFloatNumber;
    const FLOAT_NUMBER = parseFloat(FLOAT_RANDOM_NUMBER.toFixed(pointRound));
    if ((FLOAT_NUMBER >= minFloatNumber) && (FLOAT_NUMBER <= maxFloatNumber)) {
      return FLOAT_NUMBER;
    }
  }
  return 'Заданные числа не соответствуют условиям!';
}

// Функция получения случайного индекса массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomPositiveFloat, getRandomPositiveInteger, getRandomNumber, getRandomFloatNumber, getRandomArrayElement};

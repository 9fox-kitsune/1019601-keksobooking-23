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
    const FLOAT_RANDOM_NUMBER = Math.random() * (maxFloatNumber - minFloatNumber) + minFloatNumber;
    const FLOAT_NUMBER = parseFloat(FLOAT_RANDOM_NUMBER.toFixed(pointRound));
    if ((FLOAT_NUMBER >= minFloatNumber) && (FLOAT_NUMBER <= maxFloatNumber)) {
      return FLOAT_NUMBER;
    }
  }
  return 'Заданные числа не соответствуют условиям!';
}

getRandomNumber(10, 15);
getRandomFloatNumber(1.1, 1.5, 3);

// В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

// Структура каждого объекта должна быть следующей:

// author, объект — описывает автора. Содержит одно поле:

// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];


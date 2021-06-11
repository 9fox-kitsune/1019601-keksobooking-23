/* eslint-disable id-length */
/* eslint-disable prefer-template */
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

const PRICE_MIN = 5000;
const PRICE_MAX = 25000;
const ROOM_MAX = 5;
const GUESTS_MAX = 10;
const OBJECT_COUNT = 10;

const AVATARS = [
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

const titles = 'Сдается отличный вариант!';
const descriptions = 'Просторная, светлая, уютная';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN_ALL = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT_ALL = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES_ITEMS_LIST = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS_ITEMS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const authorAvatar = () => ({
  avatar: getRandomArrayElement(AVATARS),
});

// features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
const featuresLength = getRandomNumber(1, 6);
const createFeaturesList = () => {
  const featuresItems = new Array(featuresLength).fill('');
  for (let i = 0; i <= featuresLength - 1; i++) {
    const randomIndex = getRandomNumber(0, 5);
    if (!featuresItems.includes(FEATURES_ITEMS_LIST[randomIndex])) {
      featuresItems[i] = FEATURES_ITEMS_LIST[randomIndex];
    } else {
      i--;
    }
  }
  return featuresItems;
};

const locations = () => ({
  lat: getRandomFloatNumber(35.65000, 35.70000, 5),
  lng: getRandomFloatNumber(139.70000, 139.80000, 5),
});

const offers = () => ({
  title: titles,
  address: locations.lat + ' ' + locations.lng,
  price: getRandomNumber(PRICE_MIN, PRICE_MAX),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomNumber(1, ROOM_MAX),
  guests: getRandomNumber(1, GUESTS_MAX),
  checkin: getRandomArrayElement(CHECKIN_ALL),
  checkout: getRandomArrayElement(CHECKOUT_ALL),
  features: createFeaturesList,
  description: descriptions,
  photos: getRandomArrayElement(PHOTOS_ITEMS),
});

const objectInfo = () => ({
  author: authorAvatar(),
  offer: offers(),
  location: locations(),
});

const objectsNearby = new Array(OBJECT_COUNT).fill(null).map(() => objectInfo());

// eslint-disable-next-line no-console
console.log(objectsNearby);

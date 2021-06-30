/* eslint-disable id-length */
// *** МОДУЛЬ СОЗДАНИЯ ДАННЫХ

import {getRandomNumber, getRandomFloatNumber, getRandomArrayElement} from './util.js';

const OBJECT_COUNT = 10;
const PRICE_MIN = 5000;
const PRICE_MAX = 25000;
const ROOM_MAX = 5;
const GUESTS_MAX = 10;

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

const TITLES = [
  'Сдается отличный вариант!',
  'Хорошая цена, отличное качество!',
  'Сдается недорого.',
  'Лучшее только у нас!',
];

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

const DESCRIPTIONS = [
  'Просторная, светлая, уютная',
  'Имеется вся мебель и техника.',
  'Заезжай и живи, все есть.',
  'Все платежи включены в стоимость.',
];

const PHOTOS_ITEMS_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

//Функция получения информации об авторе
const getAuthorAvatar = () => ({
  avatar: getRandomArrayElement(AVATARS),
});

// Функция создания массива, содержащего инфо об удобствах объекта
const createFeaturesList = () => {
  const featuresLength = getRandomNumber(1, 6);
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

// Функция создания массива, содержащего фото объекта
const createPhotosList = () => {
  const photosItemsListLength = getRandomNumber(1, 3);
  const photosItems = new Array(photosItemsListLength).fill('');
  for (let i = 0; i <= photosItemsListLength - 1; i++) {
    const randomIndex = getRandomNumber(0, 2);
    if (!photosItems.includes(PHOTOS_ITEMS_LIST[randomIndex])) {
      photosItems[i] = PHOTOS_ITEMS_LIST[randomIndex];
    } else {
      i--;
    }
  }
  return photosItems;
};

// Функция получения местоположения объекта
const getLocation = () => ({
  lat: getRandomFloatNumber(35.65000, 35.70000, 5),
  lng: getRandomFloatNumber(139.70000, 139.80000, 5),
});

// Функция получения полной информации об объекте
const getObjectInfo = () => {
  const coordinates = getLocation();
  const getOffer = () => ({
    title: getRandomArrayElement(TITLES),
    address: `${coordinates.lat  }, ${  coordinates.lng}`,
    price: getRandomNumber(PRICE_MIN, PRICE_MAX),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomNumber(1, ROOM_MAX),
    guests: getRandomNumber(1, GUESTS_MAX),
    checkin: getRandomArrayElement(CHECKIN_ALL),
    checkout: getRandomArrayElement(CHECKOUT_ALL),
    features: createFeaturesList(),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: createPhotosList(),
  });
  return {
    author: getAuthorAvatar(),
    offer: getOffer(),
    location: coordinates,
  };
};

const objectsNearby = new Array(OBJECT_COUNT).fill(null).map(() => getObjectInfo());

export {objectsNearby};

// *** МОДУЛЬ СОЗДАНИЯ ДАННЫХ

import {getObjectInfo} from './util.js';

const OBJECT_COUNT = 10;

const objectsNearby = new Array(OBJECT_COUNT).fill(null).map(() => getObjectInfo());

export {objectsNearby};

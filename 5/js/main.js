import {photosDataGenerator} from './data.js';
import {picsRender} from './picsRender.js';

const photosNumber = 25;
const photosData = photosDataGenerator(photosNumber); // eslint-disable-line no-unused-vars
picsRender(photosData);

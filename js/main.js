import {photosDataGenerator} from './data.js';
import {picsRender} from './picsRender.js';
import {createForm} from './form.js';
import {enableScaleChanging} from './scale.js';

const photosNumber = 26;
const photosData = photosDataGenerator(photosNumber); // eslint-disable-line no-unused-vars
picsRender(photosData);
createForm();
enableScaleChanging();

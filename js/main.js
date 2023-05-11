import {picsRender} from './picsRender.js';
import {createForm} from './form.js';
import {createLoader} from './server.js';

const loadPics = createLoader(picsRender);
loadPics();

createForm();

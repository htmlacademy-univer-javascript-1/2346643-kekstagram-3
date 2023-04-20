import {randInt} from './util';

export function photosDataGenerator(n) {  // eslint-disable-line no-unused-vars
  const photosData = [];
  let dataObj;
  for (let i = 0; i < n; i++) {
    dataObj = {
      id: i + 1,
      url: `photos/${i + 1}`,
      description: `My cool photo number ${i + 1}`,
      likes: randInt(15, 200),
      comments: randInt(0, 200)
    };
    photosData.push(dataObj);
  }
  return photosData;
}

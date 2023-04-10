function randInt(min,max) {
  if (max < min) {
    throw Error('Incorrect input. Min should be less or equal than max');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1) + min);
}

function stringLengthChecker(string, maxLength) {  // eslint-disable-line no-unused-vars
  const length = string.length;
  return length <= maxLength;
}


function photosDataGenerator(n) {  // eslint-disable-line no-unused-vars
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

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

export function picsRender(photosData) {
  const pictureFragment = document.createDocumentFragment();

  for (const {url, likes, comments} of photosData) {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('picture__img').src = url;
    picture.querySelector('picture__likes').textContent = likes;
    picture.querySelector('picture__comments').textContent = comments;
    pictureFragment.append(picture);
  }
  document.querySelector('.pictures').appendChild(pictureFragment);
}



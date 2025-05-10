import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  formEl: document.querySelector('.js-form'),
  loaderEl: document.querySelector('.loader'),
  galleryEl: document.querySelector('.gallery'),
};

export const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'title',
});

export function showSuccessMsg() {
  iziToast.success({
    title: 'Nice!',
    message: 'Searching for pictures',
    position: 'topRight',
  });
}

export function showWarningMsg() {
  iziToast.warning({
    title: 'Caution!',
    message: 'Looks like you forgot to type something',
    position: 'topRight',
  });
}

export function showErrorMsg(err) {
  iziToast.error({
    title: `${err}!`,
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    maxWidth: 500,
  });
}

export function renderGallery(images) {
  refs.galleryEl.insertAdjacentHTML('beforeend', createGallery(images));
  lightbox.refresh();
}

function createGallery(images) {
  return images.map(renderGalleryItem).join('');
}

function renderGalleryItem(item) {
  const {
    largeImageURL,
    webformatURL,
    views,
    comments,
    likes,
    downloads,
    tags,
  } = item;

  const mainTag = tags ? tags.split(',')[0].trim() : 'image';

  return `
    <li class="response-list-item">
      <a class="simplelightbox-img-wrapper" href="${largeImageURL}">
        <img
          class="response-img"
          src="${webformatURL}"
          alt="${mainTag}"
          title="${mainTag}"
        />
      </a>
      <ul class="response-item-des-list">
        <li class="item-desc-element" data-likes>
          Likes
          <p class="item-amount">${likes}</p>
        </li>
        <li class="item-desc-element" data-views>
          Views
          <p class="item-amount">${views}</p>
        </li>
        <li class="item-desc-element" data-comments>
          Comments
          <p class="item-amount">${comments}</p>
        </li>
        <li class="item-desc-element" data-downloads>
          Downloads
          <p class="item-amount">${downloads}</p>
        </li>
      </ul>
    </li>`;
}

export function clearGallery() {
  refs.galleryEl.innerHTML = '';
}

export function showLoader() {
  refs.loaderEl.style.display = 'flex';
}

export function hideLoader() {
  refs.loaderEl.style.display = 'none';
}

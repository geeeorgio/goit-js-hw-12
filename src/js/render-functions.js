import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  formEl: document.querySelector('.js-form'),
  loaderEl: document.querySelector('.loader'),
  galleryEl: document.querySelector('.gallery'),
  loadMoreEl: document.querySelector('.load-more-btn'),
};

// === pagination ===

export const collectInfo = {
  page: 1,
  query: '',
  totalHits: null,
  limit: 15,

  getPage() {
    return this.page;
  },

  setNewPage() {
    this.page += 1;
  },

  getQuery() {
    return this.query;
  },

  setNewQuery(newQuery, newPage, newHits) {
    this.query = newQuery;
    this.page = newPage;
    this.totalHits = newHits;
  },

  hitsLeft() {
    return this.totalHits - this.page * this.limit;
  },

  reset() {
    this.query = '';
    this.page = 1;
    this.totalHits = null;
  },
};

// === lightbox ===

export const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'title',
});

// === notifications ===

export function showSuccessMsg(amount = 1) {
  iziToast.success({
    timeout: 3333,
    title: 'Nice!',
    message: `You found ${amount} images`,
    position: 'topRight',
  });
}

export function showWarningMsg(warn = '') {
  iziToast.warning({
    timeout: 3333,
    title: 'Caution!',
    message: `${warn}`,
    position: 'topRight',
  });
}

export function showErrorMsg(err = '') {
  iziToast.error({
    timeout: 3333,
    title: 'Oups!',
    message: `${err}`,
    position: 'topRight',
    maxWidth: 450,
  });
}

// === gallery ===

export function renderGallery(images) {
  if (!images || images.length === 0) return;
  refs.galleryEl.insertAdjacentHTML('beforeend', createGallery(images));
  lightbox.refresh();
}

function createGallery(images = []) {
  return images.map(renderGalleryItem).join('');
}

function renderGalleryItem(item = {}) {
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

// === loaders ===

export function showLoader() {
  refs.loaderEl.style.display = 'flex';
}

export function hideLoader() {
  refs.loaderEl.style.display = 'none';
}

export function showLoadMoreButton() {
  refs.loadMoreEl.classList.add('show');
}

export function hideLoadMoreButton() {
  refs.loadMoreEl.classList.remove('show');
}

// === rect/scroll ===

export function getRect(obj = {}) {
  return obj.getBoundingClientRect();
}

export function getItemHeight(obj = {}) {
  return obj.height;
}

export function scrollItem(height = 1) {
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

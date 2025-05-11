import * as functions from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

functions.refs.formEl.addEventListener('submit', handleFormSubmit);
functions.refs.loadMoreEl.addEventListener('click', handleLoadMoreClick);

function handleFormSubmit(e) {
  e.preventDefault();
  functions.clearGallery();
  functions.showLoader();
  functions.collectInfo.reset();

  const inputData = functions.refs.formEl.elements['search-text'].value.trim();
  if (!inputData || inputData === '') {
    functions.showWarningMsg();
    functions.hideLoader();
    return;
  }

  getImagesByQuery(inputData)
    .then(response => {
      const {
        data: { hits, totalHits },
        config: {
          params: { page },
        },
      } = response;

      if (hits.length === 0) {
        throw new Error('Oups');
      }

      functions.renderGallery(hits);
      functions.showLoadMoreButton();
      functions.collectInfo.setNewQuery(inputData, page, totalHits);
    })
    .catch(error => {
      functions.showErrorMsg(error);
    })
    .finally(() => {
      functions.hideLoader();
    });

  functions.refs.formEl.reset();
}

function handleLoadMoreClick() {
  const totalPages = functions.collectInfo.checkPages();
  const page = functions.collectInfo.getPage();
  if (totalPages < page) {
    functions.hideLoadMoreButton();
    throw new Error(
      `We're sorry, but you've reached the end of search results.`
    );
  }
  const query = functions.collectInfo.getQuery();
  const newPage = functions.collectInfo.setNewPage();

  getImagesByQuery(query, newPage)
    .then(response => {
      console.log(response);
      functions.renderGallery(response.data.hits);
      functions.showLoadMoreButton();
    })
    .catch(error => {
      functions.showErrorMsg(error);
    })
    .finally(() => {
      functions.hideLoader();
    });
}

import * as functions from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

functions.refs.formEl.addEventListener('submit', handleFormSubmit);
functions.refs.loadMoreEl.addEventListener('click', handleLoadMoreClick);

async function handleFormSubmit(e) {
  try {
    e.preventDefault();
    functions.clearGallery();
    functions.hideLoadMoreButton();
    functions.showLoader();
    functions.collectInfo.reset();

    const inputData =
      functions.refs.formEl.elements['search-text'].value.trim();
    if (!inputData || inputData === '') {
      functions.showWarningMsg('Looks like you forgot to type something');
      functions.hideLoader();
      return;
    }

    const {
      data: { hits, totalHits },
      config: {
        params: { page },
      },
    } = await getImagesByQuery(inputData);

    if (hits.length === 0) {
      functions.showErrorMsg(
        'There are no images matching your search query. Please try again!'
      );
      return;
    }

    functions.collectInfo.setNewQuery(inputData, page, totalHits);
    functions.renderGallery(hits);
    functions.showSuccessMsg(totalHits);

    if (hits.length < functions.collectInfo.limit) {
      functions.showWarningMsg(`These are all results found.`);
      return;
    }

    functions.showLoadMoreButton();
  } catch (err) {
    functions.showErrorMsg(err);
  } finally {
    functions.hideLoader();
  }

  functions.refs.formEl.reset();
}

async function handleLoadMoreClick() {
  try {
    functions.showLoader();

    if (functions.collectInfo.hitsLeft() <= 0) {
      functions.hideLoadMoreButton();
      functions.showWarningMsg(`No more images to load.`);
      return;
    }

    const query = functions.collectInfo.getQuery();
    functions.collectInfo.setNewPage();
    const newPage = functions.collectInfo.getPage();

    const {
      data: { hits },
    } = await getImagesByQuery(query, newPage);

    functions.renderGallery(hits);

    const listItem = document.querySelector('.gallery .response-list-item ');
    const listItemParams = functions.getRect(listItem);
    const itemHeight = functions.getItemHeight(listItemParams);
    functions.scrollItem(itemHeight);

    if (hits.length < functions.collectInfo.limit) {
      functions.hideLoadMoreButton();
      functions.showErrorMsg(
        `We're sorry, but you've reached the end of search results.`
      );
    }
  } catch (err) {
    functions.showErrorMsg(err);
  } finally {
    functions.hideLoader();
  }
}

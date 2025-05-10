import * as functions from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

functions.refs.formEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  functions.clearGallery();
  functions.showLoader();

  const inputData = functions.refs.formEl.elements['search-text'].value.trim();
  if (!inputData || inputData === '') {
    functions.showWarningMsg();
    functions.hideLoader();
    return;
  }

  getImagesByQuery(inputData)
    .then(response => {
      functions.renderGallery(response);
    })
    .catch(error => {
      functions.showErrorMsg(error);
    })
    .finally(() => functions.hideLoader());

  functions.refs.formEl.reset();
}

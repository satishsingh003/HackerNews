import fetch from '../../../utils/serviceUtil';
import { HACKERNEWS_ENDPOINT } from '../../../constants';

const getMoreNews = async pageNumber => {
  return fetch(`${HACKERNEWS_ENDPOINT}?page=${pageNumber}`)
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
};

export default getMoreNews;

export const APPEND_ITEMS = 'APEND_ITEMS';
export const UPVOTE_ITEM = 'UPVOTE_ITEM';
export const HIDE_ITEM = 'HIDE_ITEM';

export default (state, { type, payload }) => {
  switch (type) {
    case UPVOTE_ITEM: {
      const newsList = state.hits.map(newsItem => {
        if (newsItem.objectID === payload) {
          return {
            ...newsItem,
            upvoted: true,
          };
        }
        return newsItem;
      });
      return { ...state, hits: newsList };
    }

    case HIDE_ITEM: {
      const hits = state.hits.map(newsItem => {
        if (newsItem.objectID === payload) {
          return {
            ...newsItem,
            hidden: true,
          };
        }
        return newsItem;
      });
      return { ...state, hits };
    }

    case APPEND_ITEMS: {
      const mergedNewsItems = [...state.hits, ...payload.hits];
      return { ...state, hits: mergedNewsItems, pageDisplayed: payload.page };
    }

    default:
      return state;
  }
};

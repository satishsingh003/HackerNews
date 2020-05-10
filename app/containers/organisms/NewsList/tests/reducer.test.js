import reducer, { APPEND_ITEMS, UPVOTE_ITEM, HIDE_ITEM } from '../reducer';

const initialState = {
  hits: [
    {
      objectID: 1,
      title: 'ABC',
    },
    {
      objectID: 12,
      title: 'XYZ',
    },
  ],
  pageDisplayed: 0,
};

describe('reducer test', () => {
  test('test the upvote functionality', () => {
    const cloneInitialState = JSON.parse(JSON.stringify(initialState));
    const newsItem = cloneInitialState.hits.find(obj => obj.objectID === 1);
    expect(newsItem.upvoted).toBeUndefined();

    const upvotePayload = { type: UPVOTE_ITEM, payload: 1 };

    const updatedState = reducer(cloneInitialState, upvotePayload);
    const updatedNewsItem = updatedState.hits.find(obj => obj.objectID === 1);
    expect(updatedNewsItem.upvoted).toBeTruthy();
  });

  test('test the hide functionality', () => {
    const cloneInitialState = JSON.parse(JSON.stringify(initialState));
    const newsItem = cloneInitialState.hits.find(obj => obj.objectID === 1);
    expect(newsItem.hidden).toBeUndefined();

    const upvotePayload = { type: HIDE_ITEM, payload: 1 };

    const updatedState = reducer(cloneInitialState, upvotePayload);
    const updatedNewsItem = updatedState.hits.find(obj => obj.objectID === 1);
    expect(updatedNewsItem.hidden).toBeTruthy();
  });

  test('test the append functionality', () => {
    const cloneInitialState = JSON.parse(JSON.stringify(initialState));
    const loadMorePayload = {
      type: APPEND_ITEMS,
      payload: {
        hits: [
          {
            objectID: 20,
            title: 'PQRS',
          },
        ],
        page: 1,
      },
    };
    const updatedState = reducer(cloneInitialState, loadMorePayload);
    expect(updatedState.hits.length).toBe(3);
    expect(updatedState.pageDisplayed).toBe(1);
  });
});

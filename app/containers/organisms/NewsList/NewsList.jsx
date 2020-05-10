import React, { useReducer } from 'react';
import reducer, {APPEND_ITEMS, UPVOTE_ITEM, HIDE_ITEM} from './reducer';
import fetchNews from './api';

import NewsListComponent from '../../../components/organisms/NewsList';

const NewsList = props => {
    const [state, dispatch] = useReducer(reducer, 
        { 
            hits: props.newsListData.hits, 
            pageDisplayed: props.newsListData.page
        }
    );

    const upVoteNewsItem = (newsItem) => {
        dispatch({ type: UPVOTE_ITEM, payload: newsItem.objectID });
    }
    
    const hideNewsItem = (newsItem) => {
        dispatch({ type: HIDE_ITEM, payload: newsItem.objectID });
    }
    
    const loadMoreNews = async () => {
        const moreData = await fetchNews(parseInt(state.pageDisplayed) + 1);
        dispatch({ type: APPEND_ITEMS, payload: moreData });
    }

    return (
        <NewsListComponent
            newsListData={state.hits}
            loadMoreNews={loadMoreNews}
            upVoteNewsItem={upVoteNewsItem}
            hideNewsItem={hideNewsItem}
     />)
};

export default NewsList;

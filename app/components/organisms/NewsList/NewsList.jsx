import React from 'react';
import PropTypes from 'prop-types';
import NewsListItem from '../NewsListItem';
import { PAGE_TITLE } from '../../../constants';

const NewsList = ({newsListData, loadMoreNews, upVoteNewsItem, hideNewsItem}) => {
    return (
        <>  
            <h1 className="hidden">{PAGE_TITLE}</h1>
            <ul>
                {newsListData.map(listItem => (
                    <NewsListItem 
                        key={listItem.objectID} 
                        newsItem={listItem} 
                        hideNewsItem={hideNewsItem} 
                        upVoteNewsItem={upVoteNewsItem} 
                    />
                ))}
            </ul>
            <a href="#" onClick={loadMoreNews} className="loadMore">Load More</a>
            <style jsx>{`
                .hidden {
                    position: absolute;
                    left: -999px;
                    visibility: hidden;
                }
                .loadMore {
                    text-align: center;
                    display: block;
                    margin-bottom: 50px;
                }
                @media only screen and (min-width: 1024px) {
                    .loadMore {
                        text-align: left;
                        text-indent: 100px;
                    }
                }
            `}</style>
        </>
    );
};

NewsList.propTypes = {
    newsListData: PropTypes.array,
};

export default NewsList;

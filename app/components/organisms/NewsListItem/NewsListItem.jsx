import React from 'react';
import timeSince from '../../../utils/timeSince';

const NewsListItem = ({newsItem, hideNewsItem, upVoteNewsItem}) => {
    const hideThisItem = (e) => {
        e.preventDefault();
        hideNewsItem(newsItem);
    }

    const upVote = (e) => {
        e.preventDefault();
        if (!newsItem.upvoted) {
            upVoteNewsItem(newsItem);
        }
    }

    if (newsItem.title && !newsItem.hidden) {
        return <li key={newsItem.objectID}>
            <span className={"lgOnly"}>
                <span className={"commentsCount"}>{newsItem.num_comments}</span>
                <span className="upVote">
                    <span className={newsItem.upvoted ? 'upVoted' : ''}>{newsItem.points}</span>
                    <a href="#" onClick={upVote} className="upVoteIcon">Up</a>
                </span>
            </span>
            
            <span className="title space">{newsItem.title}</span>
            <br className="smOnly" />
            <span className="space">{`(${newsItem.url})`}</span>
            <br className="smOnly" />
            <span className="space author">{`by ${newsItem.author}`}</span>
            <span className="space timeSince">{timeSince(newsItem.created_at)}</span>
            <br className="smOnly" />
            <span className={"smOnly"}>
                <span className={"commentsCount"}>{newsItem.num_comments}</span>
                <span className="upVote">
                    <span className={newsItem.upvoted ? 'upVoted' : ''}>{newsItem.points}</span>
                    <a href="#" onClick={upVote} className="upVoteIcon">Up</a>
                </span>
            </span>
            <a href="#" className="space hideItem" onClick={hideThisItem}>[hide]</a>
            <style jsx>{`
                li {
                    padding: 3px 30px 3px 80px;
                    list-style: none;
                    margin: 5px 0;
                    font-size: 12px;
                }
                li:nth-child(even) {background: #CCC;}

                a {
                    text-decoration: none;
                    color: blue;
                    font-family: 'Arial';
                }

                a:hover {
                    opacity: 0.6;
                }

                .commentsCount, .upVote {
                    width: 70px;
                    display: inline-block;
                }
                .upVoteIcon {
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 4px 8px 4px;
                    border-color: transparent transparent #000 transparent;
                    text-indent: -999px;
                    display: inline-block;
                    line-height: 10px;
                    margin-left: 10px;
                }
                .upVoted {
                    color: red;
                }
                .upVoted + .upVoteIcon {
                    border-color: transparent transparent #aaa !important;
                }
                .title {
                    font-size: 16px;
                }
                .timeSince {
                    color: #848484;
                }
                .author {
                    color: #4c4c4c;
                }
                .space {
                    margin-right: 10px;
                }
                .smOnly {
                    display: none;
                }
                @media only screen and (max-width: 1024px) {
                    li {
                        padding: 10px 10px;
                        line-height: 16px;
                    }
                    .smOnly {
                        display: block;
                    }
                    .lgOnly {
                        display: none;
                    }
                    .commentsCount {
                        width: 50px;
                    }
                    .upVote {
                        width: 60px;
                    }
                }
            `}</style>
        </li>
    }
    return null;
}

export default NewsListItem;
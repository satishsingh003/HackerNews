import React from 'react';
import { shallow } from 'enzyme';
import NewsListItem from '../NewsListItem';

/*eslint-disable */
const propData = {
  newsItem: {
    created_at: '2017-11-28T19:41:10.000Z',
    title: 'macOS High Sierra: Anyone can login as “root” with empty password',
    url: 'https://twitter.com/lemiorhan/status/935578694541770752',
    author: 'vladikoff',
    points: 3001,
    story_text: null,
    comment_text: null,
    num_comments: 813,
    story_id: null,
    story_title: null,
    story_url: null,
    objectID: '15800676',
  },
  hideNewsItem: () => {},
  upVoteNewsItem: () => {},
};
/*eslint-enable */

describe('test the news list item component', () => {
  test('test snapshot', () => {
    const NewsListItemComponent = shallow(<NewsListItem {...propData} />);
    expect(NewsListItemComponent).toMatchSnapshot();
  });

  test('test if the rendered component has a li tag', () => {
    const NewsListItemComponent = shallow(<NewsListItem {...propData} />);
    expect(NewsListItemComponent.find('li')).toHaveLength(1);
  });

  test('test hide functionality if calling the props method', () => {
    const mockCallbackFunction = jest.fn();
    const newPropsData = { ...propData, hideNewsItem: mockCallbackFunction };
    const NewsListItemComponent = shallow(<NewsListItem {...newPropsData} />);
    NewsListItemComponent.find('.hideItem').simulate('click', {
      preventDefault: jest.fn,
    });
    expect(mockCallbackFunction.mock.calls.length).toBe(1);
  });
});

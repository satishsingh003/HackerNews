import React from 'react';
import { shallow } from 'enzyme';
import NewsList from '../NewsList';

const propData = {
  newsListData: [
    {
      objectID: 1,
      title: 'ABC',
    },
    {
      objectID: 12,
      title: 'XYZ',
    },
  ],
  loadMoreNews: jest.fn(),
};

describe('test News list UL component', () => {
  test('test if the rendered component has a UL tag', () => {
    const newsListWrapper = shallow(<NewsList {...propData} />);
    expect(newsListWrapper.find('ul')).toHaveLength(1);
  });

  test('test load more if calling the props method', () => {
    const mockCallbackFunction = jest.fn();
    const newPropsData = { ...propData, loadMoreNews: mockCallbackFunction };
    const newsListWrapper = shallow(<NewsList {...newPropsData} />);
    newsListWrapper.find('a').simulate('click');
    expect(mockCallbackFunction.mock.calls.length).toBe(1);
  });
});

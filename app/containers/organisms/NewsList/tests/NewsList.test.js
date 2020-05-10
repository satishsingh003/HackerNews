import React from 'react';
import { shallow } from 'enzyme';
import NewsList from '../NewsList';

const propData = {
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
  page: 0,
};

describe('testing NewsList container component', () => {
  test('should render correctly', () => {
    const NewsListWrapper = shallow(<NewsList newsListData={propData} />);
    expect(NewsListWrapper).toMatchSnapshot();
  });
});

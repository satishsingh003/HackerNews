import fetch from '../../../../utils/serviceUtil';
import getMoreRows from '../api';

jest.mock('../../../../utils/serviceUtil');

describe('test get more data functionality', () => {
  test('load more', async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: '1',
            title: 'a',
          },
        ],
      },
    };
    // eslint-disable-next-line compat/compat
    fetch.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getMoreRows(0)).resolves.toEqual(data.data);
  });
});

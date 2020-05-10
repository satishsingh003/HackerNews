import axios from 'axios';
import fetch from '../serviceUtil';

jest.mock('axios');

describe('test service util', () => {
  test('fetches successfully data from an API', async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: '1',
            title: 'a',
          },
          {
            objectID: '2',
            title: 'b',
          },
        ],
      },
    };
    // eslint-disable-next-line compat/compat
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(fetch('url endpoint')).resolves.toEqual(data);
  });

  test('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    axios.get.mockImplementationOnce(() =>
      // eslint-disable-next-line compat/compat
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetch('url endpoint')).rejects.toThrow(errorMessage);
  });
});

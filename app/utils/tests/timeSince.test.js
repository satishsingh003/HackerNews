import timeSince from '../timeSince';

describe('test time since utility', () => {
  test('test 1 minute ago', () => {
    const date = new Date().getTime();
    const minute = 1 * 60 * 1000;
    const str = timeSince(date - minute);
    expect(str).toEqual('1 minute ago');
  });

  test('test 1 hour ago', () => {
    const date = new Date().getTime();
    const hour = 60 * 60 * 1000;
    const str = timeSince(date - hour);
    expect(str).toEqual('1 hour ago');
  });

  test('test 1 day ago', () => {
    const date = new Date().getTime();
    const day = 24 * 60 * 60 * 1000;
    const str = timeSince(date - day);
    expect(str).toEqual('1 day ago');
  });

  test('test 1 month ago', () => {
    const date = new Date().getTime();
    const month = 30 * 24 * 60 * 60 * 1000;
    const str = timeSince(date - month);
    expect(str).toEqual('1 month ago');
  });
});

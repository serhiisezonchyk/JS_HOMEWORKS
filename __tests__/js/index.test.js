import { includes, indexOf, lastIndexOf, some } from '../../src/js';

describe('lastIndexOf function.', () => {
  const arr = [1, 9, 3, 4, 9, 6, 7, 4];
  test('Returns correct index if element exist', () => {
    expect(lastIndexOf(arr, 9)).toEqual(4);
  });
  test('Returns -1 if element does not exist', () => {
    expect(lastIndexOf(arr, 8)).toEqual(-1);
  });
  test('Returns position after n symbols from end', () => {
    expect(lastIndexOf(arr, 9, 3)).toEqual(1);
  });
});

describe('indexOf function', () => {
  const arr = [1, 9, 3, 4, 9, 6, 7, 4];
  test('Returns correct index if element exist', () => {
    expect(indexOf(arr, 9)).toEqual(1);
  });
  test('Returns -1 if element does not exist', () => {
    expect(indexOf(arr, 8)).toEqual(-1);
  });
  test('Correct behavior if from index param out of length', () => {
    expect(indexOf([], 1, -2)).not.toBeFalsy();
    expect(indexOf([1], 2, 3)).toBeTruthy();
  });
  test('Element exist after n symbols from the start', () => {
    expect(indexOf(arr, 9, 3)).toEqual(4);
  });
});

describe('includes function', () => {
  test('Search for undefined in a sparse array', () => {
    const arr = [1, , 3];
    expect(includes(arr, undefined)).toBeTruthy();
  });
  test('Search for existing element', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 3];
    expect(includes(arr, 3)).toBeTruthy();
    expect(includes(arr, 3, 6)).toBeTruthy();
    expect(includes(arr, 4, 6)).not.toBeTruthy();
  });
  test('Check equal with types', () => {
    const arr = ['1', '2', '3'];
    expect(includes(arr, 1)).toBeFalsy();
  });
});

describe('some function', () => {
  test('Searching in empty array', () => {
    const arr = [];
    expect(some(arr, (el) => el > 12)).toBeFalsy();
  });
  test('Searching with condition', () => {
    const arr = [4, , 5, 11, 12, 4, 8, 9];
    expect(some(arr, (el) => el > 10)).toBeTruthy();
    expect(some(arr, (el) => el < 4)).not.toBeTruthy();
  });
});

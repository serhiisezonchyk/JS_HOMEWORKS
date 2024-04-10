export const indexOf = (arr, searchElement, fromIndex = 0) => {
  const startPos = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  for (let i = startPos; i < arr.length; i += 1) {
    if (arr[i] === searchElement) return i;
  }
  return -1;
};

export const lastIndexOf = (arr, searchElement, fromIndex = arr.length) => {
  const startPos = fromIndex < 0 ? arr.length + fromIndex : fromIndex;

  for (let i = startPos; i >= 0; i -= 1) {
    if (arr[i] === searchElement) return i;
  }
  return -1;
};

export const includes = (arr, searchElement, fromIndex = 0) => {
  const startPos = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
  for (let i = startPos; i < arr.length; i += 1) {
    if (arr[i] === searchElement) return true;
  }
  return false;
};

export const some = (arr, callback) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) return true;
  }
  return false;
};

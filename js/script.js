'use strict';

const generateKey = (length, characters) => {
  const key = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key.push(characters.at(randomIndex));
  }
  return key.join('');
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);

console.log(key);

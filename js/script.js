'use client';

let sum = 0;
summLoop: for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) continue summLoop;
  sum += i;
}

console.log(sum);

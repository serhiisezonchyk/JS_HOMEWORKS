'use strict';

/*
 * Task 1
 */
const user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);

user.name = 'Pete';
console.log(user);

delete user.name;
console.log(user);

/*
 * Task 2
 * Оскільки обʼєкти це reference type,
 * ми можемо змінювати їх властивості,
 * так як при зміні обʼєкту посилання не змінюється.
 */

/*
 * Task 3
 */
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (const person in salaries) {
  sum += salaries[person];
}

console.log(sum);

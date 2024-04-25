/* task 1
 * Типи Даних: Створіть змінні для кожного з основних типів даних у TypeScript: string, number, boolean,
 * null, undefined, object, any, void, never, та unknown. Додайте приклади використання.
 */
const string1: string = 'Hello. I`m string';

let number1: number = 123;
number1 = 1.23;

let boolean1: boolean = true;
boolean1 = false;

const null1: null = null;

const undefined1: undefined = undefined;

const object1: object = { name: 'Serhii', lastName: 'Sezonchyk' };

let any1: any = 'Hello. I`m string';
any1 = 2;
any1 = false;
any1.toString();

const void1 = (): void => {
  console.log('Function doesn`t return something');
  // Throw string is not assignable to type void exeption
  // return 'hi';
};
const unknown1: unknown = 'Hello. I`m string';
//We can`t use any methods for unknown like with any type
//unknown1.toString();

/* task 2
 * Інтерфейси: Створіть інтерфейс Person, який описує ім'я (string), вік (number) та хобі
 * (масив stringів). Створіть об'єкт, який відповідає цьому інтерфейсу.
 */

interface Person {
  name: string;
  age: number;
  hobbies: Array<string>;
}

const user: Person = {
  name: 'Serhii',
  age: 21,
  hobbies: ['js', 'kudo'],
};

/* task 3
 * Функції: Напишіть функцію, яка приймає два числа та повертає їх суму.
 * Використайте стрілкову функцію та типізацію параметрів та результату.
 */

const sum = (x: number, y: number): number => x + y;
console.log(sum(1, 2));

/* task 4
 * Перелічення (Enum): Створіть перелічення для днів тижня.
 * Використайте це перелічення для створення змінної, яка представляє поточний день тижня.
 */

enum Week {
  MONDAY = 1,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const today = Week.THURSDAY;

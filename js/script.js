'use strict';

const formAgeStr = (age) => {
  if (age === null || age.trim() === '') return 'Ви не вказали вік. ';
  else return `Вам ${age} років. `;
};

const formCityStr = (city) => {
  if (city === null) return 'Ви не вказали місто. ';

  switch (city.trim()) {
    case '':
      return 'Ви не вказали місто. ';
    case 'Київ':
      return 'Ти живеш у столиці України: Києві. ';
    case 'Лондон':
      return 'Ти живеш у столиці Британії: Лондоні. ';
    case 'Вашингтон':
      return 'Ти живеш у столиці usa: Вашингтоні. ';
    default:
      return `Ти живеш у місті ${city}.`;
  }
};

const formSportStr = (sport) => {
  if (sport === null) return 'Ви не вказали свій улюблений спорт. ';

  switch (sport.trim()) {
    case '':
      return 'Ви не вказали свій улюблений спорт. ';
    case 'Бокс':
      return 'Бокс? Круто! Ти хочеш бути як Майк Тайсон? ';
    case 'Футбол':
      return 'Футбол? Круто! Ти хочеш бути як Мессі? ';
    case 'Баскетбол':
      return 'Баскетбол? Круто! Ти хочеш бути як Майкл Джордан? ';
    default:
      return `Тобі подобається ${sport}. `;
  }
};
const task1 = () => {
  const age = prompt('Скільки тобі років?');
  (age === null || age.trim() === '') &&
    alert('Шкода, що Ви не захотіли ввести свій вік.');

  const city = prompt('Де ти живеш?');
  (city === null || city.trim() === '') &&
    alert('Шкода, що Ви не захотіли ввести своє місто.');

  const sport = prompt('Який твій улблений вид спорту?');
  (sport === null || sport.trim() === '') &&
    alert('Шкода, що Ви не захотіли ввести свій улюблений спорт.');

  const resultString =
    formAgeStr(age) + formCityStr(city) + formSportStr(sport);
  alert(resultString);
};

task1();

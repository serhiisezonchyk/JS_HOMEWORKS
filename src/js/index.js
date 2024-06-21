import Apartment from './Apartment.js';
import House from './House.js';
import Human from './Human.js';

(function () {
  const human1 = new Human('Serhii', 'male');
  const human2 = new Human('Mark', 'male');
  const human3 = new Human('Katherin', 'female');
  const human4 = new Human('Serhii', 'male');

  const apartment1 = new Apartment();
  const apartment2 = new Apartment();
  const apartment3 = new Apartment();

  apartment1.addResident(human1);
  apartment1.addResident(human2);
  apartment1.addResident(human3);
  apartment2.addResident(human4);

  console.log(apartment1);
  console.log(apartment2);
  console.log(apartment3);

  const house1 = new House(2);
  const house2 = new House(5);

  house1.addAppartment(apartment1);
  house1.addAppartment(apartment2);

  house2.addAppartment(apartment3);

  console.log(house1);
  console.log(house2);
})();

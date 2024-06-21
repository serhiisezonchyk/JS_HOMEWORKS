import Human from './Human.js';

class Apartment {
  #residents = [];

  addResident(human) {
    if (!Human.isHumam(human)) throw new Error('You can add only human');
    this.#residents.push(human);
  }

  get residents() {
    return this.#residents;
  }
  static isApartment(obj) {
    return obj instanceof Apartment;
  }
}

export default Apartment;
